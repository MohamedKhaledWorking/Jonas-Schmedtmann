import { EvCharger, Flame, Timer, Zap } from "lucide-react";
import React, { useState } from "react";
import MainImage from "./MainImage.jsx";
import SliderImage from "./SliderImage.jsx";

export default function DetailsSlider({ isSpicy, pizza }) {
  const [mainUrl, setMainUrl] = useState(pizza?.image);

  return (
    <div className="px-4 md:px-12 w-full lg:w-1/2">
      <MainImage isSpicy={isSpicy} image={mainUrl} name={pizza?.name} />
      <div className="my-10 flex space-x-4 flex-wrap space-y-4 justify-center lg:justify-start">
        {pizza?.images?.map((img) => {
          return (
            <SliderImage img={img} name={pizza?.name} setMainUrl={setMainUrl} key={img}/>
          );
        })}
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
              <p className="font-bold font-main">
                {pizza?.cookingTime?.min} - {pizza?.cookingTime?.max}
              </p>
              <p className="text-sm text-textSecClr">min</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
