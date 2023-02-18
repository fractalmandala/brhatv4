import { createClient } from '@supabase/supabase-js'


const supabase = createClient(
  import.meta.env.VITE_NEW_SUPABASE_URL,
  import.meta.env.VITE_NEW_SUPABASE_ANON_KEY
)

export default supabase