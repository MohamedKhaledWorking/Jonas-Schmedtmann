import { BedDouble, HouseWifi, MonitorCheck, Snowflake } from "lucide-react";
import React from "react";

export default function Cabin() {
  return (
    <div className="pe-4 mt-8 w-full md:w-1/2 lg:w-1/4">
      <div className="border border-lightBorder pb-8 rounded-4xl overflow-hidden group">
        <div className=" relative bg-linear-0 from-transparent to-black/60 border-b border-lightBorder">
          <div className="absolute bg-linear-to-b from-transparent to-black/60 inset-0 z-20"></div>
          <div className="h-72 overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuy5ArO-30FMxN64YmAuzrYUn9anMXEB7L7IOvshexDqnHTP20F4-ex4xmYrlPMoY8ahYwDe1Y6xuZowOYUqkO9FKI5ejkprz4yRDKn_WtKJQRFc6Wjr1HZX8nQ9Gt4TgjVz4E0mcv3sPGBbYtemfazvPky6iwcEqVIW56O-VIiwal7myH7wZgzXbdWm1ZjxoUbGiXgDOiLEgAbZAMzngwjolggbGND1qdf5m8h42IuUeKnsM3oJ5j4SNxXjo1n-jtxhbdiohvfd-x"
              alt="room image"
              className="w-full object-cover h-full group-hover:scale-125 duration-500 "
            />
          </div>
          <span className="absolute top-4 right-4 bg-white text-xs px-3 py-1 rounded-full font-medium text-green-600">
            Available
          </span>
          <div className="absolute bottom-5 left-5 z-50">
            <p className="text-base ">3rd floor </p>
            <p className="text-textClr font-bold text-3xl">Room 304</p>
          </div>
        </div>
        <div className="px-4">
          <div className="flex justify-between items-center  font-bold text-2xl mt-4">
            <p className="text-textClr  ">King Ocean Suite</p>
            <p className="text-theme ">$240</p>
          </div>
          <div className="flex justify-between items-center  text-sm text-textSecClr border-b pb-5 ">
            <p className="  ">Max 2 Adults, 1 Child</p>
            <p className=" ">per night</p>
          </div>
          <div className="flex justify-between items-center mt-5">
            <div className="flex max-w-3/4 space-x-5">
              <HouseWifi className="w-6 h-6" />
              <MonitorCheck className="w-6 h-6" />
              <Snowflake className="w-6 h-6" />
              <BedDouble className="w-6 h-6" />
            </div>
            <button className="mainBtn  px-8 py-2 max-w-1/4">manage</button>
          </div>
        </div>
      </div>
    </div>
  );
}
