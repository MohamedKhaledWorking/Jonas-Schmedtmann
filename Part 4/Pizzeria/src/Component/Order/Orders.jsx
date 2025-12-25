import React from "react";
import OrderItem from "./OrderItem.jsx";

export default function Orders() {
  return (
    <>
      <div>
        <p className="text-lg font-bold font-main text-mainClr dark:text-mainClrDark">
          Order Items
        </p>
        <div className="my-5 border-y border-textSecClr dark:border-textSecClrDark py-6">
          <OrderItem />
        </div>
      </div>
    </>
  );
}
