import React from "react";
import { formatToDayMonthYear } from "../../Utils/helper.js";
import { useSelectedGuest } from "../../Context/SelectedGuestContext.jsx";

export default function GuestDetailsHistory() {
  const { selectedGuest } = useSelectedGuest();
  if (!selectedGuest?.bookings?.length) {
    return null;
  }
  return (
    <div className="py-4">
      <h1 className="font-bold text-lg">Booking History</h1>
      {selectedGuest?.bookings?.map((booking) => {
        return (
          <div
            className="border border-lightBorder p-4 mt-4 rounded-2xl text-sm"
            key={booking?.id}
          >
            <div className="flex justify-between items-center">
              <p className="text-xs text-textSecClr">{booking?.id}</p>
              <div className="bg-green-500/15 text-green-500 px-2 py-0.5 rounded-full">
                {booking?.status}
              </div>
            </div>
            <p className="my-1.5 ">
              {booking?.room?.name} / {booking?.room?.hotel?.name} /{" "}
              {booking?.room?.hotel?.city}
            </p>
            <p className="text-textSecClr my-1.5 text-xs">
              {formatToDayMonthYear(booking?.check_in_date)} →{" "}
              {formatToDayMonthYear(booking?.check_out_date)}
            </p>
            <p className="text-base font-medium mt-2">
              ${selectedGuest?.spent_money} for {booking?.nights} days
            </p>
          </div>
        );
      })}
    </div>
  );
}
