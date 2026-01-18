import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";
import GuestEditForm from "./GuestEditForm.jsx";

export default function EditModal({ isOpen, onClose }) {
  return (
    <>
      <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose} className="bg-secBgc text-textClr" size="4xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-3xl text-warning text-center my-7 font-bold">
                Edit Guest
              </ModalHeader>
              <ModalBody>
                <GuestEditForm />
              </ModalBody>
              <ModalFooter className="space-x-3">
                <button onClick={onClose} className="w-full dangerBtn py-3.5">
                  Close
                </button>
                <button color="primary" className="w-full warningBtn py-3.5" onClick={onClose}>
                  Edit
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
