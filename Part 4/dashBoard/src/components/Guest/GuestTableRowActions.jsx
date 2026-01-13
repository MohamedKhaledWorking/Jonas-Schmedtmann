import React from "react";
import ConfirmDeleteModal from "./ConfirmDeleteModal.jsx";
import EditGuestForm from "./EditGuestForm.jsx";

export default function GuestTableRowActions({ guest }) {
  return (
    <>
      <div className="flex items-center space-x-4">
        <EditGuestForm />
        <ConfirmDeleteModal id={guest.id} name={guest.full_name} />
      </div>
    </>
  );
}
