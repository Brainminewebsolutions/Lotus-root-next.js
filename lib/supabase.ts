import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create client only if credentials are available
let supabaseInstance: SupabaseClient | null = null;

/**
 * Get Supabase client instance
 * Returns null if credentials are not configured
 */
export function getSupabase(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("Supabase credentials not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local");
    return null;
  }

  supabaseInstance ??= createClient(supabaseUrl, supabaseAnonKey);

  return supabaseInstance;
}

// Backward compatible export (throws if not configured)
export const supabase = (() => {
  if (!supabaseUrl || !supabaseAnonKey) {
    // Return a proxy that throws on access
    return new Proxy({} as SupabaseClient, {
      get() {
        throw new Error(
          "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local"
        );
      },
    });
  }
  return createClient(supabaseUrl, supabaseAnonKey);
})();

// Database types (customize based on your schema)
export interface Database {
  public: {
    Tables: {
      contacts: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string | null;
          company: string | null;
          service: string | null;
          message: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          phone?: string | null;
          company?: string | null;
          service?: string | null;
          message: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          phone?: string | null;
          company?: string | null;
          service?: string | null;
          message?: string;
          created_at?: string;
        };
      };
    };
  };
}
