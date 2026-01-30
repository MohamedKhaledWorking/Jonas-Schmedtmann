import React from "react";
import { useSelectedCabin } from "../../Context/SelectedCabinContext.jsx";

export default function CabinDetailsAmenities() {
  const { selectedCabin } = useSelectedCabin();
  return (
    <div className="my-5">
      <p className="font-bold text-large ">Amenities</p>
      <div className="flex flex-wrap mt-3 gap-3">
        {selectedCabin?.features?.wifi && (
          <div className="bg-theme/20 text-theme rounded-full px-3 py-1 w-fit flex items-center">
            <Wifi className="pr-2" /> wifi
          </div>
        )}
        {selectedCabin?.features?.ac && (
          <div className="bg-theme/20 text-theme rounded-full px-3 py-1 w-fit flex items-center">
            <AirVent className="pr-2" /> ac
          </div>
        )}
        {selectedCabin?.features?.miniBar && (
          <div className="bg-theme/20 text-theme rounded-full px-3 py-1 w-fit flex items-center">
            <Beer className="pr-2" /> mini bar
          </div>
        )}
        {selectedCabin?.features?.tv && (
          <div className="bg-theme/20 text-theme rounded-full px-3 py-1 w-fit flex items-center">
            <Tv className="pr-2" /> tv
          </div>
        )}
        {selectedCabin?.features?.doubleBed && (
          <div className="bg-theme/20 text-theme rounded-full px-3 py-1 w-fit flex items-center">
            <BedDouble className="pr-2" /> double bed
          </div>
        )}
        {selectedCabin?.features?.singleBed && (
          <div className="bg-theme/20 text-theme rounded-full px-3 py-1 w-fit flex items-center">
            <BedSingle className="pr-2" /> single bed
          </div>
        )}
      </div>
    </div>
  );
}
