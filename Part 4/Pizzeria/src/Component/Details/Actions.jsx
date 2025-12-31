import React from "react";
import { useCart } from "../../Context/CartContext.jsx";
import toast from "react-hot-toast";

export default function Actions({ totalPrice, handleAddToCart }) {
  const { quantity, dispatch } = useCart();

  return (
    <>
      <div className="my-5 flex flex-wrap space-y-4 md:space-y-0">
        <div className="pe-4 w-full md:w-4/12 ">
          <div className="flex justify-center items-center space-x-2 bg-gray-900/10 dark:bg-gray-100/14 px-4 py-3 rounded-2xl">
            <button
              className="bg-mainBgc dark:bg-mainBgcDark px-5 py-2 rounded-lg cursor-pointer"
              onClick={() => dispatch({ type: "decrement/quantity" })}
            >
              -
            </button>
            <input
              type="number"
              name="quantity"
              min={1}
              className="w-20 border border-textClr dark:border-textClr rounded-lg text-center py-2"
              value={quantity}
              onChange={(e) =>
                dispatch({ type: "set/quantity", payload: +e.target.value })
              }
            />
            <button
              className="bg-mainBgc dark:bg-mainBgcDark px-5 py-2 rounded-lg cursor-pointer"
              onClick={() => dispatch({ type: "increment/quantity" })}
            >
              +
            </button>
          </div>
        </div>
        <div className="pe-4 w-full md:w-8/12">
          <button
            onClick={handleAddToCart}
            className="bg-orange-700 hover:bg-transparent border border-orange-700 duration-400  px-6 py-4 rounded-2xl w-full font-main font-bold text-lg cursor-pointer
           hover:ring-3 hover:ring-offset-4 hover:ring-offset-mainBgc dark:hover:ring-offset-mainBgcDark hover:ring-orange-700 text-textClr dark:text-textClrDark"
          >
            Add to Cart - ${totalPrice.toFixed(2)}
          </button>
        </div>
      </div>
    </>
  );
}
