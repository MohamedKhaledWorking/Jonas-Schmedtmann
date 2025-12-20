import React from "react";

export default function Loading({ label = "Baking Your Pizza" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-pizza-icon lucide-pizza"
    >
      <path d="m12 14-1 1" class="svg-elem-1"></path>
      <path d="m13.75 18.25-1.25 1.42" class="svg-elem-2"></path>
      <path
        d="M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12"
        class="svg-elem-3"
      ></path>
      <path d="M18.8 9.3a1 1 0 0 0 2.1 7.7" class="svg-elem-4"></path>
      <path
        d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"
        class="svg-elem-5"
      ></path>
    </svg>
  );
}
