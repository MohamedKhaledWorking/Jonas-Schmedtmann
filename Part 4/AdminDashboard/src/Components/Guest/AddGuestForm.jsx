import { ImageUp } from "lucide-react";
import DangerAlert from "../../Ui/Alert/Alert.jsx";
import { useForm } from "react-hook-form";
import { createGuests } from "../../Services/guest.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Toast from "../../Ui/Toast/Toast.jsx";

export default function AddGuestForm({ onClose }) {
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: createGuests,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["guests"] });
      Toast({
        title: "Guest added successfullY",
        description: "Guest added successfullY",
      });
      onClose();
    },
    onError: (err) => {
      Toast({ title: "Something went wrong", description: `${err.message}` });
    },
  });

  function onSubmit(newGuest) {
    mutate(newGuest);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label htmlFor="Full_name" className="block mb-2.5 text-sm  ">
            Full Name
          </label>
          <input
            type="text"
            id="Full_name"
            {...register("full_name")}
            className="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            placeholder="mohamed"
          />
          <DangerAlert />
        </div>

        <div>
          <label htmlFor="company" className="block mb-2.5 text-sm  ">
            Company
          </label>
          <input
            type="text"
            id="company"
            // {...register("company")}
            className="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            placeholder="tailAir"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-2.5 text-sm  ">
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone")}
            className="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            placeholder="123-45-678"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2.5 text-sm  ">
            Email address
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            placeholder="john.doe@company.com"
          />
        </div>
        <div>
          <label htmlFor="stays" className="block mb-2.5 text-sm  ">
            Stays Days
          </label>
          <input
            type="number"
            id="stays"
            {...register("total_stays")}
            className="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            placeholder="2"
          />
        </div>
        <div>
          <label htmlFor="budget" className="block mb-2.5 text-sm  ">
            Budget
          </label>
          <input
            type="number"
            id="budget"
            {...register("total_spent")}
            className="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            placeholder=""
          />
        </div>
        <div>
          <label htmlFor="country" className="block mb-2.5 text-sm  ">
            Select Guest Country
          </label>
          <select
            id="country"
            {...register("country")}
            className="block w-full px-3 py-2.5 border border-lightBorder  text-sm rounded focus:rounded-xl duration-400  shadow-xs bg-secBgc"
          >
            <option value="egypt" selected>
              Egypt
            </option>
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
            {...register("vip_level")}
            className="block w-full px-3 py-2.5 border  border-lightBorder text-sm rounded focus:rounded-xl duration-400  shadow-xs bg-secBgc"
          >
            <option value="guest" selected>
              Guest
            </option>
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
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
      <button className="mainBtn w-full py-3.5">Create</button>
    </form>
  );
}
