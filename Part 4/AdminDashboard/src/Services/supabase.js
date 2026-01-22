import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lulplmdbuoffizlrtehq.supabase.co";
const supabaseKey = "sb_publishable_hNzyFsSXn3EeTFSxB8e1WQ_30i1CIQl";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
