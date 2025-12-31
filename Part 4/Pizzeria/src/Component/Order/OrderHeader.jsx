import { Hourglass } from "lucide-react";
import React from "react";
import { useLoaderData } from "react-router-dom";
import { formatTime } from "../../Utils/helpers.js";

export default function OrderHeader() {
  const { id, arriveAt, priority } = useLoaderData();

  return (
    <>
      <div className="flex justify-between items-center text-textSecClr dark:text-textSecClrDark text-base">
        <p> order number</p>
        <p>Estimated Arrival</p>
      </div>
      <div className="flex justify-between items-center text-xl font-bold ">
        <p>{id}</p>
        <p className="text-orange-700">{formatTime(arriveAt)}</p>
      </div>
      {priority && (
        <div className="bg-orange-700/20 flex space-x-2 items-center my-5 py-3 px-4 rounded-lg">
          <Hourglass className="text-orange-700" />
          <p>Priority Delivery Active </p>
        </div>
      )}
    </>
  );
}
