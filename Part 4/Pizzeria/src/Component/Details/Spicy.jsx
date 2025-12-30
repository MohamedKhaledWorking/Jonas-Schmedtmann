import { Flame } from "lucide-react";
import React from "react";
import { useCart } from "../../Context/CartContext.jsx";

export default function Spicy() {
  const { isSpicy, dispatch } = useCart();
  return (
    <>
      <div
        className={`my-4  ${
          isSpicy
            ? "bg-orange-700/20 border border-orange-700/50"
            : "bg-orange-700/10 border border-orange-700/40"
        } p-4 rounded-xl flex items-center justify-between`}
      >
        <div className="flex space-x-4 items-center">
          <div className="flex justify-center items-center p-3 bg-red-600/15 text-red-600 rounded-full">
            <Flame size={15} />
          </div>
          <div>
            <p className="text-textClr dark:text-textClrDark font-bold font-main">
              Make it Spicy
            </p>
            <p className="text-textSecClr">Add chili flakes & hot sauce </p>
          </div>
        </div>
        <input
          type="checkbox"
          className="toggle border-red-700/50 checked:bg-red-700 "
          onClick={() => dispatch({ type: "set/Spicy", payload: !isSpicy })}
        />
      </div>
    </>
  );
}
