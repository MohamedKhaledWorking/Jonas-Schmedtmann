import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../public/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar bg-base-100 shadow-sm py-6">
      <div className="flex-1">
        <Link to="/">
          <img src={logo} alt="logo" className="h-10 px-10" />
        </Link>
      </div>
      <div className="flex-none">
        <ul className=" menu-horizontal px-1">
          <li className="text-xl mx-5">
            <NavLink to={"/product"}>product</NavLink>
          </li>
          <li className="text-xl mx-5">
            <NavLink to={"/pricing"}>pricing</NavLink>
          </li>
          <li className="text-xl mx-5">
            <NavLink to={"/login"}>login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
