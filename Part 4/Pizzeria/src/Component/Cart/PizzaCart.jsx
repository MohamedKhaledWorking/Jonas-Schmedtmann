import React from "react";
import { Trash } from "lucide-react";
import Toppings from "./Toppings.jsx";
import { useDispatch } from "react-redux";
import { deleteFromCart, updateQuantity } from "../../Features/cartSlice.js";

export default function PizzaCart({ pizza }) {
  const dispatch = useDispatch();
  function setQty(id, quantity) {
    dispatch(updateQuantity({ id, quantity }));
  }

  return (
    <>
      <div className="w-full  pe-4 bg-secBgc dark:bg-secBgcDark px-4 pt-6 rounded-3xl  ">
        <div className="mb-4 pb-4">
          <div className="flex flex-col md:flex-row ">
            <div className="size-full md:w-40 md:me-4 mx-auto mb-4 md:mb-0">
              <img
                src={pizza?.image}
                className=" rounded-xl lg:w-50  lg:h-25 object-cover"
                alt={pizza?.name + " order image"}
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center">
                <p className="text-2xl font-bold font-main ">{pizza?.name}</p>

                <span onClick={() => dispatch(deleteFromCart(pizza?.id))}>
                  <Trash className="hover:text-red-500 cursor-pointer duration-300" />
                </span>
              </div>
              <p className="text-textSecClr dark:text-textSecClrDark text-sm my-1">
                {pizza?.quantity} x {pizza?.size} (12")
              </p>
              {pizza?.isSpicy && (
                <div className="bg-red-500/10 w-fit px-2 py-1 rounded-full text-red-500 text-xs my-2">
                  🌶️ Spicy
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center my-1">
            <div className="flex items-center justify-between bg-black/10 dark:bg-slate-400/15 px-2 py-2 rounded-xl my-2">
              <button
                className="px-3 py-1 text-white rounded-xl  bg-black text-lg cursor-pointer"
                onClick={() => setQty(pizza?.id, pizza?.quantity - 1)}
              >
                -
              </button>
              <div className="px-2">
                <input
                  min={1}
                  className="text-sm font-medium px-2 w-10 outline-none text-center  focus:border border-red-500 rounded-xl p-2 "
                  value={pizza?.quantity}
                  onChange={(e) => setQty(pizza?.id, +e.target.value)}
                />
              </div>
              <button
                className="px-3 py-1 text-white rounded-xl  bg-black text-lg cursor-pointer "
                onClick={() => setQty(pizza?.id, pizza?.quantity + 1)}
              >
                +
              </button>
            </div>
            <p className="font-bold text-2xl text-orange-700">
              ${pizza?.totalPrice?.toFixed(2)}
            </p>
          </div>
          {pizza?.instructions && (
            <div className="bg-orange-700/10 rounded-lg text-orange-700 py-2 px-4 text-xs mb-4">
              {pizza?.instructions}
            </div>
          )}
          {pizza?.extraToppings?.length > 0 && (
            <Toppings toppings={pizza?.extraToppings} />
          )}
        </div>
      </div>
    </>
  );
}
