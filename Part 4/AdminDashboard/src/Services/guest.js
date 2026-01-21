import supabase from "./supabase.js";

export async function getGuests() {
  let { data: guests, error } = await supabase.from("guests").select("*");

  if (error) {
    throw new Error(`something went wrong on fetching menu: ${error.message}`);
  }

  return guests;
}

export async function deleteGuests(id) {
  const { error } = await supabase.from("guests").delete().eq("id", id);

  if (error) {
    throw new Error(`something went wrong on fetching menu: ${error.message}`);
  }

  console.log("deleted" + id);
}

export async function createGuests(newGuest) {
  const { data, error } = await supabase
    .from("guests")
    .insert([newGuest])
    .select();

  if (error) {
    throw new Error(
      `something went wrong on create a new guest: ${error.message}`
    );
  }
}
