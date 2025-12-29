import { MoveRight, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function SecTopRated({ topRated }) {
  return (
    <>
      <div className="px-4 w-full lg:w-1/2 flex flex-col">
        {topRated?.map((pizza, idx) => (
          <div
            key={idx}
            className="w-full  mb-4 rounded-3xl overflow-hidden px-4 py-3 flex items-center border border-textSecClr/20 dark:border-textSecClrDark/20 hover:border-orange-500 duration-300 group space-x-4"
          >
            <div className="w-6/12 md:w-2/12 ">
              <img
                src={pizza?.image}
                alt={pizza?.name + " image"}
                className="w-full object-cover h-25  rounded-2xl group-hover:scale-110 duration-300 "
              />
            </div>
            <div className="w-8/12">
              <Link to={`/pizza/${pizza?.id}`}>
                <p className="font-bold font-main text-base md:text-2xl line-clamp-1 group-hover:text-orange-500 duration-300 cursor-pointer">
                  {pizza?.name}
                </p>
              </Link>
              <div className="flex space-x-2 my-2 text-xs md:text-base">
                <span className="font-bold">#{idx + 2}</span>
                <Star className="text-yellow-500 fill-yellow-500  w-4 h-4 md:w-5 md:h-5" />
                <span className="font-bold">{pizza?.rating}</span>
                <span className="text-textSecClr dark:text-textSecClrDark">
                  ({pizza?.reviewCount} )
                </span>
              </div>

              <p className="text-textSecClr dark:text-textSecClrDark line-clamp-1 text-xs md:text-sm">
                {pizza?.description}
              </p>
            </div>
            <div className="w-2/12 flex flex-col items-center justify-center space-y-2 ">
              <div className="text-sm md:text-2xl font-bold text-orange-500">
                ${pizza?.basePrice}
              </div>
              <Link to={`/pizza/${pizza?.id}`}>
                <MoveRight className="group-hover:text-orange-500 duration-300 cursor-pointer w-6 h-6 md:w-8 md:h-8" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
