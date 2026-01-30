import { Images, ImageUp } from "lucide-react";
import Input from "../../Ui/Form/Input.jsx";
import useHotels from "../../Hooks/Cabin/useHotels.js";
import { useForm } from "react-hook-form";
import useAddCabin from "../../Hooks/Cabin/useAddCabin.js";

export default function AddCabinForm({ onClose }) {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const { hotels } = useHotels();
  const { mutate } = useAddCabin();

  function handleSubmitForm(data) {
    mutate(data, {
      onSuccess: () => {
        onClose();
      },
    });
  }
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <div className="grid gap-x-6 gap-y-2 mb-6 md:grid-cols-2">
        <Input id="name" text="cabin Name" errors={errors}>
          <input
            type="text"
            id="name"
            className="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            placeholder="room 123"
            {...register("name", { required: "cabin name is required" })}
            defaultValue={"room 123"}
          />
        </Input>
        <Input id="hotel_id" text=" Select Hotel name" errors={errors}>
          <select
            id="hotel_id"
            className="block w-full px-3 py-2.5 border border-lightBorder  text-sm rounded focus:rounded-xl duration-400  shadow-xs bg-secBgc"
            defaultValue={hotels && hotels[0]?.id}
            {...register("hotel_id", { required: "hotel name is required" })}
          >
            {hotels?.map((hotel) => {
              return (
                <option value={hotel?.id} key={hotel?.id}>
                  {hotel?.name}
                </option>
              );
            })}
          </select>
        </Input>
        <Input id="price_per_night" text="price" errors={errors}>
          <div>
            <div className="flex items-center rounded-md pl-3 border border-lightBorder">
              <div className="shrink-0 text-base text-gray-400 select-none sm:text-sm/6">
                $
              </div>
              <input
                id="price_per_night"
                defaultValue="55"
                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                {...register("price_per_night", {
                  required: "price is required",
                })}
              />
              <div className="grid shrink-0 grid-cols-1 ">
                <select
                  id="currency"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-800 py-1.5 pr-7 pl-3 text-base text-gray-400  sm:text-sm/6"
                  {...register("currency", {
                    required: "currency  is required",
                  })}
                >
                  <option>EGP</option>
                  <option>USD</option>
                  <option>EUR</option>
                </select>
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  data-slot="icon"
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                >
                  <path
                    d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Input>
        <Input id="cleaning_fee" text="cleaning fee" errors={errors}>
          <input
            type="number"
            id="cleaning_fee"
            className="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            defaultValue={150}
            {...register("cleaning_fee", {
              required: "cleaning fee price is required",
            })}
          />
        </Input>
        <Input id="is_active" text=" is active">
          <select
            id="is_active"
            className="block w-full px-3 py-2.5 border border-lightBorder  text-sm rounded focus:rounded-xl duration-400  shadow-xs bg-secBgc"
            {...register("is_active", { required: "cabin status is required" })}
          >
            <option value="TRUE">true</option>
            <option value="FALSE">false</option>
          </select>
        </Input>
        <Input id="status" text=" Select cabin status">
          <select
            id="status"
            className="block w-full px-3 py-2.5 border  border-lightBorder text-sm rounded focus:rounded-xl duration-400  shadow-xs bg-secBgc"
            {...register("status", { required: "cabin status is required" })}
          >
            <option value="available">available</option>
            <option value="occupied">occupied</option>
            <option value="maintenance">maintenance</option>
          </select>
        </Input>
      </div>
      <div className="grid gap-x-6 gap-y-2 mb-6 md:grid-cols-3">
        <Input id="max_guests" text="max guests" errors={errors}>
          <input
            type="number"
            id="max_guests"
            className="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            defaultValue={3}
            {...register("max_guests", {
              required: "max guests capacity is required",
            })}
          />
        </Input>
        <Input id="room_size" text="room size" errors={errors}>
          <input
            type="number"
            id="room_size"
            className="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            defaultValue={50}
            {...register("room_size", {
              required: "room size name is required",
            })}
          />
        </Input>
        <Input id="beds_count" text="beds count" errors={errors}>
          <input
            type="number"
            id="beds_count"
            className="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            defaultValue={3}
            {...register("beds_count", {
              required: "beds count is required",
            })}
          />
        </Input>
      </div>
      <div className="grid gap-x-6 gap-y-2 mb-6 md:grid-cols-3">
        <Input id="view" text="view" errors={errors?.location}>
          <input
            type="text"
            id="view"
            className="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            defaultValue={"garden"}
            {...register("location.view", {
              required: "cabin view is required",
            })}
          />
        </Input>
        <Input id="wing" text="wing" errors={errors?.location}>
          <input
            type="text"
            id="wing"
            className="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            defaultValue={"B"}
            {...register("location.wing", {
              required: "cabin wing is required",
            })}
          />
        </Input>
        <Input id="floor" text="floor" errors={errors?.location}>
          <input
            type="text"
            id="floor"
            className="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            defaultValue={"5"}
            {...register("location.floor", {
              required: "cabin floor is required",
            })}
          />
        </Input>
      </div>
      <p className="mb-3 font-bold text-theme text-2xl pb-2 text-center capitalize">
        plans
      </p>
      <div className="grid gap-x-6 gap-y-2 mb-6 md:grid-cols-3">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="flex"
            className="mr-2 w-3.5 h-3.5 accent-theme"
            {...register("rate_plans.isFlex")}
          />
          <label htmlFor="flex" className="capitalize  text-lg">
            flex
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="advanced"
            className="mr-2 w-3.5 h-3.5 accent-theme"
            {...register("rate_plans.isAdvanced")}
          />
          <label htmlFor="advanced" className="capitalize  text-lg">
            advanced
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="romantic"
            className="mr-2 w-3.5 h-3.5 accent-theme"
            {...register("rate_plans.isRomantic")}
          />
          <label htmlFor="romantic" className="capitalize  text-lg">
            romantic
          </label>
        </div>
      </div>
      <p className="mb-3 font-bold text-theme text-2xl pb-2 text-center capitalize">
        features
      </p>
      <div className="grid gap-x-6 gap-y-2 mb-6 md:grid-cols-7">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="ac"
            className="mr-2 w-3.5 h-3.5 accent-theme"
            {...register("features.ac")}
          />
          <label htmlFor="ac" className="capitalize  text-lg">
            ac
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="tv"
            className="mr-2 w-3.5 h-3.5 accent-theme"
            {...register("features.tv")}
          />
          <label htmlFor="tv" className="capitalize  text-lg">
            tv
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="wifi"
            className="mr-2 w-3.5 h-3.5 accent-theme"
            {...register("features.wifi")}
          />
          <label htmlFor="wifi" className="capitalize  text-lg">
            wifi
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="minibar"
            className="mr-2 w-3.5 h-3.5 accent-theme"
            {...register("features.minibar")}
          />
          <label htmlFor="minibar" className="capitalize  text-lg">
            minibar
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="bathrooms"
            className="mr-2 w-3.5 h-3.5 accent-theme"
            {...register("features.bathrooms")}
          />
          <label htmlFor="bathrooms" className="capitalize  text-lg">
            bathrooms
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="singleBed"
            className="mr-2 w-3.5 h-3.5 accent-theme"
            {...register("features.singleBed")}
          />
          <label htmlFor="singleBed" className="capitalize  text-lg">
            single
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="doubleBed"
            className="mr-2 w-3.5 h-3.5 accent-theme"
            {...register("features.doubleBed")}
          />
          <label htmlFor="doubleBed" className="capitalize  text-lg">
            double
          </label>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full border border-lightBorder border-dashed  rounded focus:rounded-xl duration-400 cursor-pointer"
        >
          <div className="flex flex-col items-center justify-center text-body pt-2 pb-3">
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
            {...register("image")}
          />
        </label>
      </div>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-files"
          className="flex flex-col items-center justify-center w-full border border-lightBorder border-dashed  rounded focus:rounded-xl duration-400 cursor-pointer"
        >
          <div className="flex flex-col items-center justify-center text-body pt-2 pb-3">
            <Images className="w-8 h-8 mb-4" />
            <p className="mb-2 text-sm">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input
            id="dropzone-files"
            type="file"
            className="hidden"
            accept="image/*"
            multiple
            {...register("images")}
          />
        </label>
      </div>
      <button className="mainBtn w-full py-3.5 mt-7">Create</button>
    </form>
  );
}
