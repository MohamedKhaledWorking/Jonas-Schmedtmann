import React from "react";

export default function Sidebar() {
  return (
    <>
      <div className="logo">
        <div className="size-15 rounded-xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg"
            alt="logo image"
            className="w-full h-full object-cover"
          />
        </div>
        <p>luxe hotel</p>
      </div>
      <p>Sidebar</p>
    </>
  );
}
