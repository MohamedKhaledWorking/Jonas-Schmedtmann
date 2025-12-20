import { Pizza } from "lucide-react";
import React from "react";

export default function Logo() {
  return (
    <>
      <a className="text-xl lg:text-3xl group cursor-pointer flex items-center">
        <Pizza className="inline mr-2 group-hover:scale-125 duration-300 text-inherit" />
        Pizzeria<span className="text-orange-500 text-4xl">.</span>
      </a>
    </>
  );
}
