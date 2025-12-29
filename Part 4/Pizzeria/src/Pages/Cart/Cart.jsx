import React from "react";
import PizzaCart from "../../Component/Cart/PizzaCart.jsx";
import Summery from "../../Component/Cart/Summery.jsx";
import { useSelector } from "react-redux";

export default function Cart() {
  const items = useSelector((store) => store?.cart?.items);
  return (
    <>
      <section className="my-30 bg-mainBgc dark:bg-mainBgcDark ">
        <div className="container mx-auto px-2">
          <p className="text-4xl font-bold my-4 font-main text-start">
            Your Cart
          </p>

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
