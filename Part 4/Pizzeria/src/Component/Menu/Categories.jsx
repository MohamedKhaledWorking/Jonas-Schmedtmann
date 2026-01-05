import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../Features/menuSlice.js";

export default function Categories({ uniqueCategories }) {
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state) => state.menu);
  return (
    <>
      <div className="mt-20 flex justify-center flex-wrap space-y-4 ">
        <button
          onClick={() => dispatch(setCategory("all"))}
          className={`mx-2 text-xs md:text-base rounded-full md:px-8 px-6 py-2 bg-orange-700 hover:bg-transparent border border-orange-700 
          hover:ring-3 hover:ring-orange-700 ring-offset-mainBgc dark:ring-offset-mainBgcDark hover:ring-offset-3 cursor-pointer duration-400  ${
            selectedCategory == "all"
              ? "bg-transparent text-orange-700 ring-1 ring-orange-700 ring-offset-mainBgc dark:ring-offset-mainBgcDark ring-offset-5"
              : ""
          }`}
        >
          All
        </button>
        {uniqueCategories?.map((category, idx) => {
          return (
            <button
              key={idx}
              onClick={() => dispatch(setCategory(category))}
              className={`mx-2 text-xs md:text-base rounded-full md:px-8 px-6 py-2 md:h-12 h-10 bg-orange-700 hover:bg-transparent border border-orange-700 
              hover:ring-3 hover:ring-orange-700 ring-offset-mainBgc dark:ring-offset-mainBgcDark hover:ring-offset-3 cursor-pointer duration-400 ${
                selectedCategory == category
                  ? "bg-transparent text-orange-700 ring-1 ring-orange-700 ring-offset-mainBgc dark:ring-offset-mainBgcDark ring-offset-5"
                  : ""
              } `}
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
}
