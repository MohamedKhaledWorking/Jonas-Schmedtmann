import { MapPinHouse } from "lucide-react";
import React from "react";
import { useTotalPrice } from "../../Hooks/useTotalPrice.js";

export default function TimeLineFooter({
  user,
  address,
  items,
  isPriority,
  fullPrice,
}) {
  const { total: totalPrice } = useTotalPrice(isPriority);
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
            {address?.street} - {address?.city}
          </p>
        </div>
      </div>
      <div className="my-5 border-b border-textSecClr dark:border-textSecClrDark pb-5 text-start">
        <p className="font-bold font-main text-mainClr dark:text-mainClrDark mb-2">
          Order Items
        </p>
        {items.map((item, idx) => {
          return (
            <div className="flex justify-between" key={idx}>
              <p>
                {item?.quantity}× {item?.name}({item?.size})
              </p>
              <p>${(item?.totalPrice).toFixed(2)}</p>
            </div>
          );
        })}
        <div className="flex justify-between mt-8">
          <p className="font-bold font-main text-mainClr dark:text-mainClrDark text-2xl">
            Total
          </p>
          <p className="font-bold text-orange-700 text-2xl ">
            ${Number(fullPrice).toFixed(2)}
          </p>
        </div>
      </div>
    </>
  );
}
