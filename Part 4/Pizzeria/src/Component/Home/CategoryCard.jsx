import React from "react";

export default function CategoryCard({ category }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 my-4 h-[500px] px-4  overflow-hidden cursor-pointer  rounded-4xl">
      <div
        className={`relative w-full h-full  rounded-4xl overflow-hidden group`}
      >
        <div className="absolute inset-0 bg-black/60 z-9">
          <img
            src={category?.image}
            alt={category?.description + " image"}
            className="w-full h-full object-cover group-hover:scale-110 duration-300"
          />
        </div>
        <div className="absolute inset-0 bg-black/60 z-10 "></div>
        <div className="absolute inset-0 z-20 flex p-10 justify-end flex-col space-y-4">
          <p className="text-orange-500">{category?.icon}</p>
          <p className="font-main font-bold  text-xl text-white">
            {category?.category}
          </p>
          <p className="text-gray-400">{category?.description}</p>
        </div>
      </div>
    </div>
  );
}
