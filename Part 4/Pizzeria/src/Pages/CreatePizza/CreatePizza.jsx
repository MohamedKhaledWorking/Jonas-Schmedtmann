import React from "react";
import Header from "../../Component/CreatePizza/Header.jsx";
import Name from "../../Component/CreatePizza/Name.jsx";
import Size from "../../Component/CreatePizza/Size.jsx";
import Crust from "../../Component/CreatePizza/Crust.jsx";
import Sauce from "../../Component/CreatePizza/Sauce.jsx";
import Cheese from "../../Component/CreatePizza/Cheese.jsx";
import Toppings from "../../Component/CreatePizza/Toppings.jsx";
import Spicy from "../../Component/CreatePizza/Spicy.jsx";
import Instructions from "../../Component/CreatePizza/Instructions.jsx";
import Summery from "../../Component/CreatePizza/Summery.jsx";

export default function CreatePizza() {
  return (
    <section className="my-30 bg-mainBgc dark:bg-mainBgcDark text-textClr dark:text-textClrDark capitalize">
      <div className="container mx-auto">
        <Header />
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-8/12 w-full px-4">
            <Name />
            <Size />
            <Crust />
            <Sauce />
            <Cheese />
            <Toppings />
            <Spicy />
            <Instructions />
          </div>
          <div className="lg:w-4/12 w-full  px-4 lg-px-0 relative">
            <Summery />
          </div>
        </div>
      </div>
    </section>
  );
}
