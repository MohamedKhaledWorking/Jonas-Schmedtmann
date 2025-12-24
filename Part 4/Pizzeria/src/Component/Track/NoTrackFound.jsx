import { Search } from "lucide-react";
import React from "react";

export default function NoTrackFound() {
  return (
    <div>
      <div className="p-5 rounded-full  w-fit mx-auto  dark:bg-white/30 bg-black/10 ">
        <Search size={30} className="dark:text-white text-black" />
      </div>
      <p className="font-bold font-main my-5">Enter your order ID</p>
      <p className="text-textSecClr dark:text-textSecClrDark">
        You can find it in your order confirmation email
      </p>
    </div>
  );
}
