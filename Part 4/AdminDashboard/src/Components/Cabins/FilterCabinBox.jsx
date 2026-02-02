import React from "react";

export default function FilterCabinBox({ cabins, filterByEquality }) {
  return (
    <>
      <div className="absolute border border-lightBorder p-5 w-[350px]  rounded-2xl bg-secBgc top-15 right-0 z-30">
        <div className="flex items-center justify-between">
          <p className="font-bold text-lg">filter cabins</p>
          <button>close</button>
        </div>
        <div className="my-4">
          <p className="text-textSecClr  mb-2">availability</p>
          <div className="flex flex-wrap items-center gap-2 space-y-1">
            <button
              onClick={() => filterByEquality(cabins, "status", "all")}
              className="border border-theme hover:bg-theme text-theme hover:text-white duration-300 cursor-pointer rounded-full py-1.5 px-5 text-sm"
            >
              all
            </button>
            <button
              onClick={() => filterByEquality(cabins, "status", "available")}
              className="border border-theme hover:bg-theme text-theme hover:text-white duration-300 cursor-pointer rounded-full py-1.5 px-5 text-sm"
            >
              available
            </button>
            <button
              onClick={() => filterByEquality(cabins, "status", "out_of_service")}
              className="border border-theme hover:bg-theme text-theme hover:text-white duration-300 cursor-pointer rounded-full py-1.5 px-5 text-sm"
            >
              unavailable
            </button>
            <button
              onClick={() => filterByEquality(cabins, "status", "maintenance")}
              className="border border-theme hover:bg-theme text-theme hover:text-white duration-300 cursor-pointer rounded-full py-1.5 px-5 text-sm"
            >
              maintenance
            </button>
          </div>
        </div>
        <div>
          <p className="text-textSecClr  mb-2">sort</p>
          <select className="block w-full px-3 py-2.5 border border-lightBorder  text-sm rounded focus:rounded-xl duration-400  shadow-xs bg-secBgc">
            <option>Newest</option>
            <option>price low to high</option>
            <option>price high to low</option>
            <option>capacity</option>
          </select>
        </div>
        <div className="flex gap-x-2">
          <div className="my-3 capitalize ">
            <label htmlFor="minPrice" className="text-textSecClr mb-2">
              min price
            </label>
            <input className="block w-full px-3 py-2.5 border border-lightBorder  text-sm rounded focus:rounded-xl duration-400  shadow-xs bg-secBgc mt-2" />
          </div>
          <div className="my-3 capitalize ">
            <label htmlFor="maxPrice" className="text-textSecClr mb-2">
              max price
            </label>
            <input className="block w-full px-3 py-2.5 border border-lightBorder  text-sm rounded focus:rounded-xl duration-400  shadow-xs bg-secBgc mt-2" />
          </div>
        </div>
        <div>
          <p className="text-textSecClr  mb-2">view</p>
          <select className="block w-full px-3 py-2.5 border border-lightBorder  text-sm rounded focus:rounded-xl duration-400  shadow-xs bg-secBgc">
            <option>garden</option>
            <option>nile</option>
            <option>pool</option>
            <option>beach</option>
          </select>
        </div>
        <div className="my-2">
          <label htmlFor="capacity" className="text-textSecClr  mb-2">
            capacity
          </label>
          <input
            className="block w-full px-3 py-2.5 border border-lightBorder  text-sm rounded focus:rounded-xl duration-400  shadow-xs bg-secBgc mt-2"
            id="capacity"
          />
        </div>
      </div>
    </>
  );
}
