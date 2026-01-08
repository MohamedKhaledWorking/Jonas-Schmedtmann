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

export default function AddBtn({ icon, buttonText, children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("blur");

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
  };

  return (
    <>
      <div
        className="flex flex-wrap gap-3"
        onClick={() => handleOpen(backdrop)}
      >
        <button className="mainBtn">
          {icon}
          <span>{buttonText}</span>
        </button>
      </div>
      <Modal
        backdrop={backdrop}
        isOpen={isOpen}
        onClose={onClose}
        size="5xl"
        className="bg-secBgc"
      >
        <ModalContent>
          {(onClose) => (
            <>
              {children}
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose} className="w-full mainDeleteBtn bg-red-700 text-xl h-15">
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
