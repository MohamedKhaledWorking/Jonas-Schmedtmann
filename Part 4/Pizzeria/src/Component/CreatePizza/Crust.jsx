import { Shrimp } from "lucide-react";
import React from "react";

export default function Crust() {
  const [selectedSize, setSelectedSize] = React.useState("l");
  return (
    <div className="my-8 p-8 pb-0 bg-secBgc dark:bg-secBgcDark rounded-2xl border border-textClr/20 dark:border-textSEcClrDark/20">
      <div className="flex space-x-3 items-center">
        <Shrimp className="text-orange-700" />
        <p className="text-lg font-bold font-main">Chose Your Size</p>
      </div>
      <div className="my-4">
        <div className="flex flex-wrap my-8 space-y-3">
          <div className="px-2 w-full md:w-1/2">
            <div
              onClick={() => setSelectedSize("s")}
              className={`w-full py-3 border text-center rounded-2xl cursor-pointer hover:border-orange-700 duration-400 ${
                selectedSize.toUpperCase() == "S"
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
              onClick={() => setSelectedSize("m")}
              className={`w-full py-3 border text-center rounded-2xl cursor-pointer hover:border-orange-700 duration-400 ${
                selectedSize.toUpperCase() == "M"
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
              onClick={() => setSelectedSize("l")}
              className={`w-full py-3 border text-center rounded-2xl cursor-pointer hover:border-orange-700 duration-400 ${
                selectedSize.toUpperCase() == "L"
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
              onClick={() => setSelectedSize("l")}
              className={`w-full py-3 border text-center rounded-2xl cursor-pointer hover:border-orange-700 duration-400 ${
                selectedSize.toUpperCase() == "L"
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
