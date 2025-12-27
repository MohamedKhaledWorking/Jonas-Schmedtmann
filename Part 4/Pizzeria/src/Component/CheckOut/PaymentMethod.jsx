import { CreditCard, HandCoins } from "lucide-react";
import React, { useState } from "react";

export default function PaymentMethod({ isCashed, setIsCashed }) {
  return (
    <>
      <div className="bg-secBgc dark:bg-secBgcDark px-6 py-8 my-4 rounded-3xl">
        <p className="text-2xl font-bold font-main">payment method</p>
        <div className="flex flex-wrap w-full my-4 b">
          <div className="md:w-1/2   w-full md:pe-4 my-3">
            <div
              onClick={() => setIsCashed((isCashed) => !isCashed)}
              className={`border  p-5 rounded-2xl flex items-center hover:border-orange-700 cursor-pointer duration-400 ${
                !isCashed
                  ? "border-orange-700 text-orange-700 ring-2 ring-offset-3 ring-orange-700 ring-offset-mainBgc dark:ring-offset-mainBgcDark"
                  : "border-textClr/20 dark:border-textClrDark/20"
              }`}
            >
              <div className="me-4">
                <CreditCard />
              </div>
              <div>
                <p>Credit Card</p>
                <p>**** **** **** 1234</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2  w-full md:pe-4 my-3">
            <div
              onClick={() => setIsCashed((isCashed) => !isCashed)}
              className={`border  p-5 rounded-2xl flex items-center hover:border-orange-700 cursor-pointer duration-400 ${
                isCashed
                  ? "border-orange-700 text-orange-700 ring-2 ring-offset-3 ring-orange-700 ring-offset-mainBgc dark:ring-offset-mainBgcDark"
                  : "border-textClr/20 dark:border-textClrDark/20"
              }`}
            >
              <div className="me-4">
                <HandCoins />
              </div>
              <div>
                <p>cash</p>
                <p>payment on delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
