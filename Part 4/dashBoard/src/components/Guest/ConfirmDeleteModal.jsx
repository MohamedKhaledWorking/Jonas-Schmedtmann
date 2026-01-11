import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../../services/guests.js";
import { toast } from "react-hot-toast";

export default function ConfirmDeleteModal({ name, id }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id) => deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["guests"]);
      toast.success(` ${name} deleted successfully`);
    },
    onError: () => {
      toast.error(`something went wrong on deleting ${name}`);
    },
  });

  function handleOpen() {
    onOpen();
  }
  function handleDelete(id) {
    mutation.mutate(id);
  }

  return (
    <>
      <div className="flex flex-wrap gap-3 mt-5">
        <Button
          className="capitalize mainDeleteBtn w-20  flex items-center justify-center "
          onPress={handleOpen}
        >
          delete
        </Button>
      </div>
      <Modal
        backdrop={"blur"}
        isOpen={isOpen}
        onClose={onClose}
        className="bg-secBgc text-textMainClr"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-center items-center py-8  gap-1 text-center">
                Are you sure you want to delete ?
              </ModalHeader>
              <ModalBody>
                <p className="text-red-500 bg-red-500/10 p-4 rounded-xl capitalize text-sm">
                  becareful !! once you delete this you can't get it back
                </p>
                <p>you are deleting the {name} from your guest list</p>
              </ModalBody>
              <ModalFooter className="pb-8 flex flex-col space-y-4">
                <Button
                  onPress={() => {
                    handleDelete(id);
                    onClose
                  }}
                  className="mainDeleteBtn w-full"
                >
                  Delete {name}
                </Button>
                <Button className=" mainBtn w-full" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
