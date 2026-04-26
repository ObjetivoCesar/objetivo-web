import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getCachedArticles, getCachedArticle } from "@/lib/cache-utils"
import * as motion from "framer-motion/client"

// Revalidar la página cada 60 segundos
export const revalidate = 60;
import { marked } from "marked"
import { formatCategory } from "@/lib/format-utils"
import IndustrySolutionsBoxes from "@/components/IndustrySolutionsBoxes"

// Obtener artículos para generar rutas estáticas
export async function generateStaticParams() {
  const articles = await getCachedArticles();
  
  if (!articles) {
    console.error('No se pudieron cargar los artículos para generar rutas estáticas');
    return [];
  }
  
  return articles.map(article => ({
    category: article.category.toLowerCase().replace(/\s+/g, '-'),
    slug: article.slug
  }));
}

// Función para manejar fechas
const formatDate = (dateString: string) => {
  try {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  } catch (error) {
    return dateString;
  }
}

async function getArticleData(category: string, slug: string) {
  try {
    const article = await getCachedArticle(category, slug);
    return article;
  } catch (error) {
    console.error('Error al cargar el artículo:', error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  if (!category || !slug) {
    return {
      title: 'Artículo no encontrado',
      description: 'El artículo solicitado no existe o ha sido eliminado',
    };
  }

  try {
    const article = await getCachedArticle(category, slug);
    if (!article) {
      return {
        title: 'Artículo no encontrado',
        description: 'El artículo solicitado no existe o ha sido eliminado',
      };
    }

    return {
      title: article.title,
      description: article.excerpt,
      openGraph: {
        title: article.title,
        description: article.excerpt,
        images: [{
          url: article.image || '/images/placeholder.jpg',
          width: 1200,
          height: 630,
          alt: article.title,
        }],
      },
    };
  } catch (error) {
    return {
      title: 'Error al cargar el artículo',
      description: 'Ocurrió un error al cargar el artículo solicitado',
    };
  }
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ 
    category: string; 
    slug: string 
  }> 
}) {
  const { category, slug } = await params;
  if (!category || !slug) notFound();

  const article = await getArticleData(category, slug);
  if (!article) notFound();
  
  const allArticles = await getCachedArticles();
  const cleanContent = (article.content || '').toString()
    .replace(/^---[\s\S]*?---\s*/, '')
    .trim();
    
  const contentHtml = marked(cleanContent);
  const safeArticles = Array.isArray(allArticles) ? allArticles : [];
  
  const relatedArticles = safeArticles
    .filter((a: any) => a && a.category === article.category && a.slug !== article.slug)
    .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  // Generate JSON-LD schema dynamically
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "author": {
      "@type": "Person",
      "name": article.author || "César Reyes Jaramillo",
      "jobTitle": "Estratega de Software"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://cesarreyesjaramillo.com/blog/${category}/${slug}`
    },
    // Añadimos metadata específica si es el CRM de turismo
    ...(slug === 'crm-turismo' && {
      "about": [
        {"@type": "Service", "name": "CRM para Hoteles"},
        {"@type": "Service", "name": "Software para Agencias de Viajes"},
        {"@type": "Service", "name": "Gestión de Reservas Restaurantes"}
      ],
      "keywords": "CRM turismo, CRM hoteles, CRM agencias viajes, CRM restaurantes"
    })
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gray-50">
        <section className="py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <Link href="/blog" className="inline-flex items-center text-primary font-medium hover:underline transition-colors px-4 py-2 rounded-lg hover:bg-primary/10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Volver al blog
              </Link>
            </div>
            
            <article className="bg-white rounded-lg shadow-lg overflow-hidden border-none">
              {article.category === 'software-personalizado' ? (
                /* Full Screen Premium Hero */
                <div className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
                   <Image 
                    src={article.image.startsWith('http') || article.image.startsWith('/') ? article.image : `/images/articulos/${article.image}`} 
                    alt={article.title} 
                    fill 
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                      <span className="inline-block text-[#FF6B00] font-bold tracking-widest uppercase text-sm mb-6 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                        {formatCategory(article.category)}
                      </span>
                      <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight">
                        {article.title}
                      </h1>
                      <div className="flex items-center justify-center gap-6 text-gray-300 font-medium">
                        <span>{formatDate(article.date)}</span>
                        <span>{article.author || "César Reyes Jaramillo"}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              ) : (
                /* Standard Hero */
                <>
                  <div className="relative h-64 md:h-96 w-full">
                    <Image 
                      src={article.image.startsWith('http') || article.image.startsWith('/') ? article.image : `/images/articulos/${article.image}`} 
                      alt={article.title} 
                      fill 
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-sm text-white bg-primary px-3 py-1 rounded-full">{formatCategory(article.category)}</span>
                      <span className="text-sm text-gray-500">{formatDate(article.date)}</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{article.title}</h1>
                  </div>
                </>
              )}
              
              <div className="p-8 pt-0">
                {article.excerpt && (
                  <p className="text-xl text-gray-600 mb-8 font-medium">
                    {article.excerpt}
                  </p>
                )}

                {article.slug === 'crm-turismo' && article.category === 'software-personalizado' && (
                  <div className="mb-12 -mx-4 md:-mx-8">
                    <IndustrySolutionsBoxes />
                  </div>
                )}
                
                <div 
                  className="prose max-w-none prose-lg text-gray-700 prose-headings:text-gray-900 prose-orange"
                  dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
                
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold mb-4">Sígueme en mis redes</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.facebook.com/ObjetivoEmprendo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80"
                      aria-label="Facebook de César Reyes"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a 
                      href="https://x.com/CesarObjetivo"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80"
                      aria-label="Twitter (X) de César Reyes"
                    >
                      <span className="sr-only">Twitter (X)</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/cesarobjetivo/"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80"
                      aria-label="LinkedIn de César Reyes"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </article>
            
            {relatedArticles.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Artículos relacionados</h2>
                <div className="grid gap-8 md:grid-cols-3">
                  {relatedArticles.map((relatedArticle: any) => (
                    <div key={relatedArticle.slug} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
                      <Link href={`/blog/${relatedArticle.category?.toLowerCase()?.replace(/\s+/g, '-') || 'blog'}/${relatedArticle.slug}`} className="block h-full">
                        <div className="h-40 relative bg-gray-100">
                          <Image src={relatedArticle.image} alt={relatedArticle.title} fill className="object-cover" />
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-sm mb-2 line-clamp-2">{relatedArticle.title}</h3>
                          <div className="flex items-center justify-between mt-4">
                            <span className="text-[10px] font-bold text-primary uppercase">{formatCategory(relatedArticle.category)}</span>
                            <span className="text-[10px] text-gray-400">{formatDate(relatedArticle.date)}</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
