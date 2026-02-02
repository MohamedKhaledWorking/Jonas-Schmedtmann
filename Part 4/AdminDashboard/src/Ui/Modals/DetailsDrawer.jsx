import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
} from "@heroui/react";

export default function DetailsDrawer({ isOpen, onOpenChange, children }) {
  return (
    <>
      <Drawer
        backdrop={"blur"}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="bg-mainBgc text-textClr"
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerBody>{children}</DrawerBody>
              <DrawerFooter>
                <Button className="dangerBtn w-full" onPress={onClose}>
                  Close
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
