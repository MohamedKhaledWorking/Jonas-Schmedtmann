import { Drawer, DrawerContent, DrawerBody, Image, Link } from "@heroui/react";
import GuestDetailsImage from "./GuestDetailsImage.jsx";
import GuestDetailsContact from "./GuestDetailsContact.jsx";
import GuestDetailsInfo from "./GuestDetailsInfo.jsx";
import GuestDetailsStatistics from "./GuestDetailsStatistics.jsx";
import GuestDetailsNotes from "./GuestDetailsNotes.jsx";
import GuestDetailsHistory from "./GuestDetailsHistory.jsx";
import { useSelectedGuest } from "../../Context/SelectedGuestContext.jsx";

export default function GuestDetails({ isOpen, onOpenChange }) {
  const { selectedGuest, setSelectedGuest } = useSelectedGuest();

  return (
    <>
      <Drawer
        hideCloseButton
        backdrop="blur"
        classNames={{
          base: "sm:data-[placement=right]:m-2 sm:data-[placement=left]:m-2  rounded-medium bg-mainBgc text-textClr",
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerBody className="pt-16">
                <GuestDetailsImage />
                <div className="flex flex-col gap-2 py-4">
                  <h1 className="text-2xl font-bold leading-7 text-center mb-5">
                    {selectedGuest?.full_name}
                  </h1>
                  <div className="divide-y divide-lightBorder">
                    <GuestDetailsContact />
                    <GuestDetailsInfo />
                    <GuestDetailsStatistics />
                    <GuestDetailsNotes />
                    <GuestDetailsHistory />
                  </div>
                </div>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
