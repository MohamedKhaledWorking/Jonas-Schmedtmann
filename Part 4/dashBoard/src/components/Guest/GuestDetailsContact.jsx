import React from "react";
import { MailCheck } from "lucide-react";

export default function GuestDetailsContact() {
  return (
    <div>
      <p className="text-xl font-bold my-5">Contact Details </p>
      <div className="border lightBorder p-5 rounded-xl border-b-divider">
        <div className="flex space-x-3 border-b lightBorder  pb-3 mb-4">
          <div className="bg-secBgc p-3 rounded-full">
            <MailCheck />
          </div>
          <div className="">
            <p className="text-xs text-textSecClr">Email Address</p>
            <p className="text-lg font-bold">khaled@co.com</p>
          </div>
        </div>
        <div className="flex space-x-3 border-b lightBorder  pb-3 mb-4">
          <div className="bg-secBgc p-3 rounded-full">
            <MailCheck />
          </div>
          <div className="">
            <p className="text-xs text-textSecClr">Phone Number</p>
            <p className="text-lg font-bold">+2012345678</p>
          </div>
        </div>
        <div className="flex space-x-3  pb-3 ">
          <div className="bg-secBgc p-3 rounded-full">
            <MailCheck />
          </div>
          <div className="">
            <p className="text-xs text-textSecClr">Email Address</p>
            <p className="text-lg font-bold">khaled@co.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
