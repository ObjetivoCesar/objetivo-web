import Link from "next/link"
import BlogCard from "@/components/blog-card"
import SearchBar from "@/components/search-bar"
import { notFound } from "next/navigation"
import { getArticlesByCategory } from "@/lib/utils-node"
import Image from "next/image"

// Datos de categorías actualizados
const categories = [
  { id: "marketing-para-pymes", title: "Marketing para PyMEs", description: "Estrategias personalizadas para impulsar el crecimiento de pequeñas y medianas empresas." },
  { id: "automatizacion-de-ventas", title: "Automatización de Ventas", description: "Optimiza tu embudo de ventas y aumenta la productividad con herramientas inteligentes." },
  { id: "posicionamiento-en-google", title: "Posicionamiento en Google", description: "Domina los resultados de búsqueda y atrae tráfico cualificado a tu sitio web." },
  { id: "activaqr-gastronomia", title: "ActivaQR Gastronomía", description: "Soluciones tecnológicas innovadoras para el sector restaurantero y gastronómico." },
  { id: "activaqr-networking", title: "ActivaQR Networking", description: "Potencia tus conexiones profesionales con herramientas de networking inteligente." },
  { id: "casos-de-exito", title: "Casos de Éxito", description: "Historias reales de éxito y transformación digital en diversos sectores." }
];

// Las categorías reales se extraen dinámicamente o mediante el mapping superior

// Asignar imágenes a cada categoría (debe coincidir con la portada)
const categoryImages = {
  "ia-y-negocios-en-latam": "/images/negocioslatam.webp",
  "pensamiento-estrategico-y-adaptacion": "/images/pensamiento.webp",
  "proposito-autoconocimiento-liderazgo": "/images/autoconocimiento.webp",
  "productividad": "/images/reloj.webp",
  "crecimiento-en-latam": "/images/crecimiento-latam.webp",
  "casos-de-exito": "/images/negocio_resultados.webp"
}

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const categoryObj = categories.find((cat) => cat.id === category)

  if (!categoryObj) {
    return {
      title: "Categoría no encontrada",
      description: "La categoría que estás buscando no existe.",
    }
  }

  return {
    title: `${categoryObj.title} - Blog de César Reyes Jaramillo`,
    description: categoryObj.description,
  }
}

export default async function CategoryPage({ params, searchParams }: { params: Promise<{ category: string }>, searchParams: Promise<{ q?: string }> }) {
  const { category } = await params;
  const { q: search = "" } = await searchParams;
  const categoryObj = categories.find((cat) => cat.id === category);

  if (!categoryObj) {
    notFound();
  }

  const categoryPosts = await getArticlesByCategory(category);
  const filteredPosts = search
    ? categoryPosts.filter(post => {
        const query = search.toLowerCase();
        return (
          post.title.toLowerCase().includes(query) ||
          (post.excerpt && post.excerpt.toLowerCase().includes(query)) ||
          post.category.toLowerCase().includes(query)
        );
      })
    : categoryPosts;

  const heroImage = categoryImages[category as keyof typeof categoryImages] || "/images/portada2.webp";

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[calc(100vh-100px)] md:h-[400px] flex items-center justify-center mb-8">
        <Image
          src={heroImage}
          alt={categoryObj.title}
          fill
          sizes="100vw"
          className="object-cover object-center z-0"
          priority
          quality={100}
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/10 z-10" />
        <div className="relative z-20 text-white text-center max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">{categoryObj.title}</h1>
          <p className="text-lg md:text-xl drop-shadow-lg">{categoryObj.description}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <Link href="/blog" className="text-primary font-medium hover:underline">
              ← Volver al Blog
            </Link>
            <div className="w-full md:w-96">
              <SearchBar category={category} />
            </div>
          </div>

          {search && (
            <div className="mb-8">
              <p className="text-gray-600">
                Resultados de búsqueda para: <span className="font-semibold">{search}</span>
              </p>
            </div>
          )}

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard
                  key={index}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  date={post.date}
                  slug={`${post.categoryId}/${post.slug}`}
                  image={post.image}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl">
                {search
                  ? "No se encontraron artículos que coincidan con tu búsqueda."
                  : "No hay artículos en esta categoría todavía."}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
