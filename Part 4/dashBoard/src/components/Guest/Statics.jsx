import { HandCoins, Hourglass, Lamp, Users } from "lucide-react";
import React from "react";
import StaticCard from "../../UI/Section/StaticCard.jsx";

export default function Statics() {
  const statics = [
    {
      title: "Total Guest",
      value: "1000",
      icon: <Users className="text-blue-500" />,
    },
    {
      title: "total stays",
      value: "1000",
      icon: <Hourglass className="text-orange-500" />,
    },
    {
      title: "total Revenue",
      value: "100000",
      icon: <HandCoins className="text-green-500" />,
    },
    {
      title: "total Rooms Occupied",
      value: "50",
      icon: <Lamp className="text-cyan-500" />,
    },
  ];
  return (
    <div className="flex flex-wrap space-y-4 my-5">
      {statics.map((state) => {
        return (
          <StaticCard
            title={state.title}
            value={state.value}
            icon={state.icon}
          />
        );
      })}
    </div>
  );
}
