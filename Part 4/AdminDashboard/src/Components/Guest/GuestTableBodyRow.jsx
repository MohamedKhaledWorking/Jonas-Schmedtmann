import { Button } from "@heroui/react";
import { SquarePen, Trash2 } from "lucide-react";
import React from "react";

export default function GuestTableBodyRow({
  guest,
  deleteModal,
  setSelectedGuest,
  editModal,
  DetailsModal,
}) {
  function onDelete() {
    deleteModal.onOpen();
  }
  function onEdit() {
    editModal.onOpen();
  }
  function onShowDetails() {
    DetailsModal.onOpen();
  }

  return (
    <tr key={guest?.id} className="hover:bg-secBgc duration-200  text-center ">
      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium  ">
        {guest?.id}
      </td>
      <td className=" px-5 py-3 cursor-pointer" onClick={onShowDetails}>
        <div className="w-48 flex items-center gap-3">
          <img
            src={guest?.avatar_url}
            alt={guest?.full_name + "image"}
            className="size-12 rounded-full"
          />
          <div className="data">
            <p className="font-normal text-sm ">{guest?.full_name}</p>
            <p className="font-normal text-xs leading-5 text-gray-400">
              {guest?.email}
            </p>
          </div>
        </div>
      </td>
      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium ">
        individual
      </td>
      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium ">
        {guest?.phone}
      </td>
      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium ">
        {guest?.country}
      </td>
      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium ">
        {guest?.total_stays}
      </td>
      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium ">
        {guest?.created_at}
      </td>
      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium ">
        ${guest?.total_spent}
      </td>
      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium ">
        {guest?.vip_level ?? "guest"}
      </td>
      <td className="flex p-5 items-center gap-2  justify-center">
        <Button
          onPress={() => {
            onEdit();
            setSelectedGuest(guest);
          }}
          className="rounded-full bg-secBgc group transition-all duration-500 hover:bg-amber-400 flex item-center cursor-pointer text-amber-500 hover:text-white"
        >
          <SquarePen />
        </Button>
        <Button
          onPress={() => {
            setSelectedGuest(guest);
            onDelete();
          }}
          className="rounded-full bg-secBgc group transition-all duration-500 hover:bg-red-600 flex item-center cursor-pointer text-rose-500 hover:text-white"
          onOpen={deleteModal.onOpen}
        >
          <Trash2 />
        </Button>
      </td>
    </tr>
  );
}
