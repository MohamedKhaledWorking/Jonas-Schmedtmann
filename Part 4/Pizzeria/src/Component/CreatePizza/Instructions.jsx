import { CookingPot } from "lucide-react";
import React from "react";

export default function Instructions() {
  return (
    <div className="my-8 p-8 pb-0 bg-secBgc dark:bg-secBgcDark rounded-2xl border border-textClr/20 dark:border-textSEcClrDark/20">
      <div className="flex space-x-3 items-center">
        <CookingPot className="text-orange-700" />
        <p className="text-lg font-bold font-main">special instructions</p>
      </div>
      <div className="my-4">
        <textarea
          name=""
          id=""
          placeholder="any special request ? (e.g extra crispy, light on cheese )"
          className="w-full px-4 py-3 rounded-xl border border-textClr/20 dark:border-textSEcClrDark/20 bg-transparent focus:outline-none 
          focus:ring-2 focus:ring-orange-700  focus:ring-offset-5 focus:ring-offset-secBgc dark:focus:ring-offset-secBgcDark transition focus:border-orange-700 duration-300 placeholder:text-xs md:placeholder:text-base"
        ></textarea>
      </div>
    </div>
  );
}
