import React from "react";
import { Trash } from "lucide-react";
import Toppings from "./Toppings.jsx";

export default function PizzaCart({ pizza }) {
  return (
    <>
      <div className="w-full  pe-4 bg-secBgc dark:bg-secBgcDark px-4 pt-6 rounded-3xl  ">
        <div className="mb-4 pb-4">
          <div className="flex flex-col md:flex-row ">
            <div className="size-full md:w-30 md:me-4 mx-auto mb-4">
              <img
                src={pizza?.image}
                className=" rounded-xl"
                alt={pizza?.name + " order image"}
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center">
                <p className="text-2xl font-bold font-main ">{pizza?.name}</p>
                <Trash className="hover:text-red-500 cursor-pointer duration-300" />
              </div>
              <p className="text-textSecClr dark:text-textSecClrDark text-sm my-1">
                {pizza?.selectedSize} (12")
              </p>
              {pizza?.isSpicy && (
                <div className="bg-red-500/20 w-fit px-2 py-1 rounded-full text-red-500 text-sm my-2">
                  🌶️ Spicy
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center my-3">
            <div className="flex items-center justify-between bg-black/10 dark:bg-slate-400/15 px-2 py-2 rounded-xl my-2">
              <button className="px-3 py-1 text-white rounded-xl  bg-black text-lg cursor-pointer">
                -
              </button>
              <div className="px-2">
                <input
                  className="text-sm font-medium px-2 w-10 outline-none text-center  focus:border border-red-500 rounded-xl p-2 "
                  value={1}
                />
              </div>
              <button className="px-3 py-1 text-white rounded-xl  bg-black text-lg cursor-pointer ">
                +
              </button>
            </div>
            <p className="font-bold text-2xl text-orange-700">$31.49</p>
          </div>
          {pizza?.extraTopping && <Toppings />}
        </div>
      </div>
    </>
  );
}
