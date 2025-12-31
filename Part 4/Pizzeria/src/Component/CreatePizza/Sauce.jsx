import { SoapDispenserDroplet } from "lucide-react";
import React, { useState } from "react";
import { useCreatePizza } from "../../Context/CreatePizzaContext.jsx";

export default function Sauce() {
  const { sauce, dispatch } = useCreatePizza();
  return (
    <div className="my-8 p-8 pb-0 bg-secBgc dark:bg-secBgcDark rounded-2xl border border-textClr/20 dark:border-textSEcClrDark/20">
      <div className="flex space-x-3 items-center">
        <SoapDispenserDroplet className="text-orange-700" />
        <p className="text-lg font-bold font-main">Pick Your Sauce</p>
      </div>
      <div className="my-4">
        <div className="flex flex-wrap my-8 space-y-3">
          <div className="px-2 w-full md:w-1/4">
            <div
              onClick={() =>
                dispatch({
                  type: "set/sauce",
                  payload: { sauce: "tomato", price: 2 },
                })
              }
              className={`w-full py-3 border text-center rounded-2xl cursor-pointer hover:border-orange-700 duration-400 ${
                sauce.sauce == "tomato"
                  ? "border-orange-700"
                  : "border-textClr dark:border-textClr"
              }`}
            >
              <p className="text-lg font-bold font-main">classic tomato</p>
              <p className="text-textSecClr dark:textSecClrDark text-sm my-1">
                +$2.00
              </p>
            </div>
          </div>
          <div className="px-2 w-full md:w-1/4">
            <div
              onClick={() =>
                dispatch({
                  type: "set/sauce",
                  payload: { sauce: "bbq", price: 2 },
                })
              }
              className={`w-full py-3 border text-center rounded-2xl cursor-pointer hover:border-orange-700 duration-400 ${
                sauce.sauce == "bbq"
                  ? "border-orange-700"
                  : "border-textClr dark:border-textClr"
              }`}
            >
              <p className="text-lg font-bold font-main">BBQ Sauce</p>
              <p className="text-textSecClr dark:textSecClrDark text-sm my-1">
                +$2.00
              </p>
            </div>
          </div>
          <div className="px-2 w-full md:w-1/4">
            <div
              onClick={() =>
                dispatch({
                  type: "set/sauce",
                  payload: { sauce: "garlic", price: 6.5 },
                })
              }
              className={`w-full py-3 border text-center rounded-2xl cursor-pointer hover:border-orange-700 duration-400 ${
                sauce.sauce == "garlic"
                  ? "border-orange-700"
                  : "border-textClr dark:border-textClr"
              }`}
            >
              <p className="text-lg font-bold font-main">Garlic white</p>
              <p className="text-textSecClr dark:textSecClrDark text-sm my-1">
                +$6.50
              </p>
            </div>
          </div>
          <div className="px-2 w-full md:w-1/4">
            <div
              onClick={() =>
                dispatch({
                  type: "set/sauce",
                  payload: { sauce: "basil", price: 3 },
                })
              }
              className={`w-full py-3 border text-center rounded-2xl cursor-pointer hover:border-orange-700 duration-400 ${
                sauce.sauce == "basil"
                  ? "border-orange-700"
                  : "border-textClr dark:border-textClr"
              }`}
            >
              <p className="text-lg font-bold font-main">basil pesto</p>
              <p className="text-textSecClr dark:textSecClrDark text-sm my-1">
                +$3.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
