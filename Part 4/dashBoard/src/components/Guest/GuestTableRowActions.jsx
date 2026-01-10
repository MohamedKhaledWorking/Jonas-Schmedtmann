import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import React from "react";
import ConfirmDeleteModal from "./ConfirmDeleteModal.jsx";
import EditGuestForm from "./EditGuestForm.jsx";

export default function GuestTableRowActions({ guestId }) {
  const [isDeleting, setIsDeleting] = React.useState(false);

  function handelIsDeleting() {
    setIsDeleting(true);
  }

  return (
    <>
      <div >
        <EditGuestForm />
        <ConfirmDeleteModal />
      </div>
    </>
  );
}
