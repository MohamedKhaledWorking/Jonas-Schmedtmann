import React, { useEffect, useRef, useState } from "react";
import { BaggageClaim, Pizza, Sun } from "lucide-react";
import Logo from "./Logo.jsx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar({ setIsDark }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const cartNumber = useSelector((store) => store?.cart?.cart).length;
  useEffect(() => {
    function onDocClick(e) {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <nav className="backdrop-blur fixed inset-x-0 top-0 bg-secBgc/20 dark:bg-secBgcDark/20 z-999">
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
                  z-9999
                  p-2 pb-6
                  bg-secBgc/40 dark:bg-secBgcDark/80
                  flex flex-col items-center space-y-4
                  -ml-2 md:-ml-10
                  backdrop-blur
                "
              >
                <li className="hover:text-orange-700 w-3/4">
                  <Link
                    to={"/"}
                    className="w-full flex justify-center items-center py-2"
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li className="hover:text-orange-700 w-3/4">
                  <Link
                    to={"menu"}
                    className="w-full flex justify-center items-center py-2"
                    onClick={() => setOpen(false)}
                  >
                    Menu
                  </Link>
                </li>
                <li className="hover:text-orange-700 w-3/4">
                  <Link
                    to={"track"}
                    className="w-full flex justify-center items-center py-2"
                    onClick={() => setOpen(false)}
                  >
                    Track Order
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* Logo */}
          <Logo />
        </div>

        {/* Desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg space-x-4">
            <li className="hover:text-orange-700">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:text-orange-700">
              <Link to={"/menu"}>Menu</Link>
            </li>
            <li className="hover:text-orange-700">
              <Link to={"/track"}>Track Order</Link>
            </li>
          </ul>
        </div>

        {/* Right icons */}
        <div className="navbar-end space-x-4">
          <Link
            to={"/cart"}
            className="cursor-pointer hover:bg-orange-700 p-2.5 rounded-xl duration-300 group"
          >
            <div tabindex="0" role="button" c>
              <div class="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg>
                {cartNumber > 0 && (
                  <span class="badge badge-sm indicator-item dark:bg-mainBgcDark border-mainBgc dark:border-mainBgcDark  group-hover:bg-orange-700">
                    {cartNumber}
                  </span>
                )}
              </div>
            </div>
          </Link>
          <button
            className="cursor-pointer hover:bg-orange-700 p-2.5 rounded-xl"
            onClick={() => setIsDark((v) => !v)}
          >
            <Sun />
          </button>
        </div>
      </div>
    </nav>
  );
}
