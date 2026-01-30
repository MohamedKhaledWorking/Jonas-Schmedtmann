import React from "react";
import SectionHeader from "../../Ui/Section/SectionHeader.jsx";
import {
  BatteryFull,
  BedDouble,
  BedSingle,
  BrushCleaning,
  CircleDashed,
} from "lucide-react";
import Statistics from "../../Ui/Section/Statistics.jsx";
import CabinList from "../../Components/Cabins/CabinList.jsx";
import { useDisclosure } from "@heroui/react";
import AddModal from "../../Ui/Modals/AddModal.jsx";
import AddCabinForm from "../../Components/Cabins/AddCabinForm.jsx";

export default function Cabins() {
  const statistics = [
    {
      title: "Total Cabins",
      value: "120",
      icon: <BedDouble className="text-green-500" />,
    },
    {
      title: "Occupied Cabins",
      value: "85",
      icon: <BatteryFull className="text-rose-500" />,
    },
    {
      title: "Available Cabins",
      value: "35",
      icon: <BrushCleaning className="text-indigo-500" />,
    },
    {
      title: "Pending Cabins",
      value: "5",
      icon: <CircleDashed className="text-amber-500" />,
    },
  ];

  const addModal = useDisclosure();
  function handleOpenAddModal() {
    addModal.onOpen();
  }

  return (
    <div className=" ">
      <SectionHeader head={"cabins"} desc={"manage your cabins"}>
        <button
          className="mainBtn px-6 py-4 flex justify-center w-full"
          onClick={handleOpenAddModal}
        >
          <BedSingle className="mr-2" /> Add new cabin
        </button>
        <AddModal
          isOpen={addModal.isOpen}
          onClose={addModal.onClose}
          title="add new Cabin"
        >
          <AddCabinForm onClose={addModal.onClose} />
        </AddModal>
      </SectionHeader>
      <Statistics statistics={statistics} />
      <CabinList />
    </div>
  );
}
