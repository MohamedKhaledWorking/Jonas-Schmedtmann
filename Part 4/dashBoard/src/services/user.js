import supabase from "./supabase.js";

export async function getUsers() {
  try {
    let { data: users } = await supabase.from("users").select("*");
    return users;
  } catch (error) {
    console.log(`something went wrong on fetching menu: ${error}`);
  }
}

