import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import { revalidatePath, revalidateTag } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    const { category, slug } = await req.json();
    
    if (!category || !slug) {
      return NextResponse.json(
        { success: false, error: "Se requieren category y slug" },
        { status: 400 }
      );
    }

    let localFileDeleted = false;
    let mysqlDeleted = false;
    let supabaseDeleted = false;

    // 1. Eliminar el archivo local (si existe)
    const filePath = path.join(
      process.cwd(),
      'content',
      'blog',
      category,
      `${slug}.md`
    );
    
    try {
      await fs.access(filePath);
      await fs.unlink(filePath);
      console.log(`Archivo local eliminado: ${filePath}`);
      localFileDeleted = true;
    } catch (fileError: any) {
      if (fileError.code === 'ENOENT') {
        console.log(`Archivo local no encontrado (OK, puede estar solo en DB): ${filePath}`);
      } else {
        console.error('Error inesperado al eliminar archivo local:', fileError);
      }
    }

    // 2. Eliminar de MySQL (fuente primaria de producción)
    try {
      const mysql = await import('mysql2/promise');
      const mysqlConn = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        port: parseInt(process.env.MYSQL_PORT || '3306'),
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
      });

      const [result]: any = await mysqlConn.execute('DELETE FROM articles WHERE slug = ?', [slug]);
      await mysqlConn.end();
      
      if (result.affectedRows > 0) {
        console.log(`MySQL: Artículo eliminado (slug: ${slug})`);
        mysqlDeleted = true;
      } else {
        console.log(`MySQL: No se encontró artículo con slug: ${slug}`);
      }
    } catch (mysqlErr) {
      console.error('MySQL Deletion Error:', mysqlErr);
    }

    // 3. Eliminar de Supabase (fuente legacy)
    try {
      const { createClient } = await import('@supabase/supabase-js');
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
      
      if (supabaseUrl && supabaseKey) {
        const supabase = createClient(supabaseUrl, supabaseKey);
        const { error } = await supabase
          .from('articles')
          .delete()
          .eq('slug', slug);
        
        if (!error) {
          console.log(`Supabase: Artículo eliminado (slug: ${slug})`);
          supabaseDeleted = true;
        } else {
          console.error('Supabase Deletion Error:', error);
        }
      }
    } catch (supabaseErr) {
      console.error('Supabase Deletion Error:', supabaseErr);
    }

    // Si al menos una fuente eliminó algo, considerar éxito
    if (localFileDeleted || mysqlDeleted || supabaseDeleted) {
      // Invalidar caché
      revalidatePath(`/blog/${category}/${slug}`);
      revalidatePath('/blog');
      revalidatePath('/');
      revalidateTag('articles');
      
      return NextResponse.json({ 
        success: true,
        message: 'Artículo eliminado correctamente',
        details: {
          localFile: localFileDeleted,
          mysql: mysqlDeleted,
          supabase: supabaseDeleted
        }
      });
    } else {
      return NextResponse.json(
        { success: false, error: 'No se encontró el artículo en ninguna fuente de datos' },
        { status: 404 }
      );
    }

  } catch (error: unknown) {
    console.error('Error al eliminar el artículo:', error);
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    return NextResponse.json(
      { 
        success: false,
        error: 'Error al eliminar el artículo',
        details: process.env.NODE_ENV === 'development' 
          ? errorMessage 
          : 'Por favor, inténtalo de nuevo más tarde.'
      }, 
      { status: 500 }
    );
  }
}