import { Image } from "@heroui/react";
import React from "react";
import { useSelectedCabin } from "../../Context/SelectedCabinContext.jsx";

export default function CabinDetailsGallery() {
  const { selectedCabin } = useSelectedCabin();
  const [selectedImage, setSelectedImage] = React.useState(
    selectedCabin?.image
  );

  return (
    <>
      <div className="flex w-full justify-center items-center pt-4 capitalize">
        <Image
          isBlurred
          isZoomed
          alt="Event image"
          className="aspect-square w-full hover:scale-110"
          height={350}
          src={selectedImage}
        />
      </div>
      <div className=" grid grid-cols-4 gap-3 w-full mt-8">
        {selectedCabin?.images?.map((image) => {
          return (
            <div>
              <Image
                isBlurred
                isZoomed
                alt="Event image"
                className="aspect-square w-full hover:scale-110"
                height={100}
                src={image}
                onClick={() => setSelectedImage(image)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
