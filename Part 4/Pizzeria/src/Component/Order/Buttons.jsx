import { Box, PackagePlus } from "lucide-react";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function Buttons() {
  const { id } = useLoaderData();
  return (
    <>
      <div className="flex flex-wrap md:flex-row flex-col  lg:w-1/2 mx-auto ">
        <div className="pe-3 md:w-1/2 mb-4">
          <Link
            to={`/track/${id}`}
            className="w-full px-8 py-4 bg-orange-700 text-textClr dark:text-textClrDark rounded-xl hover:bg-orange-600 duration-300 hover:ring-3 ring-orange-700 ring-offset-5 
            ring-offset-mainBgc dark:ring-offset-mainBgcDark text-sm cursor-pointer flex items-center justify-center space-x-2 capitalize"
          >
            <Box />
            <span> Track order</span>
          </Link>
        </div>
        <div className="pe-3 md:w-1/2 mb-4">
          <Link
            to={"/menu"}
            className="w-full px-8 py-4 bg-transparent border border-orange-700  rounded-xl text-orange-700 duration-300 hover:ring-3 ring-orange-700 ring-offset-5 
            ring-offset-mainBgc dark:ring-offset-mainBgcDark text-sm cursor-pointer flex items-center justify-center space-x-2 capitalize"
          >
            <PackagePlus />
            <span>back to menu</span>
          </Link>
        </div>
      </div>
    </>
  );
}
