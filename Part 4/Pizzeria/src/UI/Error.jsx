import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-mainBgc dark:bg-mainBgcDark text-textClr dark:text-textClrDark">
      <p className="text-2xl font-semibold font-main my-5 ">
       OOPS ! Something went wrong
      </p>
      <p>{error?.status}</p>
      <p className="my-5 text-secBgc dark:text-secBgcDark font-main ">
        {error?.statusText ||
          (error?.message == "Cannot read properties of undefined (reading 'map')" ? "failed to get data from server" : error?.message ) ||
          "Something went wrong please try again"}
      </p>
      <Link
        to={"/"}
        className="text-orange-700 hover:scale-x-105 hover:underline hover:text-orange-800 duration-300 my-5"
      >
        back to home
      </Link>
    </div>
  );
}
