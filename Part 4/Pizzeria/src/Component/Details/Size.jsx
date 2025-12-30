import React from "react";
import { useCart } from "../../Context/CartContext.jsx";

export default function Size({ size }) {
  const { dispatch, selectedSize } = useCart();
  return (
    <>
      <div className="px-2 w-full md:w-1/3">
        <div
          onClick={() =>
            dispatch({ type: "set/selectedSize", payload: size?.name })
          }
          className={`w-full py-3 border text-center rounded-2xl cursor-pointer hover:border-orange-700 duration-400 ${
            selectedSize?.toUpperCase() == size?.name?.toUpperCase()
              ? "border-orange-700"
              : "border-textClr dark:border-textClr"
          }`}
        >
          <p className="text-2xl font-bold font-main">{size?.size}</p>
          <p className="text-textSecClr dark:textSecClrDark text-sm my-1">
            {size?.name}
          </p>
          <p>{size?.diameter} inc</p>
        </div>
      </div>
    </>
  );
}
