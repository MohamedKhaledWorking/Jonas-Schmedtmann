import { ArrowLeft } from "lucide-react";
import React from "react";
import Contact from "../../Component/CheckOut/Contact.jsx";
import Address from "../../Component/CheckOut/Address.jsx";
import PaymentMethod from "../../Component/CheckOut/PaymentMethod.jsx";
import Priority from "../../Component/CheckOut/Priority.jsx";
import Summery from "../../Component/Cart/Summery.jsx";

export default function CheckOut() {
  return (
    <section className="my-30  bg-main dark:bg-mainBgcDark text-textClr dark:text-textClrDark capitalize">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 text-textSecClr dark:text-textSEcClrDark my-6 hover:scale-105 duration-500 cursor-pointer hover:text-orange-700">
          <ArrowLeft size={20} />
          <p>back to cart</p>
        </div>
        <p className="font-bold font-main text-4xl mb-8">check Out</p>
        <div className="flex flex-col lg:flex-row">
          <div className="pe-4 w-full ">
            <Contact />
            <Address />
            <PaymentMethod />
            <Priority />
          </div>
          <Summery />
        </div>
      </div>
    </section>
  );
}
