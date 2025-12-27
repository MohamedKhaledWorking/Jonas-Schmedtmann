import React from "react";

export default function SliderImage({ img, name, setMainUrl }) {
  return (
    <>
      <div className="size-30 rounded-full overflow-hidden cursor-pointer">
        <img
          src={img}
          alt={`${name} slider image`}
          className="w-full h-full object-cover"
          onClick={(e) => setMainUrl(e.target.src)}
        />
      </div>
    </>
  );
}
