import React from "react";
import Logo from "./Logo.jsx";

export default function Footer() {
  return (
    <>
      <footer className=" text-textClr dark:text-textClrDark mt-20">
        <div className="container mx-auto ">
          <div className="footer sm:footer-horizontal  p-10 flex flex-wrap sm:flex-nowrap ">
            <aside className="w-full md:w-1/4 space-y-3 ">
              <div className="mx-auto">
                <Logo />
              </div>
              <p className="text-textSecClr dark:text-textSecClrDark text-center ">
                Crafting authentic Italian pizzas with love since 2020. Fresh
                ingredients, traditional recipes.
              </p>
            </aside>
            <nav className="w-full md:w-1/4 space-y-3 flex flex-col justify-center items-center">
              <h6 className="footer-title">Quick Links</h6>
              <a className="hover:text-orange-500 link link-hover">Home</a>
              <a className="hover:text-orange-500 link link-hover">Menu</a>
              <a className="hover:text-orange-500 link link-hover">
                Track Order
              </a>
              <a className="hover:text-orange-500 link link-hover">
                Advertisement
              </a>
            </nav>
            <nav className="w-full md:w-1/4 space-y-3 flex flex-col justify-center items-center">
              <h6 className="footer-title">Contact</h6>
              <a className="hover:text-orange-500 link link-hover">
                123 Pizza Street
              </a>
              <a className="hover:text-orange-500 link link-hover">
                New York, NY 10001
              </a>
              <a className="hover:text-orange-500 link link-hover">
                hello@pizzeria.com
              </a>
              <a className="hover:text-orange-500 link link-hover">
                hello@pizzeria.com
              </a>
            </nav>
            <nav className="w-full md:w-1/4 space-y-3 flex flex-col justify-center items-center">
              <h6 className="footer-title">Hours</h6>
              <a className="hover:text-orange-500 link link-hover">
                Mon-Thu: 11am - 10pm
              </a>
              <a className="hover:text-orange-500 link link-hover">
                Fri-Sat: 11am - 11pm
              </a>
              <a className="hover:text-orange-500 link link-hover">
                Sunday: 12pm - 9pm
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
