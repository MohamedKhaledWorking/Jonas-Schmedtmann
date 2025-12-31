import { CheckCheck, Flame } from "lucide-react";
import React, { useState } from "react";
import { useCreatePizza } from "../../Context/CreatePizzaContext.jsx";

export default function Spicy() {
  const { spicy, dispatch } = useCreatePizza();
  return (
    <div
      onClick={() => dispatch({ type: "set/spicy", payload: !spicy })}
      className={`bg-secBgc dark:bg-secBgcDark px-6 py-8 my-4 rounded-3xl cursor-pointer  ${
        spicy ? "border border-orange-700" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div
            className={`p-4  rounded-full me-5 ${
              spicy
                ? "text-orange-700 bg-orange-700/25"
                : "text-textClr dark:text-textSEcClrDark bg-orange-100/25"
            }`}
          >
            <Flame />
          </div>
          <div>
            <p className="font-bold font-main ">make it spicy </p>
            <p className="text-textSecClr dark:textSecClrDark text-xs">
              add some hot sauce & chili flakes (optional)
            </p>
          </div>
        </div>
        <div
          className={` ${
            spicy
              ? "text-orange-700"
              : "text-textClr dark:text-textSEcClrDark"
          } `}
        >
          <CheckCheck />
        </div>
      </div>
    </div>
  );
}
