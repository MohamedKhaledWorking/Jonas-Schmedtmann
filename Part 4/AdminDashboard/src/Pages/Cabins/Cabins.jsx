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
import Cabin from "../../Components/Cabins/Cabin.jsx";

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
  return (
    <div>
      <SectionHeader head={"cabins"} desc={"manage your cabins"}>
        <button className="mainBtn px-6 py-4 flex justify-center w-full ">
          <BedSingle className="mr-2" /> Add new cabin
        </button>
      </SectionHeader>
      <Statistics statistics={statistics} />
      <Cabin />
    </div>
  );
}
