import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/react";
import AddGuestForm from "./AddGuestForm.jsx";

export default function AddGuestModal({ isOpen, onClose }) {
  return (
    <>
      <Modal
        backdrop={"blur"}
        isOpen={isOpen}
        onClose={onClose}
        className="bg-secBgc  py-5 text-textClr"
        size="4xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center font-bold text-theme text-3xl">
                Add New Guest
              </ModalHeader>
              <ModalBody className="mt-5">
                <AddGuestForm onClose={onClose} />
              </ModalBody>
              <ModalFooter >
                <button className="w-full dangerBtn py-3.5" onClick={onClose}>
                  Close
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
