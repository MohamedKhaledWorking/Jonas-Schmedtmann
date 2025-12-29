import { Flame, Star } from "lucide-react";
import React, { useState } from "react";
import Ingredients from "./Ingredients.jsx";
import Size from "./Size.jsx";
import Toppings from "./Toppings.jsx";
import Actions from "./Actions.jsx";
import Instructions from "./Instructions.jsx";
import SelectedToppings from "./SelectedToppings.jsx";
import Spicy from "./Spicy.jsx";

export default function DetailsContent({ isSpicy, setIsSpicy, pizza }) {
  const [selectedSize, setSelectedSize] = useState(pizza?.sizes[0].size);
  return (
    <div className="px-4 md:px-12 w-full lg:w-1/2  ">
      <div className="flex justify-between items-center flex-wrap  mb-4">
        <p className="text-4xl font-bold my-4 font-main ">{pizza?.name}</p>
        <div className="px-4 py-2 rounded-full text-white bg-white/10 backdrop-blur ">
          {pizza?.category}
        </div>
      </div>
      <div className="flex items-center space-x-2 text-sm">
        <Star className="text-yellow-500 fill-yellow-500 w-4 h-4" />
        <p className="font-bold">{pizza?.rating}</p>
        <p className="text-textSecClr dark:text-textSecClrDark">
          ({pizza?.reviewCount}) Reviews
        </p>
      </div>
      <p className="my-6 text-textSecClr dark:text-textSecClrDark">
        {pizza?.description}
      </p>
      <p className="font-main text-xl mt-4 font-bold">Ingredients</p>
      <div className="flex flex-wrap space-x-2 my-2 text-sm">
        {pizza?.ingredients?.map((ingredient, idx) => {
          return <Ingredients ingredient={ingredient} key={idx} />;
        })}
      </div>
      <p className="font-main text-xl mt-4 font-bold">Choose Size</p>
      <div className="flex flex-wrap my-8 space-y-3">
        {pizza?.sizes?.map((size) => {
          return (
            <Size
              setSelectedSize={setSelectedSize}
              size={size}
              key={size?.size}
              selectedSize={selectedSize}
            />
          );
        })}
      </div>
      <Spicy isSpicy={isSpicy} setIsSpicy={setIsSpicy} />
      <Toppings />
      <SelectedToppings />
      <Instructions />
      <Actions />
    </div>
  );
}
