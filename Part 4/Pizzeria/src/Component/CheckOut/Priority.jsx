import { CheckCheck, Rabbit } from "lucide-react";
import React from "react";

export default function Priority({ isPriority, setIsPriority }) {
  return (
    <div
      onClick={() => setIsPriority((prev) => !prev)}
      className={`bg-secBgc dark:bg-secBgcDark px-6 py-8 my-4 rounded-3xl cursor-pointer ${
        isPriority ? "border border-orange-700" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div
            className={`p-4 rounded-full me-5 ${
              isPriority
                ? "text-orange-700 bg-orange-700/25"
                : "text-textClr dark:text-textSecClrDark bg-orange-100/25"
            }`}
          >
            <Rabbit />
          </div>

          <div>
            <p>Priority Delivery</p>
            <p>Get it in 25 min instead of 45 min (+$5.99)</p>
          </div>
        </div>

        <div
          className={`${
            isPriority
              ? "text-orange-700"
              : "text-textClr dark:text-textSecClrDark"
          }`}
        >
          <CheckCheck />
        </div>
      </div>
    </div>
  );
}
