import { LocateIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { fetchAddress, reset } from "../../Features/address.js";
import { useDispatch, useSelector } from "react-redux";

export default function Address() {
  const dispatch = useDispatch();
  const { isLoading, address } = useSelector((state) => state.address);
  function handleGetCurrentLocation(e) {
    e.preventDefault();
    dispatch(fetchAddress());
  }

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  return (
    <>
      <div className="bg-secBgc dark:bg-secBgcDark px-6 py-8 my-4 rounded-3xl">
        <div className="flex justify-between flex-col md:flex-row space-y-4">
          <p className="text-2xl font-bold font-main">Delivery Address</p>
          {!address && (
            <div className="flex items-center text-orange-700 text-sm space-x-1 cursor-pointer">
              <LocateIcon />
              <button
                disabled={isLoading}
                className="cursor-pointer"
                onClick={handleGetCurrentLocation}
              >
                {isLoading
                  ? "Getting your location..."
                  : " Select my current location"}
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-wrap w-full my-4">
          <div className="w-full pe-4 my-3">
            <label htmlFor="street">Street Address *</label>
            <input
              id="street"
              type="text"
              name="street"
              defaultValue={address?.road}
              placeholder="1234 Main St"
              className="w-full border border-textClr/50 dark:border-textClrDark/50 px-4 py-3 rounded-xl mt-2 outline-none 
                    focus:ring-2 focus:ring-orange-700 focus:ring-offset-mainBgc dark:focus:ring-offset-mainBgcDark focus:ring-offset-6 duration-400 focus:border-orange-700"
            />
          </div>
          <div className="w-full pe-4 my-3">
            <label htmlFor="Apartment">Apartment / Suite (optional)</label>
            <input
              id="Apartment"
              type="text"
              name="Apartment"
              defaultValue={address?.house_number}
              placeholder="Apartment or suite"
              className="w-full border border-textClr/50 dark:border-textClrDark/50 px-4 py-3 rounded-xl mt-2 outline-none 
                    focus:ring-2 focus:ring-orange-700 focus:ring-offset-mainBgc dark:focus:ring-offset-mainBgcDark focus:ring-offset-6 duration-400 focus:border-orange-700"
            />
          </div>

          <div className="md:w-1/2 pe-4 my-3">
            <label htmlFor="City">City *</label>
            <input
              id="City"
              type="text"
              name="city"
              defaultValue={address?.city}
              placeholder="cairo"
              className="w-full border border-textClr/50 dark:border-textClrDark/50 px-4 py-3 rounded-xl mt-2 outline-none 
                    focus:ring-2 focus:ring-orange-700 focus:ring-offset-mainBgc dark:focus:ring-offset-mainBgcDark focus:ring-offset-6 duration-400 focus:border-orange-700"
            />
          </div>
          <div className="md:w-1/2 pe-4 my-3">
            <label htmlFor="Code">Zip Code (optional)</label>
            <input
              id="Code"
              type="number"
              name="postalCode"
              defaultValue={address?.postcode}
              placeholder="12345"
              className="w-full border border-textClr/50 dark:border-textClrDark/50 px-4 py-3 rounded-xl mt-2 outline-none 
                    focus:ring-2 focus:ring-orange-700 focus:ring-offset-mainBgc dark:focus:ring-offset-mainBgcDark focus:ring-offset-6 duration-400 focus:border-orange-700"
            />
          </div>
        </div>
      </div>
    </>
  );
}
