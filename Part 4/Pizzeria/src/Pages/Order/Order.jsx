import { CircleCheckBig } from "lucide-react";
import React, { useEffect } from "react";
import OrderHeader from "../../Component/Order/OrderHeader.jsx";
import OrderFooter from "../../Component/Order/OrderFooter.jsx";
import Orders from "../../Component/Order/Orders.jsx";
import Buttons from "../../Component/Order/Buttons.jsx";
import { getOrder } from "../../Services/apiRestaurant.js";
import { useDispatch } from "react-redux";
import { clearItems } from "../../Features/cartSlice.js";

export default function Order() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearItems());
  });
  return (
    <div className="py-30 ">
      <div className="container mx-auto px-4 ">
        <div className="p-5 rounded-full  w-fit mx-auto  bg-emerald-700/30  text-emerald-500">
          <CircleCheckBig size={50} />
        </div>
        <p className="text-4xl font-bold my-4 font-main text-center ">
          Thank you for your order
        </p>
        <p className="text-textSecClr dark:text-textSecClrDark text-xl text-center">
          Your order has been confirmed. We're preparing it now.
        </p>
        <div className=" lg:w-1/2 mx-auto my-10 bg-secBgc dark:bg-secBgcDark p-4 py-12  rounded-3xl px-6">
          <OrderHeader />
          <Orders />
          <OrderFooter />
        </div>
        <Buttons />
      </div>
    </div>
  );
}

export async function orderLoader({ params }) {
  const data = await getOrder(params.id);
  return data;
}
