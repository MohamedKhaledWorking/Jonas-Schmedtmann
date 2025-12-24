import { MapPinHouse } from "lucide-react";
import React from "react";

export default function TimeLineFooter() {
  return (
    <>
      <div className="flex items-center space-x-4 my-5 border-b border-textSecClr dark:border-textSecClrDark pb-5">
        <div>
          <MapPinHouse className="text-textSecClr" />
        </div>
        <div className="text-start">
          <p className="text-mainClr dark:text-mainClrDark font-bold">
            mohamed khaled mohamed sayed
          </p>
          <p className="text-textSecClr ">23 ش شلبي من ش 26 يوليو, اسيوط</p>
        </div>
      </div>
      <div className="my-5 border-b border-textSecClr dark:border-textSecClrDark pb-5 text-start">
        <p className="font-bold font-main text-mainClr dark:text-mainClrDark mb-2">
          Order Items
        </p>
        <div className="flex justify-between">
          <p>1× Pepperoni Supreme (Medium)</p>
          <p>$12.99</p>
        </div>
      </div>
      <div className="flex justify-between ">
        <p className="font-bold font-main text-mainClr dark:text-mainClrDark text-2xl">
          Total
        </p>
        <p className="font-bold text-orange-700 text-2xl ">$12.99</p>
      </div>
    </>
  );
}
