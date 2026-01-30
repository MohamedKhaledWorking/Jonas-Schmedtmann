import {
  AirVent,
  BedDouble,
  BedSingle,
  Beer,
  HouseWifi,
  MonitorCheck,
} from "lucide-react";
import React from "react";

export default function Cabin({ cabin }) {
  return (
    <div className="pe-4  w-full md:w-1/2 lg:w-1/4 xl:w-1/5">
      <div className="border border-lightBorder pb-8 rounded-4xl overflow-hidden group">
        <div className=" relative bg-linear-0 from-transparent to-black/60 border-b border-lightBorder">
          <div className="absolute bg-linear-to-b from-transparent to-black/60 inset-0 z-1"></div>
          <div className="h-72 overflow-hidden">
            <img
              src={cabin?.image}
              alt={`${cabin?.name} image`}
              className="w-full object-cover h-full group-hover:scale-125 duration-500 "
            />
          </div>
          <span
            className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full font-medium capitalize ${
              cabin?.status.toLocaleLowerCase() ===
              "Available".toLocaleLowerCase()
                ? "bg-green-600"
                : cabin?.status.toLocaleLowerCase() ===
                  "maintenance".toLocaleLowerCase()
                ? "bg-amber-400"
                : "bg-red-600"
            }`}
          >
            {cabin?.status}
          </span>
          <div className="absolute bottom-5 left-5 z-2">
            <p className="text-base ">
              floor number {cabin?.location?.floor} - wing{" "}
              {cabin?.location?.wing}{" "}
            </p>
            <p className="text-textClr font-bold text-3xl"> {cabin?.name}</p>
          </div>
        </div>
        <div className="px-4">
          <div className="flex justify-between items-center  font-bold text-2xl mt-4">
            <p className="text-textClr line-clamp-1"> {cabin?.hotels?.name}</p>
            <p className="text-theme ">${cabin?.price_per_night}</p>
          </div>
          <div className="flex justify-between items-center  text-sm text-textSecClr border-b border-lightBorder pb-5 ">
            <p className=" capitalize ">Max {cabin?.max_guests} guests</p>
            <p className=" ">per night</p>
          </div>
          <div className="flex justify-between flex-col lg:flex-row space-y-5 lg:space-y-0 items-center mt-5">
            <div className="flex line-clamp-1 space-x-5">
              {cabin?.features?.ac && <AirVent className="w-6 h-6" />}
              {cabin?.features?.tv && <MonitorCheck className="w-6 h-6" />}
              {cabin?.features?.wifi && <HouseWifi className="w-6 h-6" />}
              {cabin?.features?.minibar && <Beer className="w-6 h-6" />}
              {cabin?.features?.beds?.map((bed) => {
                return bed.type == "king" ? (
                  <BedDouble className="w-6 h-6" key={"king"} />
                ) : (
                  <BedSingle className="w-6 h-6" key={"single"} />
                );
              })}
            </div>
            <button className="mainBtn  px-8 py-2 w-full lg:w-fit">
              manage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
