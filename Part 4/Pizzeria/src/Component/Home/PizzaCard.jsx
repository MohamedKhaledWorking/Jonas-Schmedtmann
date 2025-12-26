import { Clock, Star } from "lucide-react";
import React from "react";

export default function PizzaCard({ pizza }) {
  return (
    <>
      <div className="w-full px-4 my-4 capitalize">
        <div className="border border-textSecClr/40 dark:border-textSecClrDark/40 pb-8 rounded-4xl overflow-hidden group relative">
          <p
            className={`absolute left-5 top-5 px-4 rounded-full z-5 text-sm text-white ${
              pizza?.isNew
                ? "bg-emerald-400"
                : pizza?.isPopular
                ? "bg-orange-400"
                : ""
            }`}
          >
            {pizza?.isNew ? "New" : pizza?.isPopular ? "Popular" : ""}
          </p>
          <div
            className={`absolute right-5 top-5 px-2 rounded-full z-5 text-sm bg-mainBgcDark dark:bg-mainBgc text-textClrDark dark:text-textClr font-semibold`}
          >
            <div className="flex items-center space-x-2">
              <span>
                <Star size={15} className="fill-yellow-500 text-yellow-500" />
              </span>
              <span>4.9</span>
            </div>
          </div>
          <div className="w-full h-62.5 overflow-hidden relative">
            <div className="absolute inset-0 bg-black/60 z-9 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 duration-300 ">
              <button className="bg-orange-500 text-white py-2 px-4 rounded-full cursor-pointer ">
                Order Now
              </button>
            </div>
            <img
              src={pizza?.image}
              alt={pizza?.name + " image"}
              loading="lazy"
              className="w-full cursor-pointer group-hover:scale-150 duration-300"
            />
          </div>
          <div className="px-4">
            <div className="flex  justify-between items-center my-4">
              <p className="font-bold font-main text-2xl line-clamp-1 hover:text-orange-500 duration-300 cursor-pointer ">
                {pizza?.name}
              </p>
              <p>${pizza?.basePrice}</p>
            </div>
            <p className="text-textSecClr dark:text-textSecClrDark my-4 line-clamp-3 h-20">
              {pizza?.description}
            </p>
            <div className="flex items-center justify-between ">
              <div className="flex items-center space-x-2">
                <span>
                  <Clock />
                </span>
                <span>
                  {pizza?.cookingTime?.min} - {pizza?.cookingTime?.max} min
                </span>
              </div>
              <span>{pizza?.reviewCount} reviews</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
