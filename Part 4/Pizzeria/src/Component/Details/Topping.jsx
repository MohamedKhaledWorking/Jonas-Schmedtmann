import React from "react";

export default function Topping({ name, price }) {
  return (
    <>
      <li className="pe-4 w-1/2 ">
        <div className="border border-textClr dark:border-textClr flex justify-between items-center  px-3 py-3 md:px-4 md:py-4 rounded-2xl cursor-pointer hover:border-orange-700 duration-400 text-xs">
          <p>{name}</p>
          <p>+${price}</p>
        </div>
      </li>
    </>
  );
}
