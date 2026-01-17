import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

export default function GuestTablePagination() {
  return (
    <div className="bg-secBgc mt-5 py-3">
      <ul className="flex items-center gap-x-4 min-w-max mx-auto w-fit">
        <li
          className="text-gray-500 p-2 inline-flex items-center  mr-1"
          href="javascript:;"
        >
          <span className="w-10 h-10 cursor-pointer rounded-full transition-all duration-300 flex justify-center items-center border hover:border-lightBorder hover:text-theme ">
            <ChevronLeft />
          </span>
        </li>
        <li
          className="w-10 h-10 cursor-pointer  bg-transparent text-gray-500 p-2 justify-center inline-flex items-center rounded-full transition-all duration-300 hover:text-theme"
          href="javascript:;"
          aria-current="page"
        >
          1
        </li>
        <li
          className="w-10 h-10 cursor-pointer bg-theme text-white p-2 justify-center inline-flex items-center rounded-full transition-all duration-300 hover:bg-theme hover:text-white"
          href="javascript:;"
        >
          2
        </li>
        <li
          className="w-10 h-10 cursor-pointer bg-transparent text-gray-500 p-2 justify-center inline-flex items-center rounded-full transition-all duration-300 hover:text-theme"
          href="javascript:;"
        >
          3
        </li>
        <li
          className="w-10 h-10 cursor-pointer bg-transparent text-gray-500 p-2 justify-center inline-flex items-center rounded-full transition-all duration-300 hover:text-theme"
          href="javascript:;"
        >
          4
        </li>
        <li
          className="w-10 h-10 cursor-pointer bg-transparent text-gray-500 p-2 justify-center inline-flex items-center rounded-full transition-all duration-300 hover:text-theme"
          href="javascript:;"
        >
          5
        </li>
        <a
          className="text-gray-500 p-2 inline-flex items-center ml-1"
          href="javascript:;"
        >
          <span className="w-10 h-10 cursor-pointer rounded-full transition-all duration-300 flex justify-center items-center border hover:border-lightBorder hover:text-theme">
            <ChevronRight />
          </span>
        </a>
      </ul>
    </div>
  );
}
