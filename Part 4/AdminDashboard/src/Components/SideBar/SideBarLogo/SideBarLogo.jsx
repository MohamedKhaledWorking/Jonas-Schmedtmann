import { BedDouble } from "lucide-react";

export default function SideBarLogo() {
  return (
    <>
      <div className="border-b border-lightBorder pb-4">
        <div className="size-14  mx-auto rounded-full flex justify-center items-center  bg-theme/25">
          <BedDouble className="text-theme" />
        </div>
      </div>
    </>
  );
}
