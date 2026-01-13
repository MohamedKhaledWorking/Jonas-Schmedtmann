import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Checkbox,
  Link,
} from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../../services/guests.js";
import GuestDetailsHeader from "./GuestDetailsHeader.jsx";
import GuestDetailsContact from "./GuestDetailsContact.jsx";
import GuestDetailsHistory from "./GuestDetailsHistory.jsx";

export default function GuestDetails({ isOpen, onOpenChange, guestId }) {
  const { data, isLoading } = useQuery({
    queryKey: ["guest", guestId],
    queryFn: () => getUserById(guestId),
  });

  return (
    <>
      <Drawer
        backdrop={"blur"}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="2xl"
      >
        {isLoading ? (
          <div className=" bg-red-500 w-full h-screen"></div>
        ) : (
          <DrawerContent className=" text-textMainClr bg-mainBgc pe-6">
            {(onClose) => (
              <>
                <DrawerHeader className="flex flex-col gap-1 border-b lightBorder bg-secBgc">
                  <GuestDetailsHeader />
                </DrawerHeader>
                <DrawerBody>
                  <GuestDetailsContact />
                  <GuestDetailsHistory />
                </DrawerBody>
                <DrawerFooter>
                  <Button
                    color="danger"
                    variant="flat"
                    onPress={onClose}
                    className="w-full"
                  >
                    Close
                  </Button>
                </DrawerFooter>
              </>
            )}
          </DrawerContent>
        )}
      </Drawer>
    </>
  );
}

