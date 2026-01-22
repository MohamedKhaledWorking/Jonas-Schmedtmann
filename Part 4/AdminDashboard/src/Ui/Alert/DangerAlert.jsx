import React from "react";
import { Alert } from "@heroui/react";

export default function DangerAlert({ message }) {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col w-full">
        <div className="w-full flex items-center mt-3">
          <Alert
            color={"danger"}
            className="bg-rose/10"
            classNames={{
              iconWrapper: "bg-rose/15 border border-rose/50 text-white",
            }}
            title={message}
            variant="bordered"
          />
        </div>
      </div>
    </div>
  );
}
