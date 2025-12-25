import React from "react";
import HeaderIcon from "../../UI/HeaderIcon.jsx";
import { ChefHat } from "lucide-react";

export default function Header() {
  return (
    <>
      <div className="flex justify-self-center items-center flex-col text-center mb-10">
        <HeaderIcon
          bgColor={"orange-700/20"}
          textColor={"orange-700"}
          icon={<ChefHat />}
          text={"Pizza Builder"}
        />
        <p className="text-6xl font-bold font-main my-8">
          Create Your{" "}
          <span className="bg-linear-to-r from-orange-700 to-orange-400 via-orange-200 text-transparent bg-clip-text ">
            Masterpiece
          </span>
        </p>
        <p className="text-textSecClr dark:text-textSecClrDark text-xl max-w-xl text-center">
          Build your perfect pizza from scratch with premium ingredients
        </p>
      </div>
    </>
  );
}
