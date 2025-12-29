import React from "react";

export default function SelectedTopping({ topping }) {
  return (
    <>
      <div className="pe-2 my-2">
        <div className="border border-textClr dark:border-textClr rounded-2xl hover:border-orange-700/40 duration-400 flex items-center space-x-2 py-2 px-5 text-xs md:text-sm">
          <p className="text-textClr dark:text-textClrDark">{topping?.name}</p>
          <p className="text-textSecCl">+${topping?.price}</p>
        </div>
      </div>
    </>
  );
}
