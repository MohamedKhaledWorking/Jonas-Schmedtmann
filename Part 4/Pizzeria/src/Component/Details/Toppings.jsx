import React, { useState } from "react";
import Ingredients from "./Ingredients.jsx";
import Topping from "./Topping.jsx";

export default function Toppings({ extraToppings, setExtraToppings }) {
  const Toppings = [
    {
      id: 1,
      name: "Extra Mozzarella",
      price: 2.5,
    },
    {
      id: 2,
      name: "Parmesan",
      price: 2.0,
    },
    {
      id: 3,
      name: "Gorgonzola",
      price: 3.0,
    },
    {
      id: 4,
      name: "Pepperoni",
      price: 3.0,
    },
    {
      id: 5,
      name: "Italian Sausage",
      price: 3.5,
    },
    {
      id: 6,
      name: "Bacon",
      price: 3.0,
    },
    {
      id: 7,
      name: "Mushrooms",
      price: 1.5,
    },
    {
      id: 8,
      name: "Bell Peppers",
      price: 1.5,
    },
    {
      id: 9,
      name: "Olives",
      price: 1.5,
    },
    {
      id: 10,
      name: "Jalapeños",
      price: 1.5,
    },
    {
      id: 11,
      name: "Truffle Oil",
      price: 4.0,
    },
    {
      id: 12,
      name: "Hot Honey",
      price: 2.0,
    },
  ];

  function handleAddingTopping(id) {
    const newTopping = Toppings?.find((topping) => topping.id == id);
    const isExist = extraToppings?.find((topping) => topping.id == id);
    if (!isExist) {
      setExtraToppings([...extraToppings, newTopping]);
    } else {
      setExtraToppings((extraToppings) =>
        extraToppings.filter((topping) => topping.id != id)
      );
    }
  }
  return (
    <>
      <p className="font-main text-xl font-bold my-8">Extra Toppings</p>
      <ul className=" my-3 flex flex-wrap items-center space-y-4 ">
        {Toppings?.map((topping, idx) => {
          return (
            <Topping
              id={topping?.id}
              key={topping?.id}
              name={topping?.name}
              price={topping?.price}
              isSelected={extraToppings.find(
                (extraTopping) => extraTopping?.id == topping?.id
              )}
              onAddingTopping={handleAddingTopping}
            />
          );
        })}
      </ul>
    </>
  );
}
