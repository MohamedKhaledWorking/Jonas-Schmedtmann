import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";

export function ConfirmDeleteModal({ isOpen, onOpenChange, item, onConfirm }) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="opaque"
      classNames={{
        backdrop:
          "bg-linear-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Confirm delete
            </ModalHeader>

            <ModalBody>
              <p className="text-white/80">
                Are you sure you want to delete{" "}
                <span className="font-semibold text-white">
                  {item?.full_name ?? item?.name ?? "this item"}
                </span>
                ?
              </p>
              <p className="text-white/60 text-sm">
                This action cannot be undone.
              </p>
            </ModalBody>

            <ModalFooter>
              <Button variant="light" onPress={onClose}>
                Cancel
              </Button>

              <Button
                color="danger"
                onPress={async () => {
                  await onConfirm?.(item);
                  onClose();
                }}
              >
                Delete
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
