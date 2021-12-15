import SupabaseClient from './SupabaseClient'
import { SupabaseClientOptions, SupabaseRealtimePayload } from './lib/types'
import { User as AuthUser, Session as AuthSession } from '@supabase/gotrue-js'
export * from '@supabase/gotrue-js'
export {
  PostgrestResponse,
  PostgrestSingleResponse,
  PostgrestMaybeSingleResponse,
  PostgrestError,
} from '@supabase/postgrest-js'
export * from '@supabase/realtime-js'

/**
 * Creates a new Supabase Client.
 */
const createClient = (
  supabaseUrl: 'https://chlwotyjwtqhcsxqwgwe.supabase.co',
  supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTQ4MTU1MiwiZXhwIjoxOTU1MDU3NTUyfQ.Y3W_Bn-Su0IUlQDrhiR96yJi3W1qJEBnN2XWbpU9unE',
  options?: SupabaseClientOptions
) => {
  return new SupabaseClient(supabaseUrl, supabaseKey, options)
}

export {
  createClient,
  SupabaseClient,
  SupabaseClientOptions,
  SupabaseRealtimePayload,
  AuthUser,
  AuthSession,
}
