import React from "react";
import ConfirmDelete from "../../Ui/Modals/ConfirmDelete.jsx";
import { useDisclosure } from "@heroui/react";
import EditModal from "./EditGuestModal.jsx";
import GuestDetails from "./GuestDetails.jsx";
import GuestTableBodyRow from "./GuestTableBodyRow.jsx";
import ConfirmDuplicate from "../../Ui/Modals/ConfirmDuplicate.jsx";
import { useDuplicateGuest } from "../../Hooks/Guest/useDuplicateGuest.js";

export default function GuestTableBody({ guests }) {
  const deleteModal = useDisclosure();
  const editModal = useDisclosure();
  const DetailsModal = useDisclosure();
  const DuplicateModal = useDisclosure();

  const { mutate } = useDuplicateGuest();

  return (
    <>
      <tbody className="divide-y divide-lightBorder bg-mainBgc ">
        {guests?.map((guest) => {
          return (
            <GuestTableBodyRow
              guest={guest}
              key={guest?.id}
              editModal={editModal}
              deleteModal={deleteModal}
              DetailsModal={DetailsModal}
              DuplicateModal={DuplicateModal}
            />
          );
        })}
      </tbody>

      <EditModal isOpen={editModal.isOpen} onClose={editModal.onClose} />
      <ConfirmDelete
        isOpen={deleteModal.isOpen}
        onClose={deleteModal.onClose}
      />
      <GuestDetails
        isOpen={DetailsModal.isOpen}
        onOpenChange={DetailsModal.onOpenChange}
      />
      <ConfirmDuplicate
        isOpen={DuplicateModal.isOpen}
        onClose={DuplicateModal.onClose}
        mutate={mutate}
      />
    </>
  );
}
