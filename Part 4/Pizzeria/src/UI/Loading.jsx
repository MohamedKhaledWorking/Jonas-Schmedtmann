import React from "react";

export default function Loading({ label = "loading Your Pizza" }) {
  return (
    <div
      className="
    fixed inset-0 z-[9999999999]
    flex items-center justify-center
    bg-mainBgc/5 
    backdrop-blur
    text-3xl font-bold font-main text-white
  "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="120"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-pizza"
      >
        <path d="m12 14-1 1" className="svg-elem-1" />
        <path d="m13.75 18.25-1.25 1.42" className="svg-elem-2" />
        <path
          d="M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12"
          className="svg-elem-3"
        />
        <path d="M18.8 9.3a1 1 0 0 0 2.1 7.7" className="svg-elem-4" />
        <path
          d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"
          className="svg-elem-5"
        />
      </svg>

      <span className="ms-6 animate-pulse capitalize">{label}…</span>
    </div>
  );
}
