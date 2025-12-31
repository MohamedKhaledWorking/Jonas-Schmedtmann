import { Shrimp } from "lucide-react";
import React from "react";
import { useCreatePizza } from "../../Context/CreatePizzaContext.jsx";

export default function Crust() {
  const { crust, dispatch } = useCreatePizza();
  return (
    <div className="my-8 p-8 pb-0 bg-secBgc dark:bg-secBgcDark rounded-2xl border border-textClr/20 dark:border-textSEcClrDark/20">
      <div className="flex space-x-3 items-center">
        <Shrimp className="text-orange-700" />
        <p className="text-lg font-bold font-main">Choose Your Crust</p>
      </div>
      <div className="my-4">
        <div className="flex flex-wrap my-8 space-y-3">
          <div className="px-2 w-full md:w-1/2">
            <div
              onClick={() =>
                dispatch({
                  type: "set/crust",
                  payload: { crust: "classic", price: 0 },
                })
              }
              className={`w-full py-3 border text-center rounded-2xl cursor-pointer hover:border-orange-700 duration-400 ${
                crust.crust == "classic"
                  ? "border-orange-700"
                  : "border-textClr dark:border-textClr"
              }`}
            >
              <p className="text-lg font-bold font-main">
                classic hand-tossed{" "}
              </p>
              <p className="text-textSecClr dark:textSecClrDark text-sm my-1">
                traditional crispy crust
              </p>
            </div>
          </div>
          <div className="px-2 w-full md:w-1/2">
            <div
              onClick={() =>
                dispatch({
                  type: "set/crust",
                  payload: { curst: "thin", price: 0 },
                })
              }
              className={`w-full py-3 border text-center rounded-2xl cursor-pointer hover:border-orange-700 duration-400 ${
                crust.crust == "thin"
                  ? "border-orange-700"
                  : "border-textClr dark:border-textClr"
              }`}
            >
              <p className="text-2xl font-bold font-main">thin crust</p>
              <p className="text-textSecClr dark:textSecClrDark text-sm my-1">
                extra thin and crispy crust
              </p>
            </div>
          </div>
          <div className="px-2 w-full md:w-1/2">
            <div
              onClick={() =>
                dispatch({
                  type: "set/crust",
                  payload: { crust: "thick", price: 2 },
                })
              }
              className={`w-full py-3 border text-center rounded-2xl cursor-pointer hover:border-orange-700 duration-400 ${
                crust.crust == "thick"
                  ? "border-orange-700"
                  : "border-textClr dark:border-textClr"
              }`}
            >
              <p className="text-2xl font-bold font-main">thick pan</p>
              <p className="text-textSecClr dark:textSecClrDark text-sm my-1">
                fluffy and soft crust
              </p>
              <div className="text-white bg-slate-200/5 px-4 py-2 rounded-full w-fit mx-auto text-xs mt-2">
                +$2
              </div>
            </div>
          </div>
          <div className="px-2 w-full md:w-1/2">
            <div
              onClick={() =>
                dispatch({
                  type: "set/crust",
                  payload: { crust: "cheese", price: 2 },
                })
              }
              className={`w-full py-3 border text-center rounded-2xl cursor-pointer hover:border-orange-700 duration-400 ${
                crust.crust == "cheese"
                  ? "border-orange-700"
                  : "border-textClr dark:border-textClr"
              }`}
            >
              <p className="text-2xl font-bold font-main">cheese stuffed</p>
              <p className="text-textSecClr dark:textSecClrDark text-sm my-1">
                cheese filled edges
              </p>
              <div className="text-white bg-slate-200/5 px-4 py-2 rounded-full w-fit mx-auto text-xs mt-2">
                +$2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
