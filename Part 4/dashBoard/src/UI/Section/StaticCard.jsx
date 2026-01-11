import React from "react";

export default function StaticCard({
  title = "",
  value = 0,
  icon = "",
  width = "w-full md:w-1/2 lg:w-1/4 ",
}) {
  return (
    <>
      <div className={`pe-4  ${width}`}>
        <div className="border lightBorder rounded-3xl p-7 py-5 ">
          <div className="flex justify-between space-y-2">
            <h1 className="text-base font-bold text-textSecClr">{title}</h1>
            {icon}
          </div>
          <p className="text-4xl font-bold ">{value}</p>
        </div>
      </div>
    </>
  );
}
