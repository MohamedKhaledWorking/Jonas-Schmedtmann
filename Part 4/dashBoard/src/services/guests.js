import supabase from "./supabase.js";

export async function getGuests() {
  let { data: guests, error } = await supabase.from("guests").select("*");
  if (error) {
    throw new Error("Something went wrong on fetching guests" + error);
  }
  return guests;
}

export async function getUserById(id) {
  if (!id) {
    return;
  }
  const { data: guest, error } = await supabase
    .from("guests")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    throw new Error("Something went wrong on deleting guest" + error);
  }
  return guest;
}

export async function deleteUser(id) {
  const { error } = await supabase.from("guests").delete().eq("id", id);
  if (error) {
    throw new Error("Something went wrong on deleting guest" + error);
  }
}
