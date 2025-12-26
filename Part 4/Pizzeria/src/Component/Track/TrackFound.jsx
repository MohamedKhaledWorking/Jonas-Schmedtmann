import React from "react";
import { Hourglass } from "lucide-react";
import TimeLine from "./TimeLine.jsx";
import TimeLineFooter from "./TimeLineFooter.jsx";
import { getOrder } from "../../Services/apiRestaurant.js";
import { useLoaderData } from "react-router-dom";
import { formatTime } from "../../Utils/helpers.js";

export default function TrackFound() {
  const order = useLoaderData();
  return (
    <>
      {order ? (
        <>
          <div className="flex justify-between items-center text-textSecClr dark:text-textSecClrDark text-sm">
            <p> order number</p>
            <p>Estimated Arrival</p>
          </div>
          <div className="flex justify-between items-center text-xl font-bold ">
            <p>{order?.id}</p>
            <p className="text-orange-700">{formatTime(order?.arriveAt)}</p>
          </div>
          {order?.isPriority && (
            <div className="bg-orange-700/20 flex space-x-2 items-center my-5 py-3 px-4 rounded-lg">
              <Hourglass className="text-orange-700" />
              <p>Priority Delivery Active</p>
            </div>
          )}
          <p className="my-5 font-bold font-main text-start">Order Status</p>
          <TimeLine status={order?.orderStatusCode} />
          <TimeLineFooter
            user={order?.user}
            address={order?.address}
            items={order?.items}
            total={order?.totalPrice}
          />
        </>
      ) : (
        <p className="my-5 text-2xl text-orange-700 font-bold font-main">
          no order found with this id
        </p>
      )}
    </>
  );
}

export async function getOrderLoader({ params }) {
  const order = await getOrder(params?.id);
  return order;
}
