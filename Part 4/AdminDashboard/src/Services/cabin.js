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

export async function getHotels() {
  const { data: hotels, error } = await supabase.from("hotels").select("*");

  if (error) {
    throw new Error(
      `something went wrong on fetching cabins: ${error.message}`
    );
  }
  return hotels;
}
