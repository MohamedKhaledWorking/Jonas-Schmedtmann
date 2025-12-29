import React from "react";
import { useSelector } from "react-redux";

export default function Toppings({ toppings }) {
  return (
    <>
      <div className="bg-orange-700/10 border border-orange-700/40 px-4 py-2 rounded-xl">
        <p className="text-orange-700 font-bold font-main">Extra Toppings</p>
        <div className="my-2 flex flex-wrap">
          {toppings?.map((topping) => {
            return (
              <div className="pe-2">
                <div className="bg-white/30 dark:bg-slate-900/50 w-fit px-4 py-2 rounded-full  text-xs my-2 flex justify-between border border-slate-700/80">
                  <p>{topping?.name}</p>
                  <p className="ms-2 text-textSecClr dark:text-textSecClrDark">
                    +${topping?.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
