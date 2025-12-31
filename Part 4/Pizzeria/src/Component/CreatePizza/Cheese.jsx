import { Pizza } from "lucide-react";
import React from "react";
import { useCreatePizza } from "../../Context/CreatePizzaContext.jsx";

export default function Cheese() {
  const { cheese, dispatch } = useCreatePizza();
  return (
    <div className="my-8 p-8 pb-0 bg-secBgc dark:bg-secBgcDark rounded-2xl border border-textClr/20 dark:border-textSEcClrDark/20">
      <div className="flex space-x-3 items-center">
        <Pizza className="text-orange-700" />
        <p className="text-lg font-bold font-main">select Your Cheese</p>
      </div>
      <div className="my-4">
        <div className="flex flex-wrap my-8 space-y-3">
          <div className="px-2 w-full md:w-1/4">
            <div
              onClick={() =>
                dispatch({
                  type: "set/cheese",
                  payload: { cheese: "mozzarella", price: 2 },
                })
              }
              className={`w-full py-3 border text-center rounded-2xl cursor-pointer hover:border-orange-700 duration-400 ${
                cheese.cheese == "mozzarella"
                  ? "border-orange-700"
                  : "border-textClr dark:border-textClr"
              }`}
            >
              <p className="text-lg font-bold font-main">mozzarella</p>
              <p className="text-textSecClr dark:textSecClrDark text-sm my-1">
                +$2.00
              </p>
            </div>
          </div>
          <div className="px-2 w-full md:w-1/4">
            <div
              onClick={() =>
                dispatch({
                  type: "set/cheese",
                  payload: { cheese: "cheddar", price: 2 },
                })
              }
              className={`w-full py-3 border text-center rounded-2xl cursor-pointer hover:border-orange-700 duration-400 ${
                cheese.cheese == "cheddar"
                  ? "border-orange-700"
                  : "border-textClr dark:border-textClr"
              }`}
            >
              <p className="text-lg font-bold font-main">cheddar blend</p>
              <p className="text-textSecClr dark:textSecClrDark text-sm my-1">
                +$2.00
              </p>
            </div>
          </div>
          <div className="px-2 w-full md:w-1/4">
            <div
              onClick={() =>
                dispatch({
                  type: "set/cheese",
                  payload: { cheese: "four", price: 6.5 },
                })
              }
              className={`w-full py-3 border text-center rounded-2xl cursor-pointer hover:border-orange-700 duration-400 ${
                cheese.cheese == "four"
                  ? "border-orange-700"
                  : "border-textClr dark:border-textClr"
              }`}
            >
              <p className="text-lg font-bold font-main">four cheese</p>
              <p className="text-textSecClr dark:textSecClrDark text-sm my-1">
                +$6.50
              </p>
            </div>
          </div>
          <div className="px-2 w-full md:w-1/4">
            <div
              onClick={() =>
                dispatch({
                  type: "set/cheese",
                  payload: { cheese: "vegan", price: 3   },
                })
              }
              className={`w-full py-3 border text-center rounded-2xl cursor-pointer hover:border-orange-700 duration-400 ${
                cheese.cheese == "vegan"
                  ? "border-orange-700"
                  : "border-textClr dark:border-textClr"
              }`}
            >
              <p className="text-lg font-bold font-main">vegan mozzarella</p>
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
