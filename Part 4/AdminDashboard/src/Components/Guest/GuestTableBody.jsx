import React from "react";
import ConfirmDelete from "../../Ui/Modals/ConfirmDelete.jsx";
import { useDisclosure } from "@heroui/react";
import EditModal from "./EditGuestModal.jsx";
import GuestDetails from "./GuestDetails.jsx";
import GuestTableBodyRow from "./GuestTableBodyRow.jsx";
import { useDeleteGuest } from "../../Hooks/Guest/useDeleteGuest.js";
import ConfirmDuplicate from "../../Ui/Modals/ConfirmDuplicate.jsx";
import { useDuplicateGuest } from "../../Hooks/Guest/useDuplicateGuest.js";

export default function GuestTableBody({ guests }) {
  const [selectedGuest, setSelectedGuest] = React.useState(null);

  const deleteModal = useDisclosure();
  const editModal = useDisclosure();
  const DetailsModal = useDisclosure();
  const DuplicateModal = useDisclosure();

  const { mutation } = useDeleteGuest();
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
              setSelectedGuest={setSelectedGuest}
            />
          );
        })}
      </tbody>

      <EditModal
        isOpen={editModal.isOpen}
        onClose={editModal.onClose}
        selectedGuest={selectedGuest}
      />
      <ConfirmDelete
        isOpen={deleteModal.isOpen}
        onClose={deleteModal.onClose}
        mutate={mutation.mutate}
        selectedGuest={selectedGuest}
      />
      <GuestDetails
        isOpen={DetailsModal.isOpen}
        onOpenChange={DetailsModal.onOpenChange}
        selectedGuest={selectedGuest}
      />
      <ConfirmDuplicate
        isOpen={DuplicateModal.isOpen}
        onClose={DuplicateModal.onClose}
        selectedGuest={selectedGuest}
        mutate={mutate}
      />
    </>
  );
}
