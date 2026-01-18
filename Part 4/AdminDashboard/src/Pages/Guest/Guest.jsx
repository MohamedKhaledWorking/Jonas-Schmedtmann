import { FilePlusCorner } from "lucide-react";
import SectionHeader from "../../Ui/Section/SectionHeader.jsx";
import Statistics from "../../Ui/Section/Statistics.jsx";
import { BadgeDollarSign, BedSingle, ScanEye, UserStar } from "lucide-react";
import GuestTable from "../../Components/Guest/GuestTable.jsx";
import { Button, useDisclosure } from "@heroui/react";
import AddGuestModal from "../../Components/Guest/AddGuestModal.jsx";
import GuestDetails from "../../Components/Guest/GuestDetails.jsx";

export default function Guest() {
  const AddModal = useDisclosure();
  function onAddingGuest() {
    AddModal.onOpen();
  }

  const statistics = [
    {
      title: "Total Gusts",
      value: "100",
      icon: <UserStar size={35} className="text-cyan-500" />,
    },
    {
      title: "Total reviews",
      value: "205",
      icon: <ScanEye size={35} className="text-emerald-500" />,
    },
    {
      title: "Total sales",
      value: "$460",
      icon: <BadgeDollarSign size={35} className="text-rose-500" />,
    },
    {
      title: "Total orders",
      value: "25",
      icon: <BedSingle size={35} className="text-indigo-500" />,
    },
  ];
  return (
    <>
      <SectionHeader
        head={"guest"}
        desc={"Manage guest profiles and preferences"}
      >
        <button
          className="mainBtn px-6 py-4 flex justify-center w-full "
          onClick={onAddingGuest}
        >
          <FilePlusCorner className="mr-2" /> Add Guest
        </button>
        <AddGuestModal isOpen={AddModal.isOpen} onClose={AddModal.onClose} />
      </SectionHeader>

      <GuestDetails />

      <Statistics statistics={statistics} />

      <GuestTable />
    </>
  );
}
