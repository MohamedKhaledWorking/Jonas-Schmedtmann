import { Sparkle } from "lucide-react";
import React from "react";
import { useCreatePizza } from "../../Context/CreatePizzaContext.jsx";

export default function Name() {
  const { name, dispatch } = useCreatePizza();
  return (
    <div className=" p-8 pb-0 bg-secBgc dark:bg-secBgcDark rounded-2xl border border-textClr/20 dark:border-textSEcClrDark/20">
      <div className="flex space-x-3 items-center">
        <Sparkle className="text-orange-700" />
        <p className="text-lg font-bold font-main">Name Your Creation</p>
      </div>
      <div className="my-4">
        <input
          type="text"
          placeholder="e.g Spicy Paneer"
          value={name}
          onChange={(e) =>
            dispatch({ type: "set/name", payload: e.target.value })
          }
          className="w-full px-4 py-3 rounded-xl border border-textClr/20 dark:border-textSEcClrDark/20 bg-transparent focus:outline-none 
          focus:ring-2 focus:ring-orange-700  focus:ring-offset-5 focus:ring-offset-secBgc dark:focus:ring-offset-secBgcDark transition focus:border-orange-700 duration-300"
        />
      </div>
    </div>
  );
}
