import { ImageUp } from "lucide-react";
import React from "react";

export default function GuestEditForm() {
  return (
    <form>
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label for="Full_name" class="block mb-2.5 text-sm  ">
            Full Name
          </label>
          <input
            type="text"
            id="Full_name"
            class="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            placeholder="mohamed"
            required
          />
        </div>
        <div>
          <label for="company" class="block mb-2.5 text-sm  ">
            Company
          </label>
          <input
            type="text"
            id="company"
            class="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            placeholder="tailAir"
            required
          />
        </div>
        <div>
          <label for="phone" class="block mb-2.5 text-sm  ">
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            class="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            placeholder="123-45-678"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />
        </div>
        <div>
          <label for="email" class="block mb-2.5 text-sm  ">
            Email address
          </label>
          <input
            type="email"
            id="email"
            class="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div>
          <label for="stays" class="block mb-2.5 text-sm  ">
            Stays Days
          </label>
          <input
            type="number"
            id="stays"
            class="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            placeholder="2"
            required
          />
        </div>
        <div>
          <label for="budget" class="block mb-2.5 text-sm  ">
            Budget
          </label>
          <input
            type="number"
            id="budget"
            class="border border-lightBorder py-3 px-4  text-sm rounded focus:rounded-xl duration-400  block w-full shadow-xs"
            placeholder=""
            required
          />
        </div>
        <div>
          <label for="country" class="block mb-2.5 text-sm  ">
            Select Guest Country
          </label>
          <select
            id="country"
            class="block w-full px-3 py-2.5 border border-lightBorder  text-sm rounded focus:rounded-xl duration-400  shadow-xs bg-secBgc"
          >
            <option selected>Choose a Country</option>
            <option value="egypt">Egypt</option>
            <option value="sudan">sudan</option>
            <option value="morocco">morocco</option>
            <option value="tunisia">tunisia</option>
            <option value="algeria">algeria</option>
            <option value="libya">libya</option>
          </select>
        </div>
        <div>
          <label for="level" class="block mb-2.5 text-sm  ">
            Select Guest Level
          </label>
          <select
            id="level"
            class="block w-full px-3 py-2.5 border  border-lightBorder text-sm rounded focus:rounded-xl duration-400  shadow-xs bg-secBgc"
          >
            <option selected>Choose a level</option>
            <option value="guest">Guest</option>
            <option value="regular">Regular</option>
            <option value="premium">Premium</option>
            <option value="vip">VIP</option>
            <option value="premium">premium</option>
          </select>
        </div>
      </div>
      <div class="flex items-center justify-center w-full">
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-full border border-lightBorder border-dashed  rounded focus:rounded-xl duration-400 cursor-pointer"
        >
          <div class="flex flex-col items-center justify-center text-body pt-5 pb-6">
            <ImageUp className="w-8 h-8 mb-4" />
            <p class="mb-2 text-sm">
              <span class="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p class="text-xs">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input id="dropzone-file" type="file" class="hidden" />
        </label>
      </div>
    </form>
  );
}
