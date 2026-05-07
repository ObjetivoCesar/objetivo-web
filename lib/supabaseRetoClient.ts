import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_RETO_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_RETO_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_RETO_SERVICE_ROLE_KEY;

const isBuildTime = process.env.NEXT_PHASE === 'phase-production-build';

if (!supabaseUrl || !supabaseAnonKey || !supabaseServiceKey) {
  if (!isBuildTime) {
    console.error('Missing Supabase Reto credentials. Newsletter features will not work.');
  }
}

// Client for client-side operations
export const supabaseRetoClient = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null as any;

// Admin client for server-side operations
export const supabaseRetoAdmin = (supabaseUrl && supabaseServiceKey)
  ? createClient(supabaseUrl, supabaseServiceKey)
  : null as any;

