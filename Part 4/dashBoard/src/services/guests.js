import supabase from "./supabase.js";

export async function getGuests() {
  let { data: guests, error } = await supabase.from("guests").select("*");
  if (error) {
    throw new Error("Something went wrong on fetching guests" + error);
  }
  return guests;
}
