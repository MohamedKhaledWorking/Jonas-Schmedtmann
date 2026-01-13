import React from "react";

export default function GuestDetailsHeader() {
  return (
    <>
      <div className="flex items-center space-x-5 py-5 ">
        <div className="size-25 rounded-full overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg"
            alt="userImage"
            className="w-full h-full object-cover "
          />
        </div>
        <div className="space-y-3">
          <h1 className="font-bold text-2xl  capitalize">mohamed khaled</h1>
          <div className="flex items-center space-x-3 text-sm ">
            <p className="text-amber-300 bg-amber-300/30 border border-amber-300 px-3 capitalize py-2 rounded-xl w-fit text-xs">
              golden guest
            </p>
            <p className="text-textSecClr ">since 2022</p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/3 px-2">
        <div className="border lightBorder p-5 text-sm text-textSecClr rounded-2xl">
            <p>life time value</p>
            <p className="text-xl font-bold text-textMainClr">$14,500</p>
        </div>
        </div>
        <div className="w-1/3 px-2">
        <div className="border lightBorder p-5 text-sm text-textSecClr rounded-2xl">
            <p>life time value</p>
            <p className="text-xl font-bold text-textMainClr">$14,500</p>
        </div>
        </div>
        <div className="w-1/3 px-2">
        <div className="border lightBorder p-5 text-sm text-textSecClr rounded-2xl">
            <p>life time value</p>
            <p className="text-xl font-bold text-textMainClr">$14,500</p>
        </div>
        </div>
      </div>
    </>
  );
}
