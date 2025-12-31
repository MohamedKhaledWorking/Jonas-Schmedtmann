import React from "react";

export default function CreditInputs() {
  return (
    <>
      <div className="w-full pe-4 my-3">
        <label htmlFor="cardNumber">Card Number</label>
        <input
          id="cardNumber"
          type="text"
          name="cardNumber"
          placeholder="1234 1234 1234 1234"
          className="w-full border border-textClr/50 dark:border-textClrDark/50 px-4 py-3 rounded-xl mt-2 outline-none 
                    focus:ring-2 focus:ring-orange-700 focus:ring-offset-mainBgc dark:focus:ring-offset-mainBgcDark focus:ring-offset-6 duration-400 focus:border-orange-700"
        />
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 pe-4 my-3">
          <label htmlFor="expire">Expiration Date</label>
          <input
            id="expire"
            type="text"
            name="expire"
            placeholder="MM/YY"
            className="w-full border border-textClr/50 dark:border-textClrDark/50 px-4 py-3 rounded-xl mt-2 outline-none 
                    focus:ring-2 focus:ring-orange-700 focus:ring-offset-mainBgc dark:focus:ring-offset-mainBgcDark focus:ring-offset-6 duration-400 focus:border-orange-700"
          />
        </div>
        <div className="md:w-1/2 pe-4 my-3">
          <label htmlFor="cvv">CVC </label>
          <input
            id="cvv"
            type="number"
            name="cvv"
            placeholder="123"
            className="w-full border border-textClr/50 dark:border-textClrDark/50 px-4 py-3 rounded-xl mt-2 outline-none 
                    focus:ring-2 focus:ring-orange-700 focus:ring-offset-mainBgc dark:focus:ring-offset-mainBgcDark focus:ring-offset-6 duration-400 focus:border-orange-700"
          />
        </div>
      </div>
    </>
  );
}
