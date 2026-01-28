import { ImageUp } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import GuestInput from "./GuestInput.jsx";
import { useEditGuest } from "../../Hooks/Guest/useEditGuest.js";
import { useSelectedGuest } from "../../Context/SelectedGuestContext.jsx";

export default function GuestEditForm({ onClose }) {
  const { selectedGuest } = useSelectedGuest();

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      full_name: selectedGuest?.full_name,
      email: selectedGuest?.email,
      phone: selectedGuest?.phone,
      address: selectedGuest?.address,
      country: selectedGuest?.country,
      level: selectedGuest?.level,
      stay_duration: selectedGuest?.stay_duration,
      spent_money: selectedGuest?.spent_money,
      avatar_url: selectedGuest?.avatar_url,
      id: selectedGuest?.id,
    },
  });

  const { errors } = formState;

  const { mutate } = useEditGuest();

  function onSubmit(data) {
    mutate(data, {
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
            className="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            placeholder="mohamed"
            {...register("full_name", {
              minLength: { value: 4, message: "min length is 4" },
              maxLength: { value: 20, message: "max length is 20" },
            })}
          />
        </GuestInput>
        <GuestInput id="email" text="email address" errors={errors}>
          <input
            type="tel"
            id="email"
            className="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            placeholder="123-45-678"
            {...register("email", {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
        </GuestInput>
        <GuestInput id="phone" text="phone number" errors={errors}>
          <input
            type="tel"
            id="phone"
            className="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            placeholder="123-45-678"
            {...register("phone", {
              pattern: {
                value: /^01[0125]\d{8}$/,
                message: "Invalid Egyptian mobile number (e.g. 01012345678)",
              },
            })}
          />
        </GuestInput>
        <GuestInput id="address" text="address" errors={errors}>
          <input
            type="text"
            id="address"
            className="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            {...register("address", {
              minLength: { value: 3, message: "min length is 3" },
            })}
          />
        </GuestInput>
        <GuestInput id="stay_duration" text="stays" errors={errors}>
          <input
            type="number"
            id="stay_duration"
            className="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            placeholder="123-45-678"
            {...register("stay_duration", {
              min: { value: 1, message: "min length is 1" },
            })}
          />
        </GuestInput>
        <GuestInput id="spent_money" text="spent" errors={errors}>
          <input
            type="number"
            id="spent_money"
            className="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            placeholder=""
            {...register("spent_money", {
              min: { value: 1, message: "min length is 1" },
            })}
          />
        </GuestInput>
        <div>
          <label htmlFor="country" className="block mb-2.5 text-sm  ">
            Select Guest Country
          </label>
          <select
            id="country"
            className="block w-full px-3 py-2.5 border border-lightBorder  text-sm rounded focus:rounded-xl duration-400  shadow-xs bg-secBgc"
            {...register("country")}
          >
            <option value={selectedGuest?.country}>
              {selectedGuest?.country}
            </option>
            <option value="egypt">Egypt</option>
            <option value="sudan">sudan</option>
            <option value="morocco">morocco</option>
            <option value="tunisia">tunisia</option>
            <option value="algeria">algeria</option>
            <option value="libya">libya</option>
          </select>
        </div>
        <div>
          <label htmlFor="level" className="block mb-2.5 text-sm  ">
            Select Guest Level
          </label>
          <select
            id="level"
            className="block w-full px-3 py-2.5 border  border-lightBorder text-sm rounded focus:rounded-xl duration-400  shadow-xs bg-secBgc"
            {...register("level")}
          >
            <option value={selectedGuest?.level ?? "guest"}>
              {selectedGuest?.level ?? "guest"}
            </option>

            <option value="guest">guest</option>
            <option value="regular">Regular</option>
            <option value="premium">Premium</option>
            <option value="vip">VIP</option>
            <option value="premium">premium</option>
            <option value="silver">silver</option>
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
            accept="image/*"
            {...register("avatar_url")}
          />
        </label>
      </div>
      <button type="submit" className="warningBtn w-full py-3.5 mt-5">
        Update Guest
      </button>
    </form>
  );
}
