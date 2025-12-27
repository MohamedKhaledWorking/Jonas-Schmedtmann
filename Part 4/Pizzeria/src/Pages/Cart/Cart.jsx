import React from "react";
import Products from "../../Component/Cart/Products.jsx";
import Summery from "../../Component/Cart/Summery.jsx";

export default function Cart() {
  return (
    <>
      <section className="my-30 bg-mainBgc dark:bg-mainBgcDark ">
        <div className="container mx-auto px-2">
          <p className="text-4xl font-bold my-4 font-main text-start">
            Your Cart
          </p>

          <div className="my-8  flex flex-col-reverse lg:flex-row ">
            <div className="lg:w-8/12  space-y-6">
              <Products />
              <Products />
            </div>
            <Summery />
          </div>
        </div>
      </section>
    </>
  );
}
