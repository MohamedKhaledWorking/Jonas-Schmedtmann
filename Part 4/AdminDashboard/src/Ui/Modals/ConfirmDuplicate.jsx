import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/react";
import { useSelectedGuest } from "../../Context/SelectedGuestContext.jsx";

export default function ConfirmDuplicate({ isOpen, onClose, mutate }) {
  const { selectedGuest } = useSelectedGuest();

  function handleDuplicate() {
    const newGuest = {
      email: selectedGuest?.email,
      phone: selectedGuest?.phone,
      address: selectedGuest?.address,
      avatar_url: selectedGuest?.avatar_url,
      country: selectedGuest?.country,
      level: selectedGuest?.level,
      stay_duration: selectedGuest?.stay_duration,
      spent_money: selectedGuest?.spent_money,
      full_name: selectedGuest?.full_name + " Copy",
    };
    mutate(newGuest, {
      onSuccess: () => onClose(),
    });
  }
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
              <ModalHeader className="flex flex-col gap-1 text-theme  pt-10">
                Are you sure you want to duplicate it ?
              </ModalHeader>
              <ModalBody>
                <p className="bg-mainBgc text-white font-bold text-xl my-1 p-4 rounded-lg capitalize">
                  you are duplicating{" "}
                  <span className="text-theme capitalize">
                    {selectedGuest?.full_name}
                  </span>
                </p>
                <p className="bg-theme/15 p-4 rounded-lg text-theme text-sm ">
                  you are about to duplicate this guest !!
                </p>
              </ModalBody>
              <ModalFooter className="space-x-3">
                <button
                  color="danger"
                  className="py-3.5 w-full  dangerBtn"
                  onClick={onClose}
                >
                  Close
                </button>
                <button
                  className="mainBtn py-3.5 w-full"
                  onClick={handleDuplicate}
                >
                  Duplicate
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
