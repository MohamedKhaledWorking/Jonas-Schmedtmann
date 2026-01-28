import React from "react";
import { useSelectedGuest } from "../../Context/SelectedGuestContext.jsx";

export default function GuestDetailsStatistics() {
  const { selectedGuest } = useSelectedGuest();
  return (
    <div className="py-4 flex items-center justify-around  capitalize">
      <div className="text-center px-1 py-4 space-y-1.5">
        <p className="text-2xl font-bold ">{selectedGuest?.stay_duration}</p>
        <p className="text-textSecClr text-sm">total stays</p>
      </div>
      <div className="text-center px-1 py-4 space-y-1.5">
        <p className="text-2xl font-bold ">${selectedGuest?.spent_money}</p>
        <p className="text-textSecClr text-sm">total spent</p>
      </div>
      <div className="text-center px-1 py-4 ">
        <div className="bg-amber-400/15 text-amber-400 px-5 py-1.5 rounded-full">
          {selectedGuest?.level}
        </div>
      </div>
    </div>
  );
}
