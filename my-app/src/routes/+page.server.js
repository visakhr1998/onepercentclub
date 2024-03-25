import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("details").select('*');
 // console.log("F1",data);
  return {
    details: data ?? [],
  };
}