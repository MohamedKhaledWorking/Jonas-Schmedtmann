import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import Contact from "../../Component/CheckOut/Contact.jsx";
import Address from "../../Component/CheckOut/Address.jsx";
import PaymentMethod from "../../Component/CheckOut/PaymentMethod.jsx";
import Priority from "../../Component/CheckOut/Priority.jsx";
import { Form, redirect, useNavigation } from "react-router-dom";
import { buildOrderObject, validateInputs } from "../../Utils/helpers.js";
import { createOrder } from "../../Services/apiRestaurant.js";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import Summery from "../../Component/CheckOut/Summery.jsx";
import { useTotalPrice } from "../../Hooks/useTotalPrice.js";

export default function CheckOut() {
  const { state } = useNavigation();
  const [isCashed, setIsCashed] = useState(true);
  const [isPriority, setIsPriority] = useState(false);
  const items = useSelector((store) => store.cart.cart);
  const { total: fullPrice } = useTotalPrice(isPriority);

  return (
    <section className="my-30  bg-main dark:bg-mainBgcDark text-textClr dark:text-textClrDark capitalize text-base">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 text-textSecClr dark:text-textSEcClrDark my-6 hover:scale-105 duration-500 cursor-pointer hover:text-orange-700">
          <ArrowLeft size={20} />
          <p>back to cart</p>
        </div>
        <p className="font-bold font-main text-4xl mb-8">check Out</p>
        <Form className="flex flex-col lg:flex-row" method="POST">
          <div className="pe-4 w-full lg:w-9/12">
            <Contact />
            <Address />
            <PaymentMethod isCashed={isCashed} setIsCashed={setIsCashed} />
            <Priority isPriority={isPriority} setIsPriority={setIsPriority} />
            <input type="hidden" name="paymentMethod" value={isCashed} />
            <input type="hidden" name="isPriority" value={isPriority} />
            <input type="hidden" name="items" value={JSON.stringify(items)} />
            <input type="hidden" name="fullPrice" value={fullPrice} />
          </div>
          <Summery state={state} isPriority={isPriority} />
        </Form>
      </div>
    </section>
  );
}

export async function orderAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const isValid = validateInputs(data);

  if (Object.keys(isValid).length > 0) {
    return toast.error(
      Object.values(isValid)
        .map((err) => `• ${err}`)
        .join("\n")
    );
  }


  const id = Math.floor(Math.random() * 10000000000).toString();
  const order = buildOrderObject(id, data);
  await createOrder(order);
  return redirect(`/order/${id}`);
}
