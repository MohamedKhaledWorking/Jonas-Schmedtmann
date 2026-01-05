export async function getAddress({ latitude, longitude }) {
  const res = await fetch(
    `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=695b3cc9def0f485739197xnpb4a948`
  );

  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
}
