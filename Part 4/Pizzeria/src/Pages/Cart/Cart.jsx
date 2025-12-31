import React from "react";
import PizzaCart from "../../Component/Cart/PizzaCart.jsx";
import Summery from "../../Component/Cart/Summery.jsx";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../../Features/cartSlice.js";

export default function Cart() {
  const items = useSelector((store) => store?.cart?.cart);
  const dispatch = useDispatch();
  return (
    <>
      <section className="my-30 bg-mainBgc dark:bg-mainBgcDark ">
        <div className="container mx-auto px-2">
          <div className="flex justify-between items-center ">
            <p className="text-4xl font-bold my-4 font-main text-start">
              Your Cart
            </p>
            <button
              onClick={() => dispatch(clearItems())}
              className="py-3 px-15 bg-orange-700 rounded-xl border-2 border-orange-700 text-xl  capitalize
            hover:ring-3 ring-orange-700 ring-offset-4 ring-offset-mainBgc dark:ring-offset-mainBgcDark text-textClr dark:text-textClrDark duration-500 cursor-pointer"
            >
              clear cart
            </button>
          </div>

          <div className="my-8  flex flex-col-reverse lg:flex-row ">
            <div className="lg:w-8/12  space-y-6">
              {items?.map((pizza) => {
                return <PizzaCart pizza={pizza} key={pizza?.id} />;
              })}
            </div>
            <Summery />
          </div>
        </div>
      </section>
    </>
  );
}
