import React from "react";
import {
  Box,
  ChefHat,
  Hourglass,
  MapPinHouse,
  PackageCheck,
  Search,
  SearchCheck,
  Van,
} from "lucide-react";
import TimeLine from "./TimeLine.jsx";
import TimeLineFooter from "./TimeLineFooter.jsx";

export default function TrackFound() {
  return (
    <>
      <div className="flex justify-between items-center text-textSecClr dark:text-textSecClrDark text-sm">
        <p> order number</p>
        <p>Estimated Arrival</p>
      </div>
      <div className="flex justify-between items-center text-xl font-bold ">
        <p>PZ-F3R3ZF</p>
        <p className="text-orange-700">8:56 PM</p>
      </div>
      <div className="bg-orange-700/20 flex space-x-2 items-center my-5 py-3 px-4 rounded-lg">
        <Hourglass className="text-orange-700" />
        <p>Priority Delivery Active</p>
      </div>
      <p className="my-5 font-bold font-main text-start">Order Status</p>
      <TimeLine />
      <TimeLineFooter />
    </>
  );
}
