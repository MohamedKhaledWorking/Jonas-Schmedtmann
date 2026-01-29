import React from "react";
import InputLabel from "./InputLabel.jsx";
import DangerAlert from "../Alert/DangerAlert.jsx";

export default function Input({
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
