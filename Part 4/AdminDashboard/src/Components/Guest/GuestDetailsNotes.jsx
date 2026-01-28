import React from "react";
import { useSelectedGuest } from "../../Context/SelectedGuestContext.jsx";

export default function GuestDetailsNotes() {
  const { selectedGuest } = useSelectedGuest();

  if (!selectedGuest?.notes?.length) {
    return null;
  }
  return (
    <div className="py-4 flex flex-col gap-3">
      <div className="flex flex-col gap-3 items-start">
        <span className="text-medium font-medium">About the Guest</span>
        <div className="text-medium text-default-500 flex flex-col gap-2">
          {selectedGuest?.notes?.map((note) => {
            return (
              <p className="text-sm" key={note?.at}>
                {note?.text}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
