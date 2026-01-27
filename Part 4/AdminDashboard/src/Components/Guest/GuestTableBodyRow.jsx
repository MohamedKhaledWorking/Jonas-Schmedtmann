import { Button } from "@heroui/react";
import { CopyPlus, SquarePen, Trash2 } from "lucide-react";
import React from "react";

export default function GuestTableBodyRow({
  guest,
  deleteModal,
  setSelectedGuest,
  editModal,
  DetailsModal,
  DuplicateModal,
}) {
  function onDelete() {
    deleteModal.onOpen();
  }
  function onEdit() {
    editModal.onOpen();
  }
  function onShowDetails() {
    setSelectedGuest(guest);
    DetailsModal.onOpen();
  }
  function onDuplicate() {
    DuplicateModal.onOpen();
  }

  return (
    <tr
      key={guest?.id}
      className="hover:bg-secBgc duration-200  text-center capitalize"
    >
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
        {guest?.stay_duration}
      </td>
      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium ">
        {guest?.created_at}
      </td>
      <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium ">
        ${guest?.spent_money}
      </td>
      <td className={`p-5 whitespace-nowrap text-sm leading-6 font-medium  `}>
        <span
          className={`px-4 py-1  rounded-full  text-xs ${
            guest?.level == "gold"
              ? "text-amber-300 bg-amber-500/30"
              : guest?.level == "platinum"
              ? "text-indigo-400 bg-indigo-600/20"
              : guest?.level == "silver"
              ? "text-gray-400 bg-gray-300/30"
              : "text-orange-500 bg-orange-500/20"
          }`}
        >
          {guest?.level ?? "guest"}
        </span>
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
        >
          <Trash2 />
        </Button>
        <Button
          onPress={() => {
            setSelectedGuest(guest);
            onDuplicate();
          }}
          className="rounded-full bg-secBgc group transition-all duration-500 hover:bg-theme flex item-center cursor-pointer text-theme hover:text-white"
        >
          <CopyPlus />
        </Button>
      </td>
    </tr>
  );
}
