import React from "react";
import { useQuery } from "@tanstack/react-query";

import GuestTableHead from "./GuestTableHead.jsx";
import GuestTableBody from "./GuestTableBody.jsx";
import { getGuests } from "../../Services/guest.js";
import GuestTablePagination from "./GuestTablePagination.jsx";
import GuestTableSkeleton from "./GuestTableSkeleton.jsx";
import TableErrorBody from "../../Ui/Table/TableErrorBody.jsx";
import TableEmptyBody from "../../Ui/Table/TableErrorBody.jsx";

export default function GuestTable() {
  const {
    data: guests,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["guests"],
    queryFn: getGuests,
  });

  return (
    <div className="flex flex-col mt-8 ">
      <div className=" overflow-x-auto pb-4">
        <div className="min-w-full inline-block align-middle">
          <div className="overflow-hidden  border rounded-lg border-lightBorder text-textClr">
            <table className="table-auto min-w-full rounded-xl">
              <GuestTableHead />

              {isLoading ? (
                <GuestTableSkeleton />
              ) : error ? (
                <TableErrorBody error={error} />
              ) : guests?.length == 0 ? (
                <TableEmptyBody />
              ) : (
                <GuestTableBody guests={guests} />
              )}
            </table>
            <GuestTablePagination />

          </div>
        </div>
      </div>
    </div>
  );
}
