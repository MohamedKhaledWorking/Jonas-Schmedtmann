import { ImageUp } from "lucide-react";
import { useForm } from "react-hook-form";

import InputLabel from "../../Ui/Form/InputLabel.jsx";
import GuestInput from "./GuestInput.jsx";

import { useCreateGuest } from "../../Hooks/Guest/useCreateGuest.js";

export default function AddGuestForm({ onClose }) {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  
  const { mutate } = useCreateGuest();
  function onSubmit(newGuest) {
    mutate(newGuest, {
      onSuccess: () => onClose(),
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <GuestInput id="full_name" text="Full Name" errors={errors}>
          <input
            type="text"
            id="full_name"
            {...register("full_name", {
              required: "full name is required",
              minLength: {
                value: 3,
                message: "full name must be at least 3 characters",
              },
              maxLength: {
                value: 70,
                message: "full name must be at most 70 characters",
              },
            })}
            className="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            placeholder="mohamed"
          />
        </GuestInput>
        <GuestInput id="company" text="Company" errors={errors}>
          <input
            type="text"
            id="company"
            // {...register("company", {
            //   required: "company is required",
            // })}
            className="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            placeholder="tailAir"
          />
        </GuestInput>
        <GuestInput id="phone" text="Phone" errors={errors}>
          <input
            type="tel"
            id="phone"
            {...register("phone", {
              required: "phone is required",
              pattern: {
                value: /^01[0125]\d{8}$/,
                message: "Invalid Egyptian mobile number (e.g. 01012345678)",
              },
            })}
            className="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            placeholder="123-45-678"
          />
        </GuestInput>
        <GuestInput id="email" text="email" errors={errors}>
          <input
            type="email"
            id="email"
            {...register("email", { required: "email is required" })}
            className="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            placeholder="john.doe@company.com"
          />
        </GuestInput>
        <GuestInput id="total_stays" text="stays days" errors={errors}>
          <input
            type="number"
            id="total_stays"
            {...register("total_stays", {
              required: "stays is required",
              min: { value: 1, message: "stays must be at least 1 day" },
            })}
            className="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            placeholder="2"
            defaultValue={5}
          />
        </GuestInput>
        <GuestInput id="budget" text="budget" errors={errors}>
          <input
            type="number"
            id="budget"
            // {...register("budget", {
            //   required: "budget is required",
            //   min: { value: 1, message: "budget must be at least 1 dollar" },
            // })}
            className="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            placeholder="2"
            defaultValue={100}
          />
        </GuestInput>
        <div>
          <InputLabel id="country" text=" Select Guest Country" />
          <select
            id="country"
            {...register("country")}
            className="block w-full px-3 py-2.5 border border-lightBorder  text-sm rounded focus:rounded-xl duration-400  shadow-xs bg-secBgc"
          >
            <option value="egypt">Egypt</option>
            <option value="sudan">sudan</option>
            <option value="morocco">morocco</option>
            <option value="tunisia">tunisia</option>
            <option value="algeria">algeria</option>
            <option value="libya">libya</option>
          </select>
        </div>
        <div>
          <InputLabel id="level" text=" Select Guest Level" />
          <select
            id="level"
            {...register("vip_level")}
            className="block w-full px-3 py-2.5 border  border-lightBorder text-sm rounded focus:rounded-xl duration-400  shadow-xs bg-secBgc"
          >
            <option value="guest">Guest</option>
            <option value="regular">Regular</option>
            <option value="premium">Premium</option>
            <option value="vip">VIP</option>
            <option value="premium">premium</option>
          </select>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full border border-lightBorder border-dashed  rounded focus:rounded-xl duration-400 cursor-pointer"
        >
          <div className="flex flex-col items-center justify-center text-body pt-5 pb-6">
            <ImageUp className="w-8 h-8 mb-4" />
            <p className="mb-2 text-sm">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            {...register("avatar_url")}
          />
        </label>
      </div>
      <button className="mainBtn w-full py-3.5 mt-7">Create</button>
    </form>
  );
}
