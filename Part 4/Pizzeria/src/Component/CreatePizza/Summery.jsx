import React from "react";
import { useCreatePizza } from "../../Context/CreatePizzaContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCustomToCart, addToCart } from "../../Features/cartSlice.js";

export default function Summary() {
  const navigate = useNavigate();
  const reduxDispatch = useDispatch();

  const {
    name,
    basePrice = 0,
    size,
    crust,
    sauce,
    cheese,
    toppings = [],
    dispatch,
    quantity = 1,
    spicy,
  } = useCreatePizza();

  /* ================= PRICE CALCULATION ================= */

  const sizeMultiplier = Number(size?.priceMultiplier ?? 1);
  const safeBasePrice = Number(basePrice) || 0;

  const subTotal = safeBasePrice * sizeMultiplier;
  const crustPrice = Number(crust?.price ?? 0);
  const saucePrice = Number(sauce?.price ?? 0);
  const cheesePrice = Number(cheese?.price ?? 0);

  const toppingPrice = toppings.reduce(
    (acc, curr) => acc + Number(curr.price || 0),
    0
  );

  const unitPrice =
    subTotal + crustPrice + saucePrice + cheesePrice + toppingPrice;

  const total = unitPrice * Number(quantity);

  /* ================= ADD TO CART ================= */

  function handleAddingToCart() {
    // Calculate prices
    const selectedSizePrice = size.priceMultiplier || 1;
    const toppingPrice =
      toppings?.reduce((acc, curr) => acc + +curr.price, 0) || 0;
    const crustPrice = crust?.price || 0;
    const saucePrice = sauce?.price || 0;
    const cheesePrice = cheese?.price || 0;
    const subTotal =
      (basePrice + crustPrice + saucePrice + cheesePrice) * selectedSizePrice;
    const totalPrice = (subTotal + toppingPrice) * quantity;

    const pizza = {
      pizzaId: crypto.randomUUID(), // Add unique ID for pizza
      name,
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80", // Assuming image is fixed
      size: size.size,
      isSpicy: spicy,
      crust,
      sauce,
      cheese,
      extraToppings: toppings,
      basePrice,
      quantity,
      selectedSizePrice, // Add selected size price
      totalToppingsPrice: toppingPrice, // Add total toppings price
      totalPrice, // Final total price
    };

    console.log(pizza); // Debugging the pizza object
    reduxDispatch(addCustomToCart(pizza));
    navigate("/cart");
  }
  /* ================= UI ================= */

  return (
    <div className="w-full ps-0 mb-10">
      <div className="bg-secBgc dark:bg-secBgcDark px-4 py-8 rounded-3xl">
        <p className="text-lg font-bold font-main">Order Summary</p>

        <div className="border-b border-b-slate-700/50">
          <PriceRow label="Subtotal" value={subTotal} />
          <PriceRow label="Crust" value={crustPrice} />
          <PriceRow label="Sauce" value={saucePrice} />
          <PriceRow label="Cheese" value={cheesePrice} />
          <PriceRow label="Toppings" value={toppingPrice} />
          <PriceRow label="Delivery" value="Free" />
        </div>

        <div className="border-b border-b-slate-700/50 my-3">
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg">Quantity</p>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) =>
                dispatch({
                  type: "set/quantity",
                  payload: Math.max(1, Number(e.target.value)),
                })
              }
              className="w-12 text-center rounded-lg border border-orange-700 outline-none py-1"
            />
          </div>
        </div>

        <div className="my-3 flex items-center justify-between text-2xl font-bold">
          <p>Total</p>
          <p>${total.toFixed(2)}</p>
        </div>

        <button
          onClick={handleAddingToCart}
          className="w-full mt-3 px-6 py-3 bg-orange-600 text-white rounded-xl"
        >
          Proceed to Checkout
        </button>

        <Link
          to="/menu"
          className="w-full mt-3 px-6 py-3 border border-orange-600 text-orange-700 rounded-xl block text-center"
        >
          Back to Menu
        </Link>
      </div>
    </div>
  );
}

/* ================= HELPER COMPONENT ================= */

function PriceRow({ label, value }) {
  return (
    <div className="my-3 flex items-center justify-between text-sm">
      <p>{label}</p>
      <p className="text-textSecClr dark:text-textSecClrDark">
        {typeof value === "number" ? `$${value.toFixed(2)}` : value}
      </p>
    </div>
  );
}
