import { Flame, Star } from "lucide-react";
import React, { useState } from "react";

export default function DetailsContent({ isSpicy, setIsSpicy }) {
  const ingredients = [
    {
      name: "Extra Mozzarella",
      price: 2.5,
    },
    {
      name: "Parmesan",
      price: 2.0,
    },
    {
      name: "Gorgonzola",
      price: 3.0,
    },
    {
      name: "Pepperoni",
      price: 3.0,
    },
    {
      name: "Italian Sausage",
      price: 3.5,
    },
    {
      name: "Bacon",
      price: 3.0,
    },
    {
      name: "Mushrooms",
      price: 1.5,
    },
    {
      name: "Bell Peppers",
      price: 1.5,
    },
    {
      name: "Olives",
      price: 1.5,
    },
    {
      name: "Jalapeños",
      price: 1.5,
    },
    {
      name: "Truffle Oil",
      price: 4.0,
    },
    {
      name: "Hot Honey",
      price: 2.0,
    },
  ];
  const [selectedSize, setSelectedSize] = useState("l");
  return (
    <div className="px-4 md:px-12 w-full lg:w-1/2  ">
      <div className="flex justify-between items-center flex-wrap  mb-4">
        <p className="text-4xl font-bold my-4 font-main ">Pepperoni Supreme</p>
        <div className="px-4 py-2 rounded-full text-white bg-white/10 backdrop-blur ">
          meat lovers
        </div>
      </div>
      <div className="flex items-center space-x-2 text-sm">
        <Star className="text-yellow-500 fill-yellow-500 w-4 h-4" />
        <p className="font-bold">4.8</p>
        <p className="text-textSecClr dark:text-textSecClrDark">
          (1.2k) Reviews
        </p>
      </div>
      <p className="my-6 text-textSecClr dark:text-textSecClrDark">
        Loaded with premium pepperoni, mozzarella, and our signature tomato
        sauce
      </p>
      <p className="font-main text-xl mt-4 font-bold">Ingredients</p>
      <div className="flex flex-wrap space-x-2 my-2 text-sm">
        <div className="px-4 py-2 rounded-full  text-textClr dark:text-textClrDark border border-textSecClr dark:border-textSecClrDark my-2">
          Pepperoni
        </div>
        <div className="px-4 py-2 rounded-full  text-textClr dark:text-textClrDark border border-textSecClr dark:border-textSecClrDark my-2">
          Mozzarella
        </div>
        <div className="px-4 py-2 rounded-full  text-textClr dark:text-textClrDark border border-textSecClr dark:border-textSecClrDark my-2">
          Tomato Sauce
        </div>
        <div className="px-4 py-2 rounded-full  text-textClr dark:text-textClrDark border border-textSecClr dark:border-textSecClrDark my-2">
          Basil
        </div>
      </div>
      <p className="font-main text-xl mt-4 font-bold">Choose Size</p>
      <div className="flex flex-wrap my-8 space-y-3">
        <div className="px-2 w-full md:w-1/3">
          <div
          onClick={() => setSelectedSize("s")}
            className={`w-full py-3 border text-center rounded-2xl cursor-pointer hover:border-orange-700 duration-400 ${
              selectedSize.toUpperCase() == "S"
                ? "border-orange-700"
                : "border-textClr dark:border-textClr"
            }`}
          >
            <p className="text-2xl font-bold font-main">S</p>
            <p className="text-textSecClr dark:textSecClrDark text-sm my-1">
              small
            </p>
            <p>14 inc</p>
          </div>
        </div>
        <div className="px-2 w-full md:w-1/3">
          <div
          onClick={() => setSelectedSize("m")}
            className={`w-full py-3 border text-center rounded-2xl cursor-pointer hover:border-orange-700 duration-400 ${
              selectedSize.toUpperCase() == "M"
                ? "border-orange-700"
                : "border-textClr dark:border-textClr"
            }`}
          >
            <p className="text-2xl font-bold font-main">m</p>
            <p className="text-textSecClr dark:textSecClrDark text-sm my-1">
              medium
            </p>
            <p>18 inc</p>
          </div>
        </div>
        <div className="px-2 w-full md:w-1/3">
          <div
          onClick={() => setSelectedSize("l")}
            className={`w-full py-3 border text-center rounded-2xl cursor-pointer hover:border-orange-700 duration-400 ${
              selectedSize.toUpperCase() == "L"
                ? "border-orange-700"
                : "border-textClr dark:border-textClr"
            }`}
          >
            <p className="text-2xl font-bold font-main">l</p>
            <p className="text-textSecClr dark:textSecClrDark text-sm my-1">
              large
            </p>
            <p>20 inc</p>
          </div>
        </div>
      </div>
      <div
        className={`my-4  ${
          isSpicy
            ? "bg-orange-700/20 border border-orange-700/50"
            : "bg-orange-700/10 border border-orange-700/40"
        } p-4 rounded-xl flex items-center justify-between`}
      >
        <div className="flex space-x-4 items-center">
          <div className="flex justify-center items-center p-3 bg-red-600/15 text-red-600 rounded-full">
            <Flame size={15} />
          </div>
          <div>
            <p className="text-textClr dark:text-textClrDark font-bold font-main">
              Make it Spicy
            </p>
            <p className="text-textSecClr">Add chili flakes & hot sauce </p>
          </div>
        </div>
        <input
          type="checkbox"
          className="toggle border-red-700/50 checked:bg-red-700 "
          onClick={() => setIsSpicy((s) => !s)}
        />
      </div>
      <p className="font-main text-xl font-bold my-8">Extra Toppings</p>
      <ul className=" my-3 flex flex-wrap items-center space-y-4 ">
        {ingredients?.map((ingredient, idx) => {
          return (
            <li className="pe-4 w-1/2 ">
              <div className="border border-textClr dark:border-textClr flex justify-between items-center  px-3 py-3 md:px-4 md:py-4 rounded-2xl cursor-pointer hover:border-orange-700 duration-400 text-xs">
                <p>{ingredient?.name}</p>
                <p>+${ingredient?.price}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="my-4 bg-red-700/5 border border-orange-700/30 p-4 rounded-xl">
        <div className="flex items-center justify-between">
          <p className="text-textClr dark:text-textClrDark font-bold font-main">
            Extra Toppings
          </p>
          <p className="text-orange-700"> +$4.50</p>
        </div>
        <div className="flex flex-wrap my-4">
          <div className="pe-2 my-2">
            <div className="border border-textClr dark:border-textClr rounded-2xl hover:border-orange-700/40 duration-400 flex items-center space-x-2 py-2 px-5 text-xs md:text-sm">
              <p className="text-textClr dark:text-textClrDark">Jalapeños</p>
              <p className="text-textSecCl">+$1.50</p>
            </div>
          </div>
          <div className="pe-2 my-2">
            <div className="border border-textClr dark:border-textClr rounded-2xl hover:border-orange-700/40 duration-400 flex items-center space-x-2 py-2 px-5 text-xs md:text-sm">
              <p className="text-textClr dark:text-textClrDark">Jalapeños</p>
              <p className="text-textSecCl">+$1.50</p>
            </div>
          </div>
          <div className="pe-2 my-2">
            <div className="border border-textClr dark:border-textClr rounded-2xl hover:border-orange-700/40 duration-400 flex items-center space-x-2 py-2 px-5 text-xs md:text-sm">
              <p className="text-textClr dark:text-textClrDark">Jalapeños</p>
              <p className="text-textSecCl">+$1.50</p>
            </div>
          </div>
        </div>
      </div>
      <label id="instructions" className="font-main text-xl font-bold my-8">
        special instructions
      </label>
      <textarea
        name=""
        id="instructions"
        className="border border-textClr dark:border-textClr rounded-2xl p-4 my-4 w-full text-sm  duration-400 focus:ring-orange-700/50 focus:ring-3
       focus:ring-offset-4 focus:ring-offset-orange-700 text-textClr dark:text-textClrDark focus:border-orange-700 outline-none"
        placeholder="add any special instructions..."
      ></textarea>
      <div className="my-5 flex flex-wrap space-y-4 md:space-y-0">
        <div className="pe-4 w-full md:w-4/12 ">
          <div className="flex justify-center items-center space-x-2 bg-gray-900/10 dark:bg-gray-100/14 px-4 py-3 rounded-2xl">
            <button className="bg-mainBgc dark:bg-mainBgcDark px-5 py-2 rounded-lg cursor-pointer">
              -
            </button>
            <input
              type="text"
              className="w-20 border border-textClr dark:border-textClr rounded-lg text-center py-2"
              value={2}
            />
            <button className="bg-mainBgc dark:bg-mainBgcDark px-5 py-2 rounded-lg cursor-pointer">
              +
            </button>
          </div>
        </div>
        <div className="pe-4 w-full md:w-8/12">
          <button className="bg-orange-700 hover:bg-orange-800 duration-400 text-white px-6 py-4 rounded-2xl w-full font-main font-bold text-lg">
            Add to Cart - $19.50
          </button>
        </div>
      </div>
    </div>
  );
}
