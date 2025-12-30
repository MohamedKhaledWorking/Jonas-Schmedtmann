import React from "react";
import { Link } from "react-router-dom";

export default function Summery({ isPriority = false, state }) {
  return (
    <>
      <div className="w-full lg:w-4/12 ps-0 lg:ps-4 mb-10">
        <div className="bg-secBgc dark:bg-secBgcDark px-4 py-8 rounded-3xl">
          <p className="text-lg font-bold font-main">Order Summary</p>
          <div className="my-5 flex items-center justify-between flex-col md:flex-row lg:flex-row lg:w-full space-y-4 md:space-y-0 ">
            <div className="md:pe-4 md:w-9/12 w-full">
              <input
                type="text"
                placeholder="Order Number"
                className="px-4 py-3 rounded-xl border border-orange-700/20 bg-transparent focus:outline-none w-full 
             focus:ring-2 ring-orange-700 ring-offset-4 ring-offset-mainBgc dark:ring-offset-mainBgcDark focus:border-orange-600 duration-300 text-sm text "
              />
            </div>
            <button
              type="submit"
              className="block w-full md:w-3/12  px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 duration-300 capitalize 
                  hover:ring-2 ring-orange-700 ring-offset-4 ring-offset-mainBgc dark:ring-offset-mainBgcDark text-sm cursor-pointer"
            >
              apply
            </button>
          </div>
          <div className="border-b border-b-slate-700/50">
            <div className="my-3 flex items-center justify-between text-sm ">
              <p>Subtotal</p>
              <p className="text-textSecClr dark:text-textSecClrDark">$10</p>
            </div>
            <div className="my-3 flex items-center justify-between text-sm ">
              <p>Tax (8%)</p>
              <p className="text-textSecClr dark:text-textSecClrDark">$2.52</p>
            </div>
            <div className="my-3 flex items-center justify-between text-sm ">
              <p>Delivery</p>
              <p>free</p>
            </div>
            {isPriority && (
              <div className="my-3 flex items-center justify-between text-sm ">
                <p>Priority</p>
                <p>$5.99</p>
              </div>
            )}
          </div>
          <div className="my-3 flex items-center justify-between text-2xl font-bold font-main ">
            <p>Total</p>
            <p>$26.415</p>
          </div>
          <Link
            to={"/checkout"}
            className={`w-full px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 duration-300 mt-5 block text-center capitalize
                hover:ring-2 ring-orange-700 ring-offset-4 ring-offset-mainBgc dark:ring-offset-mainBgcDark text-sm ${
                  state == "submitting"
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer  "
                }`}
            disabled={state == "submitting"}
          >
            {state == "submitting" ? "Processing..." : "Proceed to Checkout"}
          </Link>
          <Link
            to={"/menu"}
            className="w-full mt-4 px-6 py-3 border border-orange-600 text-orange-700 hover:text-white rounded-xl block text-center capitalize
                hover:bg-orange-700 duration-300 cursor-pointer  hover:ring-2 ring-orange-700 ring-offset-4 ring-offset-mainBgc dark:ring-offset-mainBgcDark text-sm"
          >
            back to menu
          </Link>
        </div>
      </div>
    </>
  );
}
