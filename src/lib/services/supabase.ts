import {
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
} from '$env/static/public'
import { createClient } from '@supabase/supabase-js'

const url = PUBLIC_SUPABASE_URL
const anonKey = PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(url, anonKey)
