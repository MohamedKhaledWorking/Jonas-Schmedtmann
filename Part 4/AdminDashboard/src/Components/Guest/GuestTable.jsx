import React from "react";
import GuestTableHead from "./GuestTableHead.jsx";
import GuestTableBody from "./GuestTableBody.jsx";

export default function GuestTable() {
  return (
    <div className="flex flex-col mt-8 ">
      <div className=" overflow-x-auto pb-4">
        <div className="min-w-full inline-block align-middle">
          <div className="overflow-hidden  border rounded-lg border-lightBorder text-textClr">
            <table className="table-auto min-w-full rounded-xl">
              <GuestTableHead />
              <GuestTableBody />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
