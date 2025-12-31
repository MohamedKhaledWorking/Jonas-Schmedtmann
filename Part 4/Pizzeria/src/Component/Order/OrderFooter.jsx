import { MapPinHouse } from "lucide-react";
import React from "react";
import { useLoaderData } from "react-router-dom";
import { useTotalPrice } from "../../Hooks/useTotalPrice.js";

export default function OrderFooter() {
  const { paymentMethod, user, address, isPriority, fullPrice } =
    useLoaderData();
  console.log(paymentMethod);
  const { priority } = useTotalPrice(isPriority);

  return (
    <>
      <div className="flex items-center space-x-4 my-5 border-b border-textSecClr dark:border-textSecClrDark pb-5">
        <div>
          <MapPinHouse className="text-textSecClr" />
        </div>
        <div className="text-start">
          <p className="text-mainClr dark:text-mainClrDark font-bold">
            {user?.name}
          </p>
          <p className="text-textSecClr ">
            {" "}
            {address?.street} - {address?.city}
          </p>
        </div>
      </div>
      <div className="flex justify-between ">
        <p className="font-bold font-main text-mainClr dark:text-mainClrDark text-2xl">
          Total Paid
        </p>
        <p className="font-bold text-orange-700 text-2xl ">
          ${Number(fullPrice).toFixed(2)}
        </p>
      </div>
      <p className=" font-bold font-main text-start text-sm text-textSecClr dark:text-textSecClrDark">
        {paymentMethod}
      </p>
      <p className=" font-bold font-main text-start text-sm text-textSecClr dark:text-textSecClrDark">
        {priority > 0 && `Priority Delivery + $${priority.toFixed(2)}`}
      </p>
      <p className=" font-bold font-main text-start text-sm text-textSecClr dark:text-textSecClrDark">
        including taxes
      </p>
    </>
  );
}
