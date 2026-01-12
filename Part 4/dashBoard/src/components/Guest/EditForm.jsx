import React from "react";
import Mandatory from "./Mandatory.jsx";
import { Input, NumberInput } from "@heroui/react";

export default function EditForm() {
  return (
    <form className="p-6 ">
      <div className="flex gap-x-6 mb-6 ">
        <div className="w-full relative">
          <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
            Full Name <Mandatory />
          </label>
          <input
            type="text"
            id="default-search"
            className="block w-full h-14 px-5 py-3.5  leading-7 text-base font-normal shadow-xs text-textMainClr bg-transparent border lightBorder rounded-2xl placeholder-gray-400 focus:outline-none "
            placeholder
            required
          />
        </div>
        <div className="w-full relative">
          <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
            Country <Mandatory />
          </label>
          <input
            type="text"
            id="default-search"
            className="block w-full h-14 px-5 py-3.5  leading-7 text-base font-normal shadow-xs text-textMainClr bg-transparent border lightBorder rounded-2xl placeholder-gray-400 focus:outline-none "
            placeholder
            required
          />
        </div>
      </div>
      <div className="relative mb-6">
        <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
          Email Address <Mandatory />
        </label>
        <input
          type="text"
          id="default-search"
          className="block w-full h-14 px-5 py-3.5  leading-7 text-base font-normal shadow-xs text-textMainClr bg-transparent border lightBorder rounded-2xl placeholder-gray-400 focus:outline-none "
          placeholder
          required
        />
      </div>
      <div className="flex">
        <div className="relative mb-6 w-full ">
          <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
            Amount
            <Mandatory />
          </label>
          <div className=" pe-3">
            <NumberInput
              isClearable
              className=" text-white border lightBorder rounded-2xl outline-none "
              defaultValue={1024}
              placeholder="Enter the amount"
              variant="bordered"
              classNames={{ inputWrapper: "bg-transparent border-none h-14" }}
            />
          </div>
        </div>
        <div className="relative mb-6 w-full">
          <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
            stay days
            <Mandatory />
          </label>
          <div className=" ps-3">
            <NumberInput
              isClearable
              className=" text-white border lightBorder rounded-2xl outline-none "
              defaultValue={15}
              placeholder="Enter the amount"
              variant="bordered"
              classNames={{ inputWrapper: "bg-transparent border-none h-14" }}
            />
          </div>
        </div>
        <div className="relative mb-6 w-full">
          <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
            phone
            <Mandatory />
          </label>
          <div className=" ps-3">
            <Input
              isClearable
              className=" text-white border lightBorder rounded-2xl outline-none "
              defaultValue={"01"}
              placeholder="Enter the phone number"
              variant="bordered"
              classNames={{ inputWrapper: "bg-transparent border-none h-14" }}
            />
          </div>
        </div>
      </div>

      <div className="relative mb-6">
        <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
          Guest Avatar
        </label>
        <input
          type="file"
          id="default-search"
          className="block w-full h-14 px-5 py-3.5  leading-7 text-base font-normal shadow-xs text-textMainClr bg-transparent border lightBorder rounded-2xl placeholder-gray-400 focus:outline-none cursor-pointer"
          placeholder
          required
        />
      </div>
      <button className="w-full mainBtn h-15 flex justify-center ">
        Create Guest
      </button>
    </form>
  );
}
