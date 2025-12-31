import React from "react";
import { Link } from "react-router-dom";
import { useTotalPrice } from "../../Hooks/useTotalPrice.js";

export default function Summery({ isPriority = false, state }) {
  const { subTotal, priority, tax, delivery, total } =
    useTotalPrice(isPriority);

  return (
    <>
      <div className="w-full lg:w-4/12 ps-0 lg:ps-4 mb-10">
        <div className="bg-secBgc dark:bg-secBgcDark px-4 py-8 rounded-3xl">
          <p className="text-lg font-bold font-main">Order Summary</p>
          <div className="border-b border-b-slate-700/50">
            <div className="my-3 flex items-center justify-between text-sm ">
              <p>Subtotal</p>
              <p className="text-textSecClr dark:text-textSecClrDark">
                ${subTotal.toFixed(2)}
              </p>
            </div>
            <div className="my-3 flex items-center justify-between text-sm ">
              <p>Tax (8%)</p>
              <p className="text-textSecClr dark:text-textSecClrDark">
                ${tax.toFixed(2)}
              </p>
            </div>
            <div className="my-3 flex items-center justify-between text-sm ">
              <p>Delivery</p>
              <p>{delivery == 0 ? "Free" : `$${delivery.toFixed(2)}`}</p>
            </div>
            {isPriority && (
              <div className="my-3 flex items-center justify-between text-sm ">
                <p>Priority</p>
                <p>${priority}</p>
              </div>
            )}
          </div>
          <div className="my-3 flex items-center justify-between text-2xl font-bold font-main ">
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <button
            type="submit"
            className={`w-full px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 duration-300 mt-5 block text-center capitalize
                hover:ring-2 ring-orange-700 ring-offset-4 ring-offset-mainBgc dark:ring-offset-mainBgcDark text-sm ${
                  state == "submitting"
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer  "
                }`}
            disabled={state == "submitting"}
          >
            {state == "submitting" ? "Processing..." : "Checkout"}
          </button>
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
