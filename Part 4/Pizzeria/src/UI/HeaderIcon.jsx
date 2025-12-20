import React from "react";

export default function HeaderIcon({ bgColor, textColor, icon, text }) {
  return (
    <>
      <div
        className={`px-7 py-2 bg-${bgColor} text-${textColor} rounded-full w-fit flex space-x-4 items-center`}
      >
        {icon}
        <span>{text}</span>
      </div>
    </>
  );
}
