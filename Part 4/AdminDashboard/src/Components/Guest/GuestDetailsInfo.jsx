import { MapPinHouse } from "lucide-react";
import React from "react";
import { useSelectedGuest } from "../../Context/SelectedGuestContext.jsx";

export default function GuestDetailsInfo() {
  const { selectedGuest } = useSelectedGuest();
  return (
    <div className="py-4 space-y-3">
      <div className="flex gap-3 items-center">
        <div className="flex-none border-1 border-default-200/50 rounded-small text-center w-11 overflow-hidden">
          <div className="text-tiny bg-default-100 py-0.5 text-default-500">
            Nov
          </div>
          <div className="flex items-center justify-center font-semibold text-medium h-6 text-default-500">
            19
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-medium  font-medium">Tuesday, November 19</p>
          <p className="text-small text-default-500">5:00 PM - 9:00 PM PST</p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="flex items-center justify-center border-1 border-default-200/50 rounded-small w-11 h-11">
          <MapPinHouse />
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-small text-default-500">
            {selectedGuest?.country} {selectedGuest?.address}
          </p>
        </div>
      </div>
    </div>
  );
}
