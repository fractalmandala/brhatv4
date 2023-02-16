import { createClient } from '@supabase/supabase-js'


const supabase = createClient(
  import.meta.env.NEW_SUPABASE_URL,
  import.meta.env.NEW_SUPABASE_ANON_KEY
)

export default supabase