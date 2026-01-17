import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";

export default function ConfirmDelete({ isOpen, onClose }) {
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
                <p className="bg-rose-500/15 p-4 rounded-lg text-rose-500 text-sm ">
                  once you delete this, you will not be able to recover it !!
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" className="w-full" onPress={onClose}>
                  Close
                </Button>
                <Button
                  className="bg-theme text-white w-full"
                  onPress={onClose}
                >
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
