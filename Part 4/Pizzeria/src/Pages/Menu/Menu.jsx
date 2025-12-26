import React from "react";
import PizzaCard from "../../Component/Home/PizzaCard.jsx";
import { getPizzas } from "../../Services/apiRestaurant.js";
import { useLoaderData } from "react-router-dom";
import Categories from "../../Component/Menu/Categories.jsx";

export default function Menu() {
  const pizzas = useLoaderData();
  const uniqueCategories = [...new Set(pizzas.map((pizza) => pizza.category))];
  return (
    <>
      <div className="container mx-auto capitalize text-mainClr dark:text-mainClrDark pt-30">
        <p className="text-4xl font-bold my-2  font-main">our menu</p>
        <p className="text-textSecClr dark:text-textSecClrDark">
          Explore our handcrafted pizzas made with love and the finest
          ingredients
        </p>
        <input
          type="text"
          name="search"
          placeholder="search pizza by name or ingredients..."
          className="mt-10 border border-secBgc dark:border-secBgcDark px-6 py-4 w-xl rounded-xl placeholder:text-textSecClr dark:placeholder:text-textSecClrDark outline-none duration-300
          focus:placeholder:text-orange-700 focus:ring-2 focus:ring-orange-700 focus:ring-offset-3 focus:border-orange-700 focus:ring-offset-mainBgc dark:focus:ring-offset-mainBgcDark"
        />

        <input
          type="checkbox"
          id="search"
          className="ms-6 accent-orange-700 "
        />
        <label htmlFor="search" className="mx-3 font-main">
          available only
        </label>

        <Categories uniqueCategories={uniqueCategories} />

        <div className="my-20 flex flex-wrap">
          {pizzas?.map((pizza) => (
            <div className="w-full md:w-1/2 lg:w-1/4 px-2 " key={pizza.id}>
              <PizzaCard pizza={pizza} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function MenuLoader() {
  const pizzas = await getPizzas();
  return pizzas;
}
