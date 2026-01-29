import supabase from "./supabase.js";

export async function getCabins() {
  const { data: rooms, error } = await supabase.from("rooms").select(`
    *,
    hotels (
      *
    )
  `);

  if (error) {
    throw new Error(
      `something went wrong on fetching cabins: ${error.message}`
    );
  }
  return rooms;
}
