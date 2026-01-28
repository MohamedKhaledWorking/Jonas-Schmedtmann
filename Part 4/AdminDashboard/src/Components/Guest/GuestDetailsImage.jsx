import { Image } from "@heroui/react";
import React from "react";
import { useSelectedGuest } from "../../Context/SelectedGuestContext.jsx";

export default function GuestDetailsImage({ avatar_url }) {
  const { selectedGuest } = useSelectedGuest();

  return (
    <div className="flex w-full justify-center items-center pt-4 capitalize">
      <Image
        isBlurred
        isZoomed
        alt="Event image"
        className="aspect-square w-full hover:scale-110"
        height={300}
        src={selectedGuest?.avatar_url}
      />
    </div>
  );
}
