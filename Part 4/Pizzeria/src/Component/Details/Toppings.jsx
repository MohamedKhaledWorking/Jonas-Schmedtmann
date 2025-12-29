import React from "react";
import Ingredients from "./Ingredients.jsx";
import Topping from "./Topping.jsx";

export default function Toppings() {
  const Toppings = [
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
    <>
      <p className="font-main text-xl font-bold my-8">Extra Toppings</p>
      <ul className=" my-3 flex flex-wrap items-center space-y-4 ">
        {Toppings?.map((ingredient, idx) => {
          return (
            <Topping
              name={ingredient?.name}
              price={ingredient?.price}
              key={idx}
            />
          );
        })}
      </ul>
    </>
  );
}
