import React, { useEffect, useRef, useState } from "react";
import { BaggageClaim, Pizza, Sun } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <div className="backdrop-blur-md absolute inset-x-0 top-0 bg-secBgcDark dark:bg-secBgcDark">
      <div className="navbar shadow-sm container mx-auto py-3">
        <div className="navbar-start">
          {/* ✅ MOBILE DROPDOWN WRAPPER (relative anchor) */}
          <div ref={wrapRef} className="relative lg:hidden mr-4">
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="btn btn-ghost btn-square"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>

            {open && (
              <ul
                className="
                  absolute left-0 top-full mt-3
                  w-screen
                  menu menu-sm
                  rounded-box
                  z-[999]
                  p-2 pb-6
                  shadow
                  bg-secBgc dark:bg-secBgcDark
                  flex flex-col items-center space-y-4
                  -ml-2 md:-ml-10
                "
              >
                <li className="hover:text-orange-500 w-3/4">
                  <button
                    className="w-full flex justify-center items-center py-2"
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </button>
                </li>
                <li className="hover:text-orange-500 w-3/4">
                  <button
                    className="w-full flex justify-center items-center py-2"
                    onClick={() => setOpen(false)}
                  >
                    Menu
                  </button>
                </li>
                <li className="hover:text-orange-500 w-3/4">
                  <button
                    className="w-full flex justify-center items-center py-2"
                    onClick={() => setOpen(false)}
                  >
                    Track Order
                  </button>
                </li>
              </ul>
            )}
          </div>

          {/* Logo */}
          <a className="text-xl lg:text-3xl group cursor-pointer flex items-center">
            <Pizza className="inline mr-2 group-hover:scale-125 duration-300 text-inherit" />
            Pizzeria<span className="text-orange-500 text-4xl">.</span>
          </a>
        </div>

        {/* Desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg space-x-4">
            <li className="hover:text-orange-500">
              <a>Home</a>
            </li>
            <li className="hover:text-orange-500">
              <a>Menu</a>
            </li>
            <li className="hover:text-orange-500">
              <a>Track Order</a>
            </li>
          </ul>
        </div>

        {/* Right icons */}
        <div className="navbar-end space-x-4">
          <button className="cursor-pointer hover:bg-orange-500 p-2.5 rounded-xl">
            <BaggageClaim />
          </button>
          <button className="cursor-pointer hover:bg-orange-500 p-2.5 rounded-xl">
            <Sun />
          </button>
        </div>
      </div>
    </div>
  );
}
