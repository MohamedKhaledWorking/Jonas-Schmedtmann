import React from "react";
import HeaderIcon from "../../UI/HeaderIcon.jsx";
import { Car, Flame, Layers, Sparkles } from "lucide-react";
import img from "../../assets/photo-1590947132387-155cc02f3212.jfif";
import { Link } from "react-router-dom";

export default function Masterpiece() {
  return (
    <>
      <section className="my-20">
        <div className="flex container mx-auto flex-wrap">
          <div className="px-8 w-full lg:w-1/2">
            <HeaderIcon
              icon={<Sparkles />}
              text={"Masterpiece Customization"}
              textColor={"orange-500"}
              bgColor={"orange-500/20"}
            />
            <p className="text-4xl font-bold font-main text-textClr dark:text-textClrDark my-8 text-center md:text-left">
              Build Your{" "}
              <span className="text-transparent bg-linear-[120deg] from-orange-600 to-orange-700 via-orange-200 bg-clip-text">
                Masterpiece
              </span>
            </p>
            <p className="text-textSecClr dark:text-textSecClrDark text-center md:text-left">
              Unleash your inner chef! Choose your base, pile on the toppings,
              and create a pizza that's uniquely yours. Every bite, exactly how
              you want it.
            </p>
            <div className="flex flex-wrap my-8">
              <div className="w-full md:w-1/2 pe-3">
                <div className="bg-secBgc dark:bg-secBgcDark border border-orange-500/20 p-5 rounded-xl my-3 flex hover:border-orange-500/50 duration-300 space-x-4 ">
                  <div className="w-18 h-9 rounded-xl  flex items-center justify-center  dark:bg-red-500/20 bg-white ">
                    <Flame size={20} className="text-red-500" />
                  </div>
                  <div>
                    <p className="font-bold text-textClr dark:text-textClrDark font-main mb-2">
                      Make It Spicy
                    </p>
                    <p className="text-secTextClr dark:text-secTextClr ">
                      Add jalapeños, chili flakes, or hot honey
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 pe-3">
                <div className="bg-secBgc dark:bg-secBgcDark border border-orange-500/20 p-5 rounded-xl my-3 flex hover:border-orange-500/50 duration-300 space-x-4 ">
                  <div className="w-18 h-9 rounded-xl  flex items-center justify-center  dark:bg-red-500/20 bg-white ">
                    <Layers size={20} className="text-red-500" />
                  </div>
                  <div>
                    <p className="font-bold text-textClr dark:text-textClrDark font-main mb-2">
                      Stack Toppings
                    </p>
                    <p className="text-secTextClr dark:text-secTextClr ">
                      Layer up to 12 premium toppings
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 pe-3">
                <div className="bg-secBgc dark:bg-secBgcDark border border-orange-500/20 p-5 rounded-xl my-3 flex hover:border-orange-500/50 duration-300 space-x-4 ">
                  <div className="w-18 h-9 rounded-xl  flex items-center justify-center  dark:bg-red-500/20 bg-white ">
                    <Sparkles size={20} className="text-red-500" />
                  </div>
                  <div>
                    <p className="font-bold text-textClr dark:text-textClrDark font-main mb-2">
                      Chef-Level Combos
                    </p>
                    <p className="text-secTextClr dark:text-secTextClr ">
                      Try our recommended combinations
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 pe-3">
                <div className="bg-secBgc dark:bg-secBgcDark border border-orange-500/20 p-5 rounded-xl my-3 flex hover:border-orange-500/50 duration-300 space-x-4 ">
                  <div className="w-18 h-9 rounded-xl  flex items-center justify-center  dark:bg-red-500/20 bg-white ">
                    <Car size={20} className="text-red-500" />
                  </div>
                  <div>
                    <p className="font-bold text-textClr dark:text-textClrDark font-main mb-2">
                      Fast Delivery
                    </p>
                    <p className="text-secTextClr dark:text-secTextClr ">
                      Hot pizza at your door in 25 min
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Link to={"/createPizza"} className="bg-orange-800 text-white px-6 py-5 rounded-xl hover:bg-orange-600 duration-300 w-full cursor-pointer hover:ring-3 hover:ring-orange-600 
            hover:ring-offset-4 hover:ring-offset-secBgc dark:hover:ring-offset-secBgcDark">
              Create My Custom Pizza
            </Link>
          </div>
          <div className="px-8 w-full lg:w-1/2 mt-10 lg:mt-0 ">
            <div className="h-full rounded-4xl overflow-hidden relative flex items-end justify-start  group p-12 ">
              <img
                src={img}
                alt="Masterpiece section image"
                className="h-full w-full object-cover absolute inset-0 group-hover:scale-110 duration-300 dark:opacity-50"
              />
              <div className="z-10 text-white">
                <p className="font-bold text-3xl font-main">Your Creation</p>
                <p className="mt-4 text-secTextClr dark:text-secTextClr text-center">
                  Start with any pizza and make it your own
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
