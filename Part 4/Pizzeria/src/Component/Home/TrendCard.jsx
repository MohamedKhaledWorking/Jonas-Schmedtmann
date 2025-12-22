import { Star } from "lucide-react";
import React from "react";

export default function TrendCard({ idx, pizza }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 my-4">
      <div className="rounded-2xl overflow-hidden group cursor-pointer border border-textSecClr/40 dark:border-textSecClrDark  ">
        <div className="overflow-hidden h-96 ">
          <img
            src={pizza?.image}
            alt={pizza?.name}
            className="h-full w-full object-cover group-hover:scale-150 duration-300"
          />
        </div>
        <div className="px-4 pb-8 ">
          <p className="my-4 font-bold font-main text-3xl line-clamp-1 h-10 text-textClr dark:text-textClrDark group-hover:text-orange-500 duration-300 h-10 line-clamp-1">
            {pizza?.name}
          </p>
          <div className="flex items-center justify-between my-4">
            <div className="flex items-center space-x-2">
              <span>
                <Star size={20} className=" text-yellow-500 fill-yellow-500" />
              </span>
              <span className="font-bold">{pizza?.rating}</span>
              <span className="text-textSecClr dark:text-textSecClrDark ">
                ({pizza?.reviewCount} Reviews)
              </span>
            </div>
            <div
              className={`px-4 py-1 rounded-full flex text-sm ${
                idx === 1
                  ? "bg-yellow-500  text-white"
                  : idx == 2
                  ? "bg-[#C4C4C4] text-black"
                  : "bg-[#cd7f32] text-white"
              } `}
            >
              #{idx}
            </div>
          </div>
          <div className="flex items-center justify-between ">
            <div className="flex space-x-4 text-orange-500 ">
              <p className="text-3xl font-bold font-main line-through ">
                $24.5
              </p>
              <p className="text-3xl font-bold font-main">
                ${pizza?.basePrice}
              </p>
            </div>
            <button className="btn bg-orange-500 px-4 md:px-8 border-none shadow-none">
              view details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
