import { Flame } from "lucide-react";
import React from "react";
import { useCart } from "../../Context/CartContext.jsx";

export default function MainImage() {
  const { isSpicy, mainImg } = useCart();
  return (
    <>
      <div className="w-full h-[60vh] lg:h-[50vh] space-y-4 ">
        <div className="w-full bg-secBgc dark:bg-secBgcDark h-full rounded-2xl overflow-hidden relative">
          {isSpicy && (
            <div className="absolute bottom-10 left-10 bg-red-500 text-white px-3 py-2 rounded-full text-sm flex space-x-1 items-center">
              <Flame className="h-4 w-4" />
              <p>spicy</p>
            </div>
          )}

          <img
            src={mainImg}
            alt={`main image`}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
