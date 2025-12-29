import { MoveLeft } from "lucide-react";
import React, { useState } from "react";
import DetailsSlider from "../../Component/Details/DetailsSlider.jsx";
import DetailsContent from "../../Component/Details/DetailsContent.jsx";
import Related from "../../Component/Details/Related.jsx";
import { Link, useLoaderData } from "react-router-dom";
import { getPizza } from "../../Services/apiRestaurant.js";

export default function Details() {
  const [isSpicy, setIsSpicy] = useState(false);
  const pizza = useLoaderData();

  return (
    <section className="my-30 bg-mainBgc dark:bg-mainBgcDark text-textClr dark:text-textClrDark capitalize ">
      <div className="container mx-auto  ">
        <Link
          to={"/menu"}
          className="flex space-x-4 hover:text-orange-500 hover:scale-102 duration-300 cursor-pointer ps-4 md:ps-8 lg:ps-0 "
        >
          <MoveLeft />
          <p>Back to Menu</p>
        </Link>
        <div className="flex my-10 flex-wrap border-b">
          <DetailsSlider isSpicy={isSpicy} pizza={pizza} />
          <DetailsContent
            isSpicy={isSpicy}
            setIsSpicy={setIsSpicy}
            pizza={pizza}
          />
        </div>
        <Related />
      </div>
    </section>
  );
}

export async function pizzaLoader({ params }) {
  const pizza = await getPizza(params.id);
  return pizza;
}
