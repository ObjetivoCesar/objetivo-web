import React from 'react';
import Link from 'next/link';
import { getMySQLArticlesByCategory } from '@/lib/mysql-blog';
import { ArrowRight } from 'lucide-react';

interface RelatedArticlesProps {
  category: string;
  title?: string;
  description?: string;
  limit?: number;
}

export default async function RelatedArticles({ 
  category, 
  title = "Artículos Relacionados", 
  description = "Aprende más sobre este tema en nuestro blog experto.",
  limit = 3 
}: RelatedArticlesProps) {
  const articles = await getMySQLArticlesByCategory(category, limit);

  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article) => (
            <Link 
              key={article.slug} 
              href={`/blog/${article.category}/${article.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="mt-auto flex items-center text-blue-600 font-bold text-sm">
                  Leer artículo <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-gray-900 font-bold hover:text-blue-600 transition-colors"
          >
            Ver todo el blog <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
