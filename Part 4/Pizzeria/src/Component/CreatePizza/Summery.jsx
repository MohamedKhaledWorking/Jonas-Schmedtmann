import React from "react";
import { useCreatePizza } from "../../Context/CreatePizzaContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../Context/CartContext.jsx";

export default function Summery() {
  const navigate = useNavigate();
  const { dispatch: cartDispatch } = useCart();
  const {
    basePrice,
    size,
    crust,
    sauce,
    cheese,
    toppings,
    dispatch,
    quantity,
    spicy,
  } = useCreatePizza();

  // Calculate price components
  const subTotal = basePrice * size.priceMultiplier ?? 1;
  const saucePrice = sauce?.price || 0;
  const crustPrice = crust?.price || 0;
  const cheesePrice = cheese?.price || 0;
  const tax = subTotal * 0.08;
  const toppingPrice =
    toppings?.reduce((acc, curr) => acc + curr.price, 0) || 0;
  const total =
    (subTotal + tax + crustPrice + saucePrice + cheesePrice + toppingPrice) *
    quantity;

  // Handle adding pizza to cart
  function handleAddingToCart() {
    const pizza = {
      name,
      size,
      crust,
      sauce,
      cheese,
      spicy,
      instructions,
      toppings,
      basePrice,
      quantity,
      toppingPrice,
    };

    cartDispatch({ type: "set/Pizza", payload: pizza });
    navigate("/cart");
  }

  return (
    <div className="w-full ps-0 mb-10">
      <div className="bg-secBgc dark:bg-secBgcDark px-4 py-8 rounded-3xl">
        <p className="text-lg font-bold font-main">Order Summary</p>
        <div className="border-b border-b-slate-700/50">
          {/* Subtotal */}
          <div className="my-3 flex items-center justify-between text-sm ">
            <p>Subtotal</p>
            <p className="text-textSecClr dark:text-textSecClrDark">
              ${subTotal.toFixed(2)}
            </p>
          </div>

          {/* Crust Price */}
          <div className="my-3 flex items-center justify-between text-sm ">
            <p>Crust</p>
            <p className="text-textSecClr dark:text-textSecClrDark">
              ${crustPrice.toFixed(2)}
            </p>
          </div>

          {/* Sauce Price */}
          <div className="my-3 flex items-center justify-between text-sm ">
            <p>Sauce</p>
            <p className="text-textSecClr dark:text-textSecClrDark">
              ${saucePrice.toFixed(2)}
            </p>
          </div>

          {/* Cheese Price */}
          <div className="my-3 flex items-center justify-between text-sm ">
            <p>Cheese</p>
            <p className="text-textSecClr dark:text-textSecClrDark">
              ${cheesePrice.toFixed(2)}
            </p>
          </div>

          {/* Toppings Price */}
          <div className="my-3 flex items-center justify-between text-sm ">
            <p>Toppings</p>
            <p className="text-textSecClr dark:text-textSecClrDark">
              ${toppingPrice.toFixed(2)}
            </p>
          </div>

          {/* Tax */}
          <div className="my-3 flex items-center justify-between text-sm ">
            <p>Tax (8%)</p>
            <p className="text-textSecClr dark:text-textSecClrDark">
              ${tax.toFixed(2)}
            </p>
          </div>

          {/* Delivery */}
          <div className="my-3 flex items-center justify-between text-sm ">
            <p>Delivery</p>
            <p>free</p>
          </div>
        </div>

        <div className="border-b border-b-slate-700/50">
          <div className="my-3 flex items-center justify-between text-sm ">
            <p className="font-bold text-lg">Quantity</p>
            <input
              type="number"
              value={quantity}
              className="w-12 text-center rounded-lg border border-orange-700 outline-none py-1
                focus:ring-2 ring-orange-700 ring-offset-4 ring-offset-mainBgc dark:ring-offset-mainBgcDark duration-300"
              onChange={(e) =>
                dispatch({
                  type: "set/quantity",
                  payload: Math.max(1, e.target.value), // Ensure quantity doesn't go below 1
                })
              }
            />
          </div>
        </div>

        {/* Total Price */}
        <div className="my-3 flex items-center justify-between text-2xl font-bold font-main ">
          <p>Total</p>
          <p>${total.toFixed(2)}</p>
        </div>

        {/* Checkout Button */}
        <button
          onClick={handleAddingToCart}
          className="w-full mt-3 px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 duration-300 cursor-pointer  block text-center
                hover:ring-2 ring-orange-700 ring-offset-4 ring-offset-mainBgc dark:ring-offset-mainBgcDark text-sm"
        >
          Proceed to Checkout
        </button>

        {/* Back to Menu Button */}
        <Link
          to={"/menu"}
          className="w-full mt-3 px-6 py-3 border border-orange-600 text-orange-700 hover:text-white rounded-xl block text-center
                hover:bg-orange-700 duration-300 cursor-pointer  hover:ring-2 ring-orange-700 ring-offset-4 ring-offset-mainBgc dark:ring-offset-mainBgcDark text-sm"
        >
          Back to Menu
        </Link>
      </div>
    </div>
  );
}
