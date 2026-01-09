import React from "react";

export default function Logo({ showSidebar }) {
  return (
    <div
      className={`w-full border-b lightBorder pb-4 justify-center flex items-center  mb-2`}
    >
      <div className="size-12 rounded-xl overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg"
          alt="logo image"
          className="w-full h-full object-cover"
        />
      </div>
      <p className={`font-bold text-xl ms-3 ${showSidebar ? "" : "hidden"}`}>
        luxehotel
      </p>
    </div>
  );
}
