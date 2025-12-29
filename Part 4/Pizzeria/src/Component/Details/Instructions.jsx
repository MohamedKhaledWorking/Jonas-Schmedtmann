import React from "react";

export default function Instructions() {
  return (
    <>
      <label id="instructions" className="font-main text-xl font-bold my-8">
        special instructions
      </label>
      <textarea
        name="instructions"
        id="instructions"
        className="border-2 border-dark focus:border-orange-700 text-textClr dark:text-textClrDark rounded-2xl p-4 my-4 w-full text-sm duration-400 focus:ring-3 focus:ring-orange-700
       focus:ring-offset-4 focus:ring-offset-mainBgc dark:focus:ring-offset-mainBgcDark  outline-none"
        placeholder="add any special instructions..."
      ></textarea>
    </>
  );
}
