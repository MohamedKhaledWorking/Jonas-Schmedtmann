import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/react";

export default function AddModal({
  isOpen,
  onClose,
  title = "Modal Title",
  children,
}) {
  return (
    <>
      <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose} size="5xl">
        <ModalContent className="bg-mainBgc text-textClr py-5">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 capitalize text-center text-2xl text-theme font-bold">
                {title}
              </ModalHeader>
              <ModalBody onClose={onClose}>{children}</ModalBody>
              <ModalFooter className="gap-5">
                <button
                  onClick={onClose}
                  className="dangerBtn w-full px-4 py-3.5"
                >
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
