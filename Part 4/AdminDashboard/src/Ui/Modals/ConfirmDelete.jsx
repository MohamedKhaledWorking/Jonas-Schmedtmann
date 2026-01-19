import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";

export default function ConfirmDelete({
  isOpen,
  onClose,
  mutate,
  selectedGuest,
}) {
  return (
    <>
      <Modal
        backdrop={"blur"}
        isOpen={isOpen}
        onClose={onClose}
        className="text-center bg-secBgc"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-rose-500  pt-10">
                Are you sure you want to delete this ?
              </ModalHeader>
              <ModalBody>
                <p className="bg-mainBgc text-white font-bold text-xl my-1 p-4 rounded-lg capitalize">
                  you are deleting{" "}
                  <span className="text-theme capitalize">mohamed khaled</span>
                </p>
                <p className="bg-rose-500/15 p-4 rounded-lg text-rose-500 text-sm ">
                  once you delete this, you will not be able to recover it !!
                </p>
              </ModalBody>
              <ModalFooter className="space-x-3">
                <button
                  color="danger"
                  className="py-3.5 w-full mainBtn"
                  onClick={onClose}
                >
                  Close
                </button>
                <button
                  className="dangerBtn py-3.5 w-full"
                  onClick={() =>
                    mutate({
                      id: selectedGuest?.id,
                      name: selectedGuest?.full_name,
                    })
                  }
                >
                  Delete
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
