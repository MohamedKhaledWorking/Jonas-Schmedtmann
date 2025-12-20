import {
  Award,
  ChefHat,
  ClockCheck,
  HeartPlus,
  Sparkles,
  Telescope,
  TrendingUp,
  Truck,
} from "lucide-react";
import React from "react";

export default function HeroSection() {
  return (
    <>
      <div className="h-[90vh] flex flex-col justify-center items-center text-center capitalize md:mt-0 mt-15">
        <div className="px-6 text-xs md:text-base bg-orange-50 dark:bg-secBgcDark text-textClr dark:text-textClrDark p-2 rounded-full flex items-center border border-orange-500/30">
          <span className="text-xs md:text-xl mr-3 animate-pulse text-orange-500">
            •
          </span>
          Open Now • Delivering in 25 min
        </div>

        {/* main headers */}
        <div className="lg:my-10 md:my-7 my-3">
          <p className="text-3xl lg:text-8xl md:text-6xl my-2 font-bold font-main">
            Crafted with{" "}
            <span className="text-transparent bg-linear-[80deg] from-orange-600 to-orange-700 via-orange-200 bg-clip-text">
              Passion
            </span>
          </p>
          <p className="text-3xl lg:text-8xl md:text-6xl my-2 font-bold font-main">
            Delivered with{" "}
            <span className="text-transparent bg-linear-[140deg] from-orange-600 to-orange-700 via-orange-200 bg-clip-text">
              Love
            </span>
          </p>
        </div>

        {/* paragraph */}
        <p className="text-sm md:text-lg text-textSecClr dark:text-textSecClrDark lg:w-3/5 w-4/5 text-center ">
          Wood-fired artisan pizzas made with the freshest ingredients. From
          classic favorites to chef's specials, every slice tells a story.
        </p>

        {/* buttons */}
        <div className="my-5 md:my-15 flex items-center flex-col md:flex-row space-y-2 md:space-y-0">
          <button className="capitalize text-sm  md:text-base bg-linear-to-r from-orange-800 to-orange-500 text-white dark:text-black  mx-4 px-15 py-2 md:py-4 rounded-full cursor-pointer flex items-center space-x-3 hover:text-black dark:hover:text-white duration-400">
            <Telescope size={20} /> <span> Explore our menu</span>
          </button>
          <button className="capitalize text-sm md:text-base border border-secBgc/50 dark:border-mainBgc/50  text-textClr dark:text-textClrDark  mx-4 px-15 py-2 md:py-4 rounded-full cursor-pointer flex items-center space-x-3 hover:bg-linear-to-r hover:text-orange-500 duration-300 hover:border-orange-500">
            <Sparkles size={20} /> <span>build your own</span>
          </button>
        </div>

        {/* badges */}
        <div className="flex flex-wrap justify-between w-4/5 lg:w-3/5">
          <div className="my-1.5 md:my-3 w-full md:w-1/2 lg:w-1/4 px-1">
            <div className="text-xs md:text-base px-3 lg:px-3  py-1.5 bg-cyan-500/20 text-cyan-500 rounded-full flex items-center space-x-4">
              <TrendingUp />
              <span>Trendy Pizza</span>
            </div>
          </div>
          <div className="my-1.5 md:my-3 w-full md:w-1/2 lg:w-1/4 px-1">
            <div className="text-xs md:text-base px-3 lg:px-3  py-1.5 bg-green-500/20 text-green-500 rounded-full flex items-center space-x-4">
              <Award /> <span>Best Sellers</span>
            </div>
          </div>
          <div className="my-1.5 md:my-3 w-full md:w-1/2 lg:w-1/4 px-1">
            <div className="text-xs md:text-base px-3 lg:px-3  py-1.5 bg-indigo-500/20 text-indigo-500 rounded-full flex items-center space-x-4">
              <ChefHat /> <span>Professional Makers</span>
            </div>
          </div>
          <div className="my-1.5 md:my-3 w-full md:w-1/2 lg:w-1/4 px-1">
            <div className="text-xs md:text-base px-3 lg:px-3  py-1.5 bg-amber-500/20 text-amber-500 rounded-full flex items-center space-x-4">
              <HeartPlus /> <span>Healthy ingredients</span>
            </div>
          </div>
        </div>

        {/* stats */}
        <div className="my-5 md:my-20 flex justify-around flex-wrap space-y-5 w-4/5 lg:w-3/5">
          <div className="flex items-center space-x-5 text-start ">
            <div className="bg-red-500/20 text-red-500 p-3 rounded-full ">
              <ClockCheck size={20} className=" " />
            </div>
            <div>
              <p className="text-sm md:text-2xl font-bold">25 min</p>
              <p className="text-sm">Fast Delivery</p>
            </div>
          </div>
          <div className="flex items-center space-x-5 text-start ">
            <div className="bg-yellow-500/20 text-yellow-500 p-3 rounded-full ">
              <Award size={20} className=" " />
            </div>
            <div>
              <p className="text-sm md:text-2xl font-bold">4.9 Rating</p>
              <p className="text-sm">2K+ Reviews</p>
            </div>
          </div>
          <div className="flex items-center space-x-5 text-start ">
            <div className="bg-emerald-500/20 text-emerald-500 p-3 rounded-full ">
              <Truck size={20} className=" " />
            </div>
            <div>
              <p className="text-sm md:text-2xl font-bold">Free Delivery</p>
              <p className="text-sm">Orders $25+</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
