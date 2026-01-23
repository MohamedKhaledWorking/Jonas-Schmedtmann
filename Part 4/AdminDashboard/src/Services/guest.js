import supabase, { supabaseUrl } from "./supabase.js";

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
}

export async function createGuests(newGuest) {
  const file = newGuest.avatar_url?.[0];
  if (!file) {
    throw new Error("Avatar is required");
  }

  const baseUrl = supabaseUrl + "/storage/v1/object/public/Guests/";
  const fileName = `${Date.now()}-${file?.name}`.replaceAll("/", "");
  const avatar_url = baseUrl + fileName;

  const { error } = await supabase
    .from("guests")
    .insert([{ ...newGuest, avatar_url }])
    .select();

  if (error) {
    throw new Error(
      `something went wrong on create a new guest: ${error.message}`
    );
  }

  const { error: avatarError } = await supabase.storage
    .from("Guests")
    .update(fileName, file);

  if (avatarError) {
    throw new Error(
      `something went wrong on create a new guest: ${avatarError.message}`
    );
  }
}

export async function updateGuest(newData) {
  const hasAvatar = newData?.avatar_url?.startsWith?.(supabaseUrl);
  const baseUrl = supabaseUrl + "/storage/v1/object/public/Guests/";
  const fileName = `${Date.now()}-${newData.avatar_url?.[0].name}`.replaceAll(
    "/",
    ""
  );
  const avatar_url = hasAvatar ? newData.avatar_url : baseUrl + fileName;

  if (!hasAvatar) {
    const file = newData.avatar_url?.[0];
    if (!file) {
      throw new Error("Avatar is required");
    }

    const { error: avatarError } = await supabase.storage
      .from("Guests")
      .update(fileName, file);

    if (avatarError) {
      throw new Error(
        `something went wrong on create a new guest: ${avatarError.message}`
      );
    }
  }

  const { error } = await supabase
    .from("guests")
    .update({ ...newData, avatar_url })
    .eq("id", newData.id)
    .select();

  if (error) {
    throw new Error(`something went wrong on update guest: ${error.message}`);
  }
}
