import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cbvatkrsyfgtynsqeuru.supabase.co";
const supabaseAnonKey = "sb_publishable_2LZZAmejE9Hl44DRNHjMCQ_sKOQSx8z";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
