import React from "react";
import { useSelectedCabin } from "../../Context/SelectedCabinContext.jsx";

export default function CabinDetailsName() {
  const { selectedCabin } = useSelectedCabin();

  return (
    <>
      <div className="flex items-center justify-between mt-7 ">
        <p className="text-2xl font-bold font-main capitalize  text-theme line-clamp-2">
          {selectedCabin?.name}
        </p>
        <div
          className={`px-5 py-1 rounded-full capitalize ${
            selectedCabin?.status.toLowerCase() == "available"
              ? "bg-green-500/20 text-green-500"
              : selectedCabin?.status.toLowerCase() == "maintenance"
              ? "bg-amber-400/20 text-amber-400"
              : "bg-red-600/25 text-rose-400"
          }  font-xs`}
        >
          {selectedCabin?.status}
        </div>
      </div>
      <p className="text-3xl font-bold capitalize line-clamp-2">
        {selectedCabin?.hotels?.name}
      </p>
    </>
  );
}
