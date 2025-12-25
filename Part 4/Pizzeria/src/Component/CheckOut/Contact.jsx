import React from "react";

export default function Contact() {
  return (
    <>
      <div className="bg-secBgc dark:bg-secBgcDark px-6 py-8  rounded-3xl">
        <p className="text-2xl font-bold font-main">Contact Information</p>
        <div className="flex flex-wrap w-full my-4">
          <div className="lg:w-1/2 pe-4 my-3">
            <label htmlFor="userName">Full name</label>
            <input
              id="userName"
              type="text"
              placeholder="mohamed"
              className="w-full border border-textClr/50 dark:border-textClrDark/50 px-4 py-3 rounded-xl mt-2 outline-none 
                    focus:ring-2 focus:ring-orange-700 focus:ring-offset-mainBgc dark:focus:ring-offset-mainBgcDark focus:ring-offset-6 duration-400 focus:border-orange-700"
            />
          </div>
          <div className="lg:w-1/2 pe-4 my-3">
            <label htmlFor="phone">phone</label>
            <input
              id="phone"
              type="tel"
              placeholder="0 (0125) 123 456 789 "
              className="w-full border border-textClr/50 dark:border-textClrDark/50 px-4 py-3 rounded-xl mt-2 outline-none 
                    focus:ring-2 focus:ring-orange-700 focus:ring-offset-mainBgc dark:focus:ring-offset-mainBgcDark focus:ring-offset-6 duration-400 focus:border-orange-700"
            />
          </div>
          <div className="w-full pe-4 my-3">
            <label htmlFor="email">email</label>
            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              className="w-full border border-textClr/50 dark:border-textClrDark/50 px-4 py-3 rounded-xl mt-2 outline-none 
                    focus:ring-2 focus:ring-orange-700 focus:ring-offset-mainBgc dark:focus:ring-offset-mainBgcDark focus:ring-offset-6 duration-400 focus:border-orange-700"
            />
          </div>
        </div>
      </div>
    </>
  );
}
