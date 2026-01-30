import supabase, { supabaseUrl } from "./supabase.js";

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

export async function createCabin(newCabin) {
  const file = newCabin.image[0];
  const files = Array.from(newCabin.images || []);
  if (!file) {
    throw new Error(`Image is required`);
  }
  if (!files || files.length === 0) {
    throw new Error(`Images is required`);
  }

  const baseUrl = supabaseUrl + "/storage/v1/object/public/CabinImage/";
  const fileName = `${Date.now()}-${file.name}`.replaceAll("/", "");
  const image = baseUrl + fileName;

  const { error: imageError } = await supabase.storage
    .from("CabinImage")
    .upload(fileName, file);

  if (imageError) {
    throw new Error(
      `something went wrong on uploading cabin image: ${error.message}`
    );
  }

  const images = files.map((file) => {
    const name = `${Date.now()}-${file.name}`.replaceAll("/", "");
    const { error: imagesError } = supabase.storage
      .from("CabinImage")
      .upload(name, file);
    if (imagesError) {
      throw new Error(
        `something went wrong on uploading cabin images: ${imagesError.message}`
      );
    }
    return baseUrl + name;
  });

  const { error: createError } = await supabase
    .from("rooms")
    .insert([{ ...newCabin, image, images }])
    .select();

  if (createError) {
    throw new Error(`something went wrong on creating cabin: ${error.message}`);
  }
}
