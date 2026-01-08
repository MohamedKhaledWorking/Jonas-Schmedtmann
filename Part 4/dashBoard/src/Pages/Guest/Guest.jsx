import { BadgePlus } from "lucide-react";
import React from "react";
import SectionHeader from "../../UI/Section/SectionHeader.jsx";
import GuestTable from "../../components/Guest/GuestTable.jsx";

export default function Guest() {
  return (
    <>
      <SectionHeader
        head="Guest"
        subHead=" Manage guest profiles and preferences"
        buttonText="add guest"
        icon={<BadgePlus />}
      />

      <GuestTable />
    </>
  );
}
