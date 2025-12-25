import React from "react";

export default function Categories({ uniqueCategories }) {
  return (
    <>
      <div className="mt-20 flex justify-center flex-wrap space-y-4 ">
        <button className="mx-2 text-xs md:text-base rounded-full md:px-8 px-6 py-2 bg-orange-700 hover:bg-transparent border border-orange-700 hover:ring-3 hover:ring-orange-700 ring-offset-mainBgc dark:ring-offset-mainBgcDark hover:ring-offset-3 cursor-pointer duration-400  ">
          All
        </button>
        {uniqueCategories?.map((category) => {
          return (
            <button className="mx-2 text-xs md:text-base rounded-full md:px-8 px-6 py-2 md:h-12 h-10 bg-orange-700 hover:bg-transparent border border-orange-700 hover:ring-3 hover:ring-orange-700 ring-offset-mainBgc dark:ring-offset-mainBgcDark hover:ring-offset-3 cursor-pointer duration-400  ">
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
}
