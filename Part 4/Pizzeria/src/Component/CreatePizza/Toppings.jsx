import { Donut } from "lucide-react";
import React from "react";

export default function Toppings() {
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
  return (
    <div className="my-8 p-8 pb-0 bg-secBgc dark:bg-secBgcDark rounded-2xl border border-textClr/20 dark:border-textSEcClrDark/20">
      <div className="flex space-x-3 items-center">
        <Donut className="text-orange-700" />
        <p className="text-lg font-bold font-main">Add Toppings</p>
      </div>
      <ul className=" my-3 flex flex-wrap items-center space-y-4 ">
        {ingredients?.map((ingredient, idx) => {
          return (
            <li className="pe-4 w-1/2 md:w-1/4" key={idx}>
              <div className="border border-textClr dark:border-textClr flex justify-between items-center  px-3 py-3 md:px-4 md:py-4 rounded-2xl cursor-pointer hover:border-orange-700 duration-400 text-xs">
                <p>{ingredient?.name}</p>
                <p>+${ingredient?.price}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
