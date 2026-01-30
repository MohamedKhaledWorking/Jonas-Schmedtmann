import React from "react";
import { useSelectedCabin } from "../../Context/SelectedCabinContext.jsx";

export default function CabinDetailsInfo() {
    const {selectedCabin } = useSelectedCabin()
  return (
    <>
      <div className="bg-secBgc border border-lightBorder p-5 flex flex-wrap mt-5 rounded-3xl">
        <div className="w-full md:w-1/3 px-3 mb-3">
          <p className="capitalize text-textSecClr font-bold text-sm">floor</p>
          <p className="mt-2"> {selectedCabin?.location?.floor} </p>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-3">
          <p className="capitalize text-textSecClr font-bold text-sm">view</p>
          <p className="mt-2"> {selectedCabin?.location?.view} </p>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-3">
          <p className="capitalize text-textSecClr font-bold text-sm">wing</p>
          <p className="mt-2"> {selectedCabin?.location?.wing} </p>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-3">
          <p className="capitalize text-textSecClr font-bold text-sm">price</p>
          <p className="mt-2"> ${selectedCabin?.price_per_night} </p>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-3">
          <p className="capitalize text-textSecClr font-bold text-sm">
            cleaning fee
          </p>
          <p className="mt-2"> ${selectedCabin?.cleaning_fee} </p>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-3">
          <p className="capitalize text-textSecClr font-bold text-sm">
            max guest
          </p>
          <p className="mt-2"> {selectedCabin?.max_guests} </p>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-3">
          <p className="capitalize text-textSecClr font-bold text-sm">
            quantity
          </p>
          <p className="mt-2">{selectedCabin?.quantity ?? 1}</p>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-3">
          <p className="capitalize text-textSecClr font-bold text-sm">
            is active
          </p>
          <p
            className={`mt-2 capitalize ${
              selectedCabin?.is_active ? "text-green-500" : "text-rose-500"
            }`}
          >
            {" "}
            {selectedCabin?.is_active ? "yes" : "no"}{" "}
          </p>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-3">
          <p className="capitalize text-textSecClr font-bold text-sm">size</p>
          <p className="mt-2">{selectedCabin?.room_size}</p>
        </div>
      </div>
    </>
  );
}
