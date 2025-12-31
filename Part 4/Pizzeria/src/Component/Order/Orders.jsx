import React from "react";
import OrderItem from "./OrderItem.jsx";
import { useLoaderData } from "react-router-dom";

export default function Orders() {
  const { items } = useLoaderData();
  return (
    <>
      <div>
        <p className="text-lg font-bold font-main text-mainClr dark:text-mainClrDark">
          Order Items
        </p>
        <div className="my-5 border-y border-textSecClr dark:border-textSecClrDark py-6">
          {items?.map((order) => {
            return <OrderItem order={order} key={order?.id}/>;
          })}
        </div>
      </div>
    </>
  );
}
