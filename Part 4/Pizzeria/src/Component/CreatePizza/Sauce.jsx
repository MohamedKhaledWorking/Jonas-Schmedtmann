import { SoapDispenserDroplet } from "lucide-react";
import React from "react";

export default function Sauce() {
  const [selectedSize, setSelectedSize] = React.useState("l");
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
              onClick={() => setSelectedSize("s")}
              className={`w-full py-3 border text-center rounded-2xl cursor-pointer hover:border-orange-700 duration-400 ${
                selectedSize.toUpperCase() == "S"
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
              onClick={() => setSelectedSize("m")}
              className={`w-full py-3 border text-center rounded-2xl cursor-pointer hover:border-orange-700 duration-400 ${
                selectedSize.toUpperCase() == "M"
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
              onClick={() => setSelectedSize("l")}
              className={`w-full py-3 border text-center rounded-2xl cursor-pointer hover:border-orange-700 duration-400 ${
                selectedSize.toUpperCase() == "L"
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
              onClick={() => setSelectedSize("l")}
              className={`w-full py-3 border text-center rounded-2xl cursor-pointer hover:border-orange-700 duration-400 ${
                selectedSize.toUpperCase() == "L"
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
