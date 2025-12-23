import { EvCharger, Flame, Star, Timer, Zap } from "lucide-react";
import React, { useState } from "react";

export default function DetailsSlider({ isSpicy }) {
  const [mainUrl, setMainUrl] = useState("");

  return (
    <div className="px-4 md:px-12 w-full lg:w-1/2">
      <div className="w-full h-[60vh] lg:h-[50vh] space-y-4 ">
        <div className="w-full bg-secBgc dark:bg-secBgcDark h-full rounded-2xl overflow-hidden relative">
          {isSpicy && (
            <div className="absolute bottom-10 left-10 bg-red-500 text-white px-3 py-2 rounded-full text-sm flex space-x-1 items-center">
              <Flame className="h-4 w-4" />
              <p>spicy</p>
            </div>
          )}

          <img src={mainUrl} alt="sdf" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="my-10 flex space-x-4 flex-wrap space-y-4 justify-center lg:justify-start">
        <div className="size-30 rounded-full overflow-hidden cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=1200&q=80"
            alt="df"
            className="w-full h-full object-cover"
            onClick={(e) => setMainUrl(e.target.src)}
          />
        </div>
        <div className="size-30 rounded-full overflow-hidden cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80"
            alt="df"
            className="w-full h-full object-cover"
            onClick={(e) => setMainUrl(e.target.src)}
          />
        </div>
        <div className="size-30 rounded-full overflow-hidden cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80"
            alt="df"
            className="w-full h-full object-cover"
            onClick={(e) => setMainUrl(e.target.src)}
          />
        </div>
        <div className="size-30 rounded-full overflow-hidden cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80"
            alt="df"
            className="w-full h-full object-cover"
            onClick={(e) => setMainUrl(e.target.src)}
          />
        </div>
      </div>
      <div className="flex flex-wrap space-y-4 md:space-y-0">
        <div className="pe-4 w-full md:w-1/3 ">
          <div className="px-3 py-4 flex items-center border border-orange-700/20 bg-orange-700/20 rounded-2xl space-x-4">
            <EvCharger />
            <div>
              <p className="font-bold font-main">850</p>
              <p className="text-sm text-textSecClr">Calories</p>
            </div>
          </div>
        </div>
        <div className="pe-4 w-full md:w-1/3 ">
          <div className="px-3 py-4 flex items-center border border-cyan-700/20 bg-cyan-700/20 rounded-2xl space-x-4">
            <Zap />
            <div>
              <p className="font-bold font-main">23g</p>
              <p className="text-sm text-textSecClr">Protein</p>
            </div>
          </div>
        </div>
        <div className="pe-4 w-full md:w-1/3 ">
          <div className="px-3 py-4 flex items-center border border-emerald-700/20 bg-emerald-700/20 rounded-2xl space-x-4">
            <Timer />
            <div>
              <p className="font-bold font-main">23 - 30</p>
              <p className="text-sm text-textSecClr">min</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
