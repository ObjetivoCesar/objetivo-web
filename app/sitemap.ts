import { MetadataRoute } from 'next'
import { getAllBlogArticles } from '@/lib/utils-node'
import { CASOS_EXITO } from '@/data/casos-exito'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.cesarreyesjaramillo.com'

    // Static routes
    const routes = [
        '',
        '/posicionamiento',
        '/posicionamiento/loja',
        '/casos-de-exito',
        '/desarrollo-web',
        '/analisis-estrategico',
        '/menu-digital',
        '/motor-reservas-hotel',
        '/mensajeria',
        '/software-gestion-servicios',
        '/software-personalizado',
        '/software-personalizado/loja',
        '/software-personalizado/quito',
        '/software-personalizado/guayaquil',
        '/software-personalizado/cuenca',
        '/comandas-restaurantes',
        '/fidelizacion-clientes',
        '/sobre-mi',
        '/contacto',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic casos de éxito routes
    const casosRoutes = CASOS_EXITO.map((caso) => ({
        url: `${baseUrl}/casos-de-exito/${caso.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Dynamic blog routes
    const articles = await getAllBlogArticles(false);

    const blogRoutes = articles.map((article) => ({
        url: `${baseUrl}/blog/${article.category}/${article.slug}`,
        lastModified: new Date(article.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...routes, ...casosRoutes, ...blogRoutes]
}
