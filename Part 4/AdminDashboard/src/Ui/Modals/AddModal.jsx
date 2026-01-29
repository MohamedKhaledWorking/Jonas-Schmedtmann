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
  handleAdd,
}) {
  return (
    <>
      <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalContent className="bg-mainBgc text-textClr py-5" >
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 capitalize text-center text-2xl text-theme font-bold">
                {title}
              </ModalHeader>
              <ModalBody className="">{children}</ModalBody>
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
