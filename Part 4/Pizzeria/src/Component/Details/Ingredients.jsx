import React from "react";

export default function Ingredients({ ingredient }) {
  return (
    <>
      <div className="px-4 py-2 rounded-full  text-textClr dark:text-textClrDark border border-textSecClr dark:border-textSecClrDark my-2">
        {ingredient}
      </div>
    </>
  );
}
