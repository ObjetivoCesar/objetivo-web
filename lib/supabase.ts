import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const isBuildTime = process.env.NEXT_PHASE === 'phase-production-build';

if (!supabaseUrl || !supabaseAnonKey) {
  if (!isBuildTime) {
    console.error('NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY is missing.');
  }
}

// Crear el cliente de Supabase
export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(
      supabaseUrl,
      supabaseAnonKey,
      {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true,
        },
      }
    )
  : null as any;


// Tipos de tablas de Supabase
export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row'];

// Tipos para la base de datos
export type Database = {
  public: {
    Tables: {
      articles: {
        Row: {
          id: string;
          title: string;
          slug: string;
          excerpt: string | null;
          content: string;
          image_url: string | null;
          category_id: string | null;
          author_id: string | null;
          published: boolean;
          published_at: string | null;
          meta_description: string | null;
          meta_keywords: string[] | null;
          created_at: string;
          updated_at: string;
        };
      };
      categories: {
        Row: {
          id: string;
          title: string;
          description: string | null;
          slug: string;
          created_at: string;
        };
      };
      tags: {
        Row: {
          id: string;
          name: string;
          slug: string;
          created_at: string;
        };
      };
      article_tags: {
        Row: {
          article_id: string;
          tag_id: string;
        };
      };
      article_stats: {
        Row: {
          article_id: string;
          view_count: number;
          like_count: number;
          share_count: number;
          last_viewed: string | null;
        };
      };
    };
  };
};
