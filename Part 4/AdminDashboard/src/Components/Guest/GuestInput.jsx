import React from "react";
import InputLabel from "../../Ui/Form/InputLabel.jsx";
import DangerAlert from "../../Ui/Alert/DangerAlert.jsx";

export default function GuestInput({
  id = "",
  text = "label text",
  children,
  errors = {},
}) {

  return (
    <div>
      <InputLabel id={id} text={text} />
      {children}
      {errors[id] && <DangerAlert message={errors[id]?.message} />}
    </div>
  );
}
