import { Box, PackagePlus } from "lucide-react";
import React from "react";

export default function Buttons() {
  return (
    <>
      <div className="flex flex-wrap md:flex-row flex-col  lg:w-1/2 mx-auto ">
        <div className="pe-3 md:w-1/2 mb-4">
          <button
            className="w-full px-8 py-4 bg-orange-700 text-textClr dark:text-textClrDark rounded-xl hover:bg-orange-600 duration-300 hover:ring-3 ring-orange-700 ring-offset-5 
            ring-offset-mainBgc dark:ring-offset-mainBgcDark text-sm cursor-pointer flex items-center justify-center space-x-2 capitalize"
          >
            <Box />
            <span> Track order</span>
          </button>
        </div>
        <div className="pe-3 md:w-1/2 mb-4">
          <button
            className="w-full px-8 py-4 bg-transparent border border-orange-700  rounded-xl text-orange-700 duration-300 hover:ring-3 ring-orange-700 ring-offset-5 
            ring-offset-mainBgc dark:ring-offset-mainBgcDark text-sm cursor-pointer flex items-center justify-center space-x-2 capitalize"
          >
            <PackagePlus />
            <span>order more</span>
          </button>
        </div>
      </div>
    </>
  );
}
