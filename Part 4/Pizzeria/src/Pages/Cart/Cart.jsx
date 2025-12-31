import React from "react";
import PizzaCart from "../../Component/Cart/PizzaCart.jsx";
import Summery from "../../Component/Cart/Summery.jsx";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../../Features/cartSlice.js";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Cart() {
  const items = useSelector((store) => store?.cart?.cart);
  const dispatch = useDispatch();
  const isEmpty = items.length == 0;

  function handleClearCart() {
    const customization = Swal.mixin({
      customClass: {
        popup: "shadow-lg",
        confirmButton:
          "px-6 py-2 rounded-full my-2 w-full text-white cursor-pointer bg-orange-700 outline-none border-none shadow-none mx-4 hover:ring-3 ring-offset-3 ring-offset-mainBgcDark ring-orange-700 duration-500",
        cancelButton:
          "px-6 py-2 rounded-full my-2 w-full cursor-pointer bg-transparent hover:bg-orange-700 outline-none border text-orange-700 hover:text-white border-orange-700 shadow-none mx-4 hover:ring-3 ring-offset-3 ring-offset-mainBgcDark ring-orange-700 duration-500",
      },
      buttonsStyling: false,
    });
    customization
      .fire({
        theme: "dark",
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          dispatch(clearItems());
          customization.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          customization.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  }

  return (
    <>
      <section className="my-30 bg-mainBgc dark:bg-mainBgcDark ">
        <div className="container mx-auto px-2">
          <div className="flex justify-between flex-col md:flex-row items-center ">
            <p className="text-4xl font-bold my-4 font-main text-start">
              Your Cart
            </p>
            {!isEmpty && (
              <button
                onClick={handleClearCart}
                className="py-3 px-15 bg-orange-700 rounded-xl border-2 border-orange-700 text-xl  capitalize
            hover:ring-3 ring-orange-700 ring-offset-4 ring-offset-mainBgc dark:ring-offset-mainBgcDark text-textClr dark:text-textClrDark duration-500 cursor-pointer"
              >
                clear cart
              </button>
            )}
          </div>

          {isEmpty ? (
            <div className=" w-full min-h-[80vh] flex justify-center items-center capitalize">
              <p className="text-3xl font-bold font-main text-textClr dark:text-textClrDark space-x-5 flex flex-col text-center space-y-7">
                <span className="text-center">Cart is Empty ? order from</span>
                <Link
                  to={"/menu"}
                  className="border border-transparent hover:border-orange-700 px-12 py-3 hover:ring-2 ring-offset-4 ring-offset-mainBgc dark:ring-offset-mainBgcDark ring-orange-700 duration-500 rounded-3xl"
                >
                  our menu
                </Link>
              </p>
            </div>
          ) : (
            <div className="my-8  flex flex-col-reverse lg:flex-row ">
              <div className="lg:w-8/12  space-y-6">
                {items?.map((pizza) => {
                  return <PizzaCart pizza={pizza} key={pizza?.id} />;
                })}
              </div>
              <Summery />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
