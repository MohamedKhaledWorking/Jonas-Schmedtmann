import React from "react";
import ConfirmDelete from "../../Ui/Modals/ConfirmDelete.jsx";
import { useDisclosure } from "@heroui/react";
import EditModal from "./EditGuestModal.jsx";
import GuestDetails from "./GuestDetails.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteGuests } from "../../Services/guest.js";
import toast from "../../Ui/Toast/Toast.jsx";
import GuestTableBodyRow from "./GuestTableBodyRow.jsx";

export default function GuestTableBody({ guests }) {
  const [selectedGuest, setSelectedGuest] = React.useState(null);

  const deleteModal = useDisclosure();
  const editModal = useDisclosure();
  const DetailsModal = useDisclosure();

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ id }) => deleteGuests(id),
    onSuccess: (_, { name }) => {
      queryClient.invalidateQueries({
        queryKey: ["guests"],
      });
      deleteModal.onClose();
      toast({
        title: "Guest deleted successfully",
        description: `${name} deleted successfully`,
        theme: "theme",
      });
    },
    onError: (err) => {
      toast({
        title: "Something went wrong on deleting guest",
        description: `${err.message}`,
        theme: "rose",
      });
    },
  });

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
      />
    </>
  );
}
