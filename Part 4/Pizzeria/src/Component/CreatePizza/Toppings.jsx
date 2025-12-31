import { Donut } from "lucide-react";
import React from "react";
import { useCreatePizza } from "../../Context/CreatePizzaContext.jsx";

export default function Toppings() {
  const { dispatch, toppings } = useCreatePizza();
  const toppingPrice = toppings?.reduce((acc, curr) => acc + curr.price, 0);
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

  function handleToggle(idx) {
    const isSelected = toppings?.find((topping) => topping?.id == idx);

    if (isSelected) {
      dispatch({ type: "remove/toppings", payload: idx });
    } else {
      dispatch({
        type: "set/toppings",
        payload: {
          id: idx,
          name: ingredients[idx]?.name,
          price: ingredients[idx]?.price,
        },
      });
    }
  }
  return (
    <div className="my-8 p-8 pb-0 bg-secBgc dark:bg-secBgcDark rounded-2xl border border-textClr/20 dark:border-textSEcClrDark/20">
      <div className="flex justify-between mb-8">
        <div className="flex space-x-3 items-center">
          <Donut className="text-orange-700" />
          <p className="text-lg font-bold font-main">Add Toppings</p>
        </div>
        <p className="text-orange-700 font-bold text-xl">${toppingPrice}</p>
      </div>
      <ul className=" my-3 flex flex-wrap items-center space-y-4 ">
        {ingredients?.map((ingredient, idx) => {
          const isSelected = toppings?.find((topping) => topping?.id == idx);
          return (
            <li className="pe-4 w-1/2 md:w-1/4" key={idx}>
              <div
                onClick={() => handleToggle(idx)}
                className={`border flex justify-between items-center  px-3 py-3 md:px-4 md:py-4 rounded-2xl cursor-pointer hover:border-orange-700 duration-400 text-xs
                  ${
                    isSelected
                      ? "border-orange-700 text-orange-700"
                      : "border-textClr dark:border-textClr"
                  }`}
              >
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
