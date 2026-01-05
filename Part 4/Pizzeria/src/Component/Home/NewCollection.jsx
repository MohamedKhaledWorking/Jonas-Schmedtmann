import React from "react";
import HeaderIcon from "../../UI/HeaderIcon.jsx";
import { MoveLeft, MoveRight, Smile } from "lucide-react";
import PizzaCard from "./PizzaCard.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/element/bundle";
import "swiper/element";
import { useLoaderData } from "react-router-dom";

export default function NewCollection() {
  const { newCollection } = useLoaderData();
  return (
    <>
      <section className="bg-secBgc dark:bg-secBgcDark text-textClr dark:text-textClrDark py-12 my-20 ">
        <div className="container mx-auto">
          <div className="flex justify-center items-center flex-col ">
            <HeaderIcon
              text={"Fresh From The Kitchen"}
              icon={<Smile />}
              bgColor={"cyan-500/20"}
              textColor={"cyan-500"}
            />
            <p className="text-4xl text-textClr dark:text-textClrDark font-bold font-main my-6 text-center">
              New Collection
            </p>
            <p className="text-textSecClr dark:text-textSecClrDark text-lg md:w-full w-4/5 text-center">
              Our chefs have been busy crafting new flavors. Be the first to
              taste these culinary masterpieces.
            </p>
          </div>
          <div className="my-12 w-full ">
            <div className="flex items-center justify-end gap-4 mb-5 px-8">
              <div className="border p-3 rounded-full swiper-prev cursor-pointer hover:border-orange-500 hover:text-orange-500">
                <MoveLeft className="w-5 h-5" />
              </div>
              <div className="border p-3 rounded-full swiper-next cursor-pointer hover:border-orange-500 hover:text-orange-500">
                <MoveRight className="w-5 h-5" />
              </div>
            </div>

            <div className="w-full">
              <Swiper
                className="w-full"
                spaceBetween={16}
                modules={[Navigation]}
                navigation={{
                  prevEl: ".swiper-prev",
                  nextEl: ".swiper-next",
                }}
                simulateTouch={true}
                touchStartPreventDefault={false}
                breakpoints={{
                  0: { slidesPerView: 1, slidesPerGroup: 1 },
                  640: { slidesPerView: 2, slidesPerGroup: 1 },
                  1024: { slidesPerView: 4, slidesPerGroup: 1 }, // (optional) smoother
                }}
              >
                {newCollection?.map((pizza) => (
                  <SwiperSlide key={pizza?.id ?? pizza?._id}>
                    <PizzaCard pizza={pizza} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
