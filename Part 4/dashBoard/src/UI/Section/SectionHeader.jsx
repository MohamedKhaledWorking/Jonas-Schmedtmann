import React from "react";
import AddBtn from "../../components/Guest/AddBtn.jsx";
import { Button, ModalBody, ModalFooter, ModalHeader } from "@heroui/react";
import AddForm from "../../components/Guest/AddForm.jsx";

export default function SectionHeader({
  head = "",
  subHead = "",
  icon = "",
  buttonText = "",
}) {
  return (
    <div className="flex justify-between items-start md:items-center flex-col md:flex-row space-y-5 md:space-y-0">
      <div>
        <h1 className="text-5xl font-bold ">{head}</h1>
        <h2 className="text-base text-textSecClr mt-2 line-clamp-1">
          {subHead}
        </h2>
      </div>
      <div>
        <AddBtn icon={icon} buttonText={buttonText}>
          <ModalHeader className="flex flex-col gap-1 text-white mx-auto py-10 font-bold capitalize text-2xl">
            add guest
          </ModalHeader>
          <ModalBody> 
            <AddForm />
          </ModalBody>
        </AddBtn>
      </div>
    </div>
  );
}
