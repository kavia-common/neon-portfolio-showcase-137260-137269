//
// PUBLIC_INTERFACE
// createSupabaseClient - Initializes and returns a Supabase client instance using environment variables.
//
// NOTE: Ensure the following environment variables are set in your .env file (never commit real values):
//   REACT_APP_SUPABASE_URL
//   REACT_APP_SUPABASE_KEY
//
// This module intentionally does not log keys or URLs to avoid leaking secrets in the console.
//
import { createClient } from '@supabase/supabase-js';

/**
 * PUBLIC_INTERFACE
 * createSupabaseClient
 * Creates and returns a singleton Supabase client configured from environment variables.
 * @returns {import('@supabase/supabase-js').SupabaseClient} Supabase client instance
 */
let supabaseInstance = null;

export function createSupabaseClient() {
  if (supabaseInstance) return supabaseInstance;

  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
  const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    // Throwing an error makes issues explicit during development builds.
    // In production builds, CRA replaces process.env vars at build time.
    throw new Error(
      'Supabase not configured. Please set REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_KEY in your environment.'
    );
  }

  // Initialize Supabase client
  supabaseInstance = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false },
    realtime: { params: { eventsPerSecond: 2 } }
  });
  return supabaseInstance;
}
