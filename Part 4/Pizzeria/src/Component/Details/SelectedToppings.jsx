import React from "react";
import SelectedTopping from "./SelectedTopping.jsx";

export default function SelectedToppings() {
  return (
    <>
      <div className="my-4 bg-red-700/5 border border-orange-700/30 p-4 rounded-xl">
        <div className="flex items-center justify-between">
          <p className="text-textClr dark:text-textClrDark font-bold font-main">
            Extra Toppings
          </p>
          <p className="text-orange-700"> +$4.50</p>
        </div>
        <div className="flex flex-wrap my-4">
          <SelectedTopping />
          <SelectedTopping />
          <SelectedTopping />
        </div>
      </div>
    </>
  );
}
