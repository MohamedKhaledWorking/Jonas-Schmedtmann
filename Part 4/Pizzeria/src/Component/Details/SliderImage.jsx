import React from "react";
import { useCart } from "../../Context/CartContext.jsx";

export default function SliderImage({ img, name, setMainUrl }) {
  const { dispatch } = useCart();
  return (
    <>
      <div className="size-30 rounded-full overflow-hidden cursor-pointer">
        <img
          src={img}
          alt={`${name} slider image`}
          className="w-full h-full object-cover"
          onClick={() => dispatch({ type: "set/mainImg", payload: img })}
        />
      </div>
    </>
  );
}
