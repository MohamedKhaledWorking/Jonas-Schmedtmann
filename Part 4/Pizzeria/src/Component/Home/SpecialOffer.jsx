import React from "react";
import HeaderIcon from "../../UI/HeaderIcon.jsx";
import { Percent, Timer } from "lucide-react";

export default function SpecialOffer() {
  return (
    <div className="bg-mainBgc dark:bg-mainBgcDark text-textClr dark:text-textClrDark py-10 ">
      <div className="container mx-auto ">
        <div className="flex flex-col justify-center items-center">
          <HeaderIcon
            bgColor={"rose-600/10"}
            textColor={"rose-600"}
            icon={<Percent />}
            text={"Limited Time"}
          />
          <p className="text-4xl font-bold my-6 font-main">Special Offers</p>
          <p className="text-textSecClr dark:text-textSecClrDark text-center px">
            Don't miss out on these amazing deals. Grab them before they're
            gone!
          </p>
        </div>

        <div className="my-8 flex flex-wrap ">
          <div className="w-full md:w-1/2 lg:w-1/3 px-2 my-7 ">
            <div className="rounded-4xl w-full h-80 relative overflow-hidden ">
              <div className="absolute inset-0 bg-linear-to-l from-orange-500/50 to-red-500/50 z-2"></div>
              <div className="absolute inset-0 z-1">
                <img
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80"
                  alt="asdf"
                />
              </div>
              <div className="absolute inset-0 z-3 flex flex-col justify-between px-12 py-8">
                <div className="bg-white/30 backdrop-blur-lg p-4 rounded-2xl w-fit">
                  <Timer />
                </div>
                <div>
                  <p className="text-3xl font-bold font-main">Happy Hour</p>
                  <p className="my-1 text-lg">Get 30% off on all pizzas</p>
                  <p className="text-gray-300 text-sm">4PM - 7PM Daily</p>
                </div>
                <p className="bg-white/30 backdrop-blur-lg p-4 rounded-2xl w-fit">
                  HAPPY30
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-2 my-7">
            <div className="rounded-4xl w-full h-80 relative overflow-hidden ">
              <div className="absolute inset-0 bg-linear-to-r from-orange-500/50 to-red-500/50 z-2"></div>
              <div className="absolute inset-0 z-1">
                <img
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80"
                  alt="asdf"
                />
              </div>
              <div className="absolute inset-0 z-3 flex flex-col justify-between px-12 py-8">
                <div className="bg-white/30 backdrop-blur-lg p-4 rounded-2xl w-fit">
                  <Timer />
                </div>
                <div>
                  <p className="text-3xl font-bold font-main">Happy Hour</p>
                  <p className="my-1 text-lg">Get 30% off on all pizzas</p>
                  <p className="text-gray-300 text-sm">4PM - 7PM Daily</p>
                </div>
                <p className="bg-white/30 backdrop-blur-lg p-4 rounded-2xl w-fit">
                  HAPPY30
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-2 my-7">
            <div className="rounded-4xl w-full h-80 relative overflow-hidden ">
              <div className="absolute inset-0 bg-linear-to-b from-orange-500/50 to-red-500/50 z-2"></div>
              <div className="absolute inset-0 z-1">
                <img
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80"
                  alt="asdf"
                />
              </div>
              <div className="absolute inset-0 z-3 flex flex-col justify-between px-12 py-8">
                <div className="bg-white/30 backdrop-blur-lg p-4 rounded-2xl w-fit">
                  <Timer />
                </div>
                <div>
                  <p className="text-3xl font-bold font-main">Happy Hour</p>
                  <p className="my-1 text-lg">Get 30% off on all pizzas</p>
                  <p className="text-gray-300 text-sm">4PM - 7PM Daily</p>
                </div>
                <p className="bg-white/30 backdrop-blur-lg p-4 rounded-2xl w-fit">
                  HAPPY30
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
