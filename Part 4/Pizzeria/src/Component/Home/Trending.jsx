import React from "react";
import HeaderIcon from "../../UI/HeaderIcon.jsx";
import { Flame } from "lucide-react";
import TrendCard from "./TrendCard.jsx";
import { useLoaderData } from "react-router-dom";

export default function Trending() {
  const { trendPizza } = useLoaderData();
  return (
    <section className="bg-secBgc dark:bg-secBgcDark text-textClr dark:text-textClrDark py-20 my-20 ">
      <div className="container mx-auto">
        <div className="flex justify-center items-center flex-col ">
          <HeaderIcon
            text={"What's Hot"}
            icon={<Flame />}
            bgColor={"red-500/20"}
            textColor={"red-500"}
          />
          <p className="text-4xl text-textClr dark:text-textClrDark font-bold font-main my-6">
            Trending Now
          </p>
          <p className="text-textSecClr dark:text-textSecClrDark text-lg md:w-full w-4/5 text-center">
            These crowd favorites are flying out of our kitchen. Join the hype!
          </p>
        </div>
        <div className="flex flex-wrap my-10 capitalize ">
          {trendPizza?.map((pizza, i) => {
            return <TrendCard pizza={pizza} idx={i + 1} key={pizza?.id} />;
          })}
        </div>
      </div>
    </section>
  );
}


