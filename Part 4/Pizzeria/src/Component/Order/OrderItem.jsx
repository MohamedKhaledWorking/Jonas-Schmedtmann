import React from "react";

export default function OrderItem({ order }) {
  return (
    <>
      <div className="flex items-center justify-between mt-2">
        <div className="flex ">
          <div className="size-20 ">
            <img
              src={order?.image}
              alt={order?.name + " image"}
              className="w-full rounded-xl"
            />
          </div>
          <div className="ms-2">
            <p className="text-lg font-bold font-main">{order?.name}</p>
            <p className="my-1 text-textSecClr dark:text-textSecClrDark text-sm">
              {order?.size} × {order?.quantity}
            </p>
            <div className="flex space-x-1 flex-wrap space-y-1">
              {order?.extraToppings.map((topping) => {
                return (
                  <div className="border rounded-full px-2 py-1 text-xs h-6">
                    {topping?.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <p className="font-bold text-orange-700 text-xl">
          ${(order?.totalPrice).toFixed(2)}
        </p>
      </div>
    </>
  );
}
