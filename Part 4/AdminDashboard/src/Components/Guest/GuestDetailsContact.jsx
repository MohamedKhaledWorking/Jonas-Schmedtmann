import { Link } from "@heroui/react";
import { Mail, MailSearch, PhoneCall } from "lucide-react";
import React from "react";
import { useSelectedGuest } from "../../Context/SelectedGuestContext.jsx";

export default function GuestDetailsContact() {
  const { selectedGuest } = useSelectedGuest();
  return (
    <div className="pb-4 space-y-3">
      <p className="text-sm text-default-500 flex items-center ">
        <PhoneCall className="mr-2" /> {selectedGuest?.phone}
      </p>
      <p className="text-sm text-default-500 flex items-center ">
        <Mail className="mr-2" /> {selectedGuest?.email}
      </p>
      <Link
        className="text-default-400 flex items-center"
        href={`mailto:${selectedGuest?.email}`}
        size="sm"
      >
        <MailSearch className="mr-2" /> Contact the host
      </Link>
    </div>
  );
}
