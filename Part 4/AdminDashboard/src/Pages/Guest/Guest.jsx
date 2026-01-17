import { FilePlusCorner } from "lucide-react";
import SectionHeader from "../../Ui/Section/SectionHeader.jsx";
import Statistics from "../../Ui/Section/Statistics.jsx";
import { BadgeDollarSign, BedSingle, ScanEye, UserStar } from "lucide-react";
import GuestTable from "../../Components/Guest/GuestTable.jsx";

export default function Guest() {
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
        icon={<FilePlusCorner className="mr-2" />}
      />

      <Statistics statistics={statistics} />
      
      <GuestTable />
    </>
  );
}
