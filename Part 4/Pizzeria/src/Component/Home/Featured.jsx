import React from "react";
import HeaderIcon from "../../UI/HeaderIcon.jsx";
import { Feather, MoveRight } from "lucide-react";
import PizzaCard from "./PizzaCard.jsx";
import { Link, useLoaderData } from "react-router-dom";

export default function Featured() {
  const { pizzas } = useLoaderData();
  return (
    <section className="bg-secBgc dark:bg-secBgcDark text-center text-textClr dark:text-textClrDark py-10">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <HeaderIcon
            bgColor={"purple-600/20"}
            textColor={"purple-600"}
            icon={<Feather />}
            text={"Limited Time"}
          />
        </div>
        <p className="text-4xl font-bold my-6 font-main">Featured Pizzas</p>
        <p className="text-textSecClr dark:text-textSecClrDark">
          Crowd favorites and chef's specials you don't want to miss
        </p>
        <Link
          to={"/menu"}
          className="text-end hover:text-orange-500 duration-300 cursor-pointer hover:scale-105 mt-8 md:mt-0 block"
        >
          <span>View All Menu</span>
          <span>
            <MoveRight className="inline mx-4 " />
          </span>
        </Link>
        <div className="flex flex-wrap ">
          {pizzas?.map((pizza) => {
            return (
              <div className="md:w-1/2 lg:w-1/4" key={pizza.id}>
                <PizzaCard pizza={pizza} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
