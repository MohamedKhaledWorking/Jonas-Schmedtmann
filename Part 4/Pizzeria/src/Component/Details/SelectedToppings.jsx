import React from "react";
import SelectedTopping from "./SelectedTopping.jsx";
import { useCart } from "../../Context/CartContext.jsx";

export default function SelectedToppings({ totalToppingsPrice }) {
  const { extraToppings } = useCart();
  return (
    <>
      <div className="my-4 bg-red-700/5 border border-orange-700/30 p-4 rounded-xl">
        <div className="flex items-center justify-between">
          <p className="text-textClr dark:text-textClrDark font-bold font-main">
            Extra Toppings
          </p>
          <p className="text-orange-700"> +${totalToppingsPrice}</p>
        </div>
        <ul className="flex flex-wrap my-4">
          {extraToppings?.map((topping) => {
            return <SelectedTopping topping={topping} key={topping?.id} />;
          })}
        </ul>
      </div>
    </>
  );
}
