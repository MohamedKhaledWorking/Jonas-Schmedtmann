import React from "react";

export default function OrderItem() {
  return (
    <>
      <div className="flex items-center justify-between mt-2">
        <div className="flex ">
          <div className="size-20 ">
            <img
              src="https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80"
              alt="img"
              className="w-full rounded-xl"
            />
          </div>
          <div className="ms-2">
            <p className="text-lg font-bold font-main">Pepperoni Supreme</p>
            <p className="my-1 text-textSecClr dark:text-textSecClrDark text-sm">
              Medium × 1
            </p>
            <div className="flex space-x-1 flex-wrap space-y-1">
              <div className="border rounded-full px-2 py-1 text-xs">
                Olives
              </div>
              <div className="border rounded-full px-2 py-1 text-xs">
                Italian Sausage
              </div>
              <div className="border rounded-full px-2 py-1 text-xs">
                Pepperoni
              </div>
            </div>
          </div>
        </div>
        <p className="font-bold text-orange-700 text-xl">$25.99</p>
      </div>
    </>
  );
}
