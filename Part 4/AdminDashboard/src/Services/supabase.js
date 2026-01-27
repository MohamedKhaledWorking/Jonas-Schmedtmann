import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://drbdtwunjrtdhaddpmjg.supabase.co";
const supabaseKey = "sb_publishable_q7btrJtbPoAZgTvN31Vf9g_EggIQo6-";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
