import React from "react";

export default function Topping({
  name,
  price,
  isSelected,
  onAddingTopping,
  id,
}) {
  return (
    <>
      <li className="pe-4 w-1/2 " onClick={() => onAddingTopping(id)}>
        <div
          className={`border  flex justify-between items-center  px-3 py-3 md:px-4 md:py-4 rounded-2xl cursor-pointer hover:border-orange-700 duration-400 text-xs
        ${
          isSelected
            ? "border-orange-700 text-orange-700"
            : "border-textClr dark:border-textClr"
        }`}
        >
          <p>{name}</p>
          <p>+${price}</p>
        </div>
      </li>
    </>
  );
}
