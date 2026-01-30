import React from "react";
import { useSelectedCabin } from "../../Context/SelectedCabinContext.jsx";

export default function CabinDetailsDescription() {
  const { selectedCabin } = useSelectedCabin();
  return (
    <div className="space-y-2 my-5">
      <p className="font-bold text-large ">Description</p>
      <p className="text-textSecClr text-sm capitalize">
        {selectedCabin?.descriptions}
      </p>
    </div>
  );
}
