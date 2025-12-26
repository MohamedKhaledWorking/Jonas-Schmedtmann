import React, { useState } from "react";
import NoTrackFound from "../../Component/Track/NoTrackFound.jsx";
import TrackFound from "../../Component/Track/TrackFound.jsx";
import toast from "react-hot-toast";
import { getOrder } from "../../Services/apiRestaurant.js";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";

export default function Track() {
  const [query, setQuery] = useState("");
  const navigateTo = useNavigate();

  function handleSearch() {
    if (!query) {
      return toast.error("Please enter a valid order id");
    }
    navigateTo(`/track/${query}`);
  }
  return (
    <section className="my-30 bg-mainBgc dark:bg-mainBgcDark text-textClr dark:text-textClrDark capitalize ">
      <div className="container mx-auto text-center py-20 md:px-4">
        <p className="text-4xl font-bold my-4 font-main">Track Your Order</p>
        <p className="text-textSecClr dark:text-textSecClrDark">
          Enter your order number to see the real-time status
        </p>
        <div className="my-10 flex items-center justify-center flex-col lg:flex-row lg:w-4xl md:w-2xl md:mx-auto  space-y-4 md:space-y-6 lg:space-y-0">
          <div className="md:pe-5 lg:w-8/12 w-10/12 lg:w-6/12 md:w-10/12">
            <input
              type="text"
              placeholder="Order Number"
              onChange={(e) => setQuery(e.target.value)}
              className="px-4 py-3 rounded-xl border border-orange-700/20 bg-transparent focus:outline-none w-full 
             focus:ring-3 ring-orange-700 ring-offset-5 ring-offset-mainBgc dark:ring-offset-mainBgcDark focus:border-orange-600 duration-300"
            />
          </div>
          <button
            onClick={handleSearch}
            className="block w-10/12 lg:w-2/12 md:w-10/12 px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 duration-300   hover:ring-3 ring-orange-700 ring-offset-5 ring-offset-mainBgc dark:ring-offset-mainBgcDark text-sm"
          >
            Track Order
          </button>
        </div>
        <div className="my-10 bg-secBgc dark:bg-secBgcDark p-4 py-12  rounded-3xl w-10/12 md:w-9/12 lg:w-1/2 mx-auto px-10">
          {<Outlet />}
        </div>
      </div>
    </section>
  );
}
