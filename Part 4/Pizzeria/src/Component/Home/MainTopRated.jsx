import React from "react";
import img from "../../assets/photo-1590947132387-155cc02f3212.jfif";
import { Link, useLoaderData } from "react-router-dom";
import { Star } from "lucide-react";

export default function MainTopRated() {
  const { topRated } = useLoaderData();
  const topRatedPizza = topRated[0];

  return (
    <>
      <div className="px-4 w-full lg:w-1/2 ">
        <div className="w-full rounded-3xl overflow-hidden relative border border-textSecClr/20 dark:border-textSecClrDark/20">
          <img
            src={topRatedPizza?.image}
            alt={topRatedPizza?.name + " image"}
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/10 to-secBgc to-65% dark:to-secBgcDark px-10 flex justify-end flex-col md:pb-5 ">
            <Link
              to={`/pizza/${topRatedPizza?.id}`}
              className="text-lg md:text-3xl font-bold font-main "
            >
              {topRatedPizza?.name}
            </Link>
            <p className="text-textSecClr dark:text-textSecClrDark my-2 md:max-w-11/12 text-xs md:text-lg">
              {topRatedPizza?.description}
            </p>
            <div className="flex space-x-2  ">
              <p className="text-bold text-sm md:text-lg font-bold">{topRatedPizza?.rating}</p>
              <Star className="text-yellow-500 fill-yellow-500  w-4 h-4 md:w-6 md:h-6" />
              <p className="text-bold text-sm md:text-lg text-textSecClr dark:text-textSecClrDark">
                ({topRatedPizza?.reviewCount} reviews)
              </p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg md:text-2xl font-bold text-orange-500">
                ${topRatedPizza?.basePrice}
              </p>
              <Link
                to={`/pizza/${topRatedPizza?.id}`}
                className="px-4 md:px-16 py-2.5 bg-orange-500 text-white rounded-xl cursor-pointer 
              hover:ring-3 ring-offset-4 ring-offset-mainBgc dark:ring-offset-mainBgcDark hover:ring-orange-500 duration-300 text-sm md:text-lg font-medium"
              >
                order now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
