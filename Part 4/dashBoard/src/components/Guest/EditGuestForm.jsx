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
import { SquarePen } from "lucide-react";
import EditForm from "./EditForm.jsx";

export default function EditGuestForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Button
          className="capitalize mainEditBtn w-20"
          variant="flat"
          onPress={() => handleOpen("blur")}
        >
          Edit
        </Button>
      </div>

      <Modal
        backdrop={"blur"}
        isOpen={isOpen}
        onClose={onClose}
        className="bg-secBgc text-textMainClr "
        size="5xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <EditForm />
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                  className="w-full mainDeleteBtn bg-red-700 text-xl h-15 px-0"
                >
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
