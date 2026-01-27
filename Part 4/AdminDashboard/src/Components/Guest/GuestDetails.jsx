import { Drawer, DrawerContent, DrawerBody, Image, Link } from "@heroui/react";
import { Mail, MailSearch, MapPinHouse, PhoneCall } from "lucide-react";
import { formatToDayMonthYear } from "../../Utils/helper.js";

export default function GuestDetails({ isOpen, onOpenChange, selectedGuest }) {
  return (
    <>
      <Drawer
        hideCloseButton
        backdrop="blur"
        classNames={{
          base: "sm:data-[placement=right]:m-2 sm:data-[placement=left]:m-2  rounded-medium bg-mainBgc text-textClr",
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerBody className="pt-16">
                <div className="flex w-full justify-center items-center pt-4 capitalize">
                  <Image
                    isBlurred
                    isZoomed
                    alt="Event image"
                    className="aspect-square w-full hover:scale-110"
                    height={300}
                    src={selectedGuest?.avatar_url}
                  />
                </div>
                <div className="flex flex-col gap-2 py-4">
                  <h1 className="text-2xl font-bold leading-7 text-center mb-5">
                    {selectedGuest?.full_name}
                  </h1>
                  <div className="divide-y divide-lightBorder">
                    <div className="pb-4 space-y-3">
                      <p className="text-sm text-default-500 flex items-center ">
                        <PhoneCall className="mr-2" /> {selectedGuest?.phone}
                      </p>
                      <p className="text-sm text-default-500 flex items-center ">
                        <Mail className="mr-2" /> {selectedGuest?.email}
                      </p>
                      <Link
                        className="text-default-400 flex items-center"
                        href={`mailto:${selectedGuest?.email}`}
                        size="sm"
                      >
                        <MailSearch className="mr-2" /> Contact the host
                      </Link>
                    </div>
                    <div className="py-4 space-y-3">
                      <div className="flex gap-3 items-center">
                        <div className="flex-none border-1 border-default-200/50 rounded-small text-center w-11 overflow-hidden">
                          <div className="text-tiny bg-default-100 py-0.5 text-default-500">
                            Nov
                          </div>
                          <div className="flex items-center justify-center font-semibold text-medium h-6 text-default-500">
                            19
                          </div>
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <p className="text-medium  font-medium">
                            Tuesday, November 19
                          </p>
                          <p className="text-small text-default-500">
                            5:00 PM - 9:00 PM PST
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 items-center">
                        <div className="flex items-center justify-center border-1 border-default-200/50 rounded-small w-11 h-11">
                          <MapPinHouse />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <p className="text-small text-default-500">
                            {selectedGuest?.country} {selectedGuest?.address}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="py-4 flex items-center justify-around  capitalize">
                      <div className="text-center px-1 py-4 space-y-1.5">
                        <p className="text-2xl font-bold ">
                          {" "}
                          {selectedGuest?.stay_duration}
                        </p>
                        <p className="text-textSecClr text-sm">total stays</p>
                      </div>
                      <div className="text-center px-1 py-4 space-y-1.5">
                        <p className="text-2xl font-bold ">
                          ${selectedGuest?.spent_money}
                        </p>
                        <p className="text-textSecClr text-sm">total spent</p>
                      </div>
                      <div className="text-center px-1 py-4 ">
                        <div className="bg-amber-400/15 text-amber-400 px-5 py-1.5 rounded-full">
                          {selectedGuest?.level}
                        </div>
                      </div>
                    </div>
                    <div className="py-4 flex flex-col gap-3">
                      <div className="flex flex-col gap-3 items-start">
                        <span className="text-medium font-medium">
                          About the Guest
                        </span>
                        <div className="text-medium text-default-500 flex flex-col gap-2">
                          {selectedGuest?.notes.map((note) => {
                            return (
                              <p className="text-sm" key={note?.at}>
                                {note?.text}
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="py-4">
                      <h1 className="font-bold text-lg">Booking History</h1>
                      {selectedGuest?.bookings.map((booking) => {
                        return (
                          <div
                            className="border border-lightBorder p-4 mt-4 rounded-2xl text-sm"
                            key={booking?.id}
                          >
                            <div className="flex justify-between items-center">
                              <p className="text-xs text-textSecClr">
                                {booking?.id}
                              </p>
                              <div className="bg-green-500/15 text-green-500 px-2 py-0.5 rounded-full">
                                {booking?.status}
                              </div>
                            </div>
                            <p className="my-1.5 ">
                              {booking?.room?.name_or_number} /{" "}
                              {booking?.room?.hotel?.name} /{" "}
                              {booking?.room?.hotel?.city}
                            </p>
                            <p className="text-textSecClr my-1.5 text-xs">
                              {formatToDayMonthYear(booking?.check_in_date)} →{" "}
                              {formatToDayMonthYear(booking?.check_out_date)}
                            </p>
                            <p className="text-base font-medium mt-2">
                              ${selectedGuest?.spent_money} for{" "}
                              {booking?.nights} days
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
