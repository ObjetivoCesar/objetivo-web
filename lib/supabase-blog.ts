import { supabase } from './supabase';
import { BlogArticle } from './utils-node';

/**
 * Obtiene todos los artículos publicados desde Supabase.
 * Retorna null si hay error o no hay artículos (para hacer fallback a archivos).
 */
export async function getSupabaseArticles(): Promise<BlogArticle[] | null> {
  try {
    const { data: articles, error } = await supabase
      .from('articles')
      .select('*, categories(slug)')
      .eq('published', true)
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Error al obtener artículos de Supabase:', error);
      return null;
    }

    if (!articles || articles.length === 0) {
      return null;
    }

    // Transformar al formato BlogArticle esperado por el frontend
    return articles.map((article: any) => {
      // Manejar la categoría: si tenemos relation, usamos su slug, si no el category_id directo (que a veces es el slug)
      const categorySlug =
        article.categories && Array.isArray(article.categories)
          ? article.categories[0]?.slug
          : article.categories
          ? (article.categories as any).slug
          : article.category_id;

      return {
        id: article.id,
        title: article.title,
        excerpt: article.excerpt || article.meta_description || '',
        image: article.cover_image || article.image_url || '/images/placeholder.jpg',
        date: article.published_at || article.created_at,
        author: 'César Reyes Jaramillo', // Valor por defecto o mapping si tuvieras author_id
        content: article.content,
        rawContent: article.content, // Guardamos el raw por si fuera necesario procesarlo
        slug: article.slug,
        category: categorySlug || 'uncategorized',
        meta_description: article.meta_description,
        isFromSupabase: true, // Flag para identificar el origen
      };
    });
  } catch (error) {
    console.error('Error inesperado al obtener artículos de Supabase:', error);
    return null;
  }
}

/**
 * Obtiene un único artículo por slug desde Supabase.
 * Retorna null si no lo encuentra.
 */
export async function getSupabaseArticleBySlug(slug: string): Promise<BlogArticle | null> {
  try {
    const { data: article, error } = await supabase
      .from('articles')
      .select('*, categories(slug)')
      .eq('slug', slug)
      .eq('published', true)
      .single();

    if (error) {
      if (error.code !== 'PGRST116') { // PGRST116 es "no rows returned" (es normal si no existe)
        console.error(`Error al obtener artículo desde Supabase (slug: ${slug}):`, error);
      }
      return null;
    }

    if (!article) return null;

    const categorySlug =
      article.categories && Array.isArray(article.categories)
        ? article.categories[0]?.slug
        : article.categories
        ? (article.categories as any).slug
        : article.category_id;

    return {
      id: article.id,
      title: article.title,
      excerpt: article.excerpt || article.meta_description || '',
      image: article.cover_image || article.image_url || '/images/placeholder.jpg',
      date: article.published_at || article.created_at,
      author: 'César Reyes Jaramillo',
      content: article.content,
      rawContent: article.content,
      slug: article.slug,
      category: categorySlug || 'uncategorized',
      meta_description: article.meta_description,
      isFromSupabase: true,
    };
  } catch (error) {
    console.error(`Error inesperado al obtener artículo de Supabase (slug: ${slug}):`, error);
    return null;
  }
}
