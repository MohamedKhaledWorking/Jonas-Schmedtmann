import {
    CalendarDays,
  Contact,
  DoorOpen,
  Hotel,
  LayoutDashboard,
  UserStar,
} from "lucide-react";
import React from "react";
import { useTheme } from "../../Context/ThemeContext.jsx";
import { Link } from "react-router-dom";

export default function SideLinks() {
  const { showSidebar, dispatch } = useTheme();
  const sideLinks = [
    {
      name: "Home",
      to: "/",
      icon: <LayoutDashboard size={25} />,
    },

    {
      name: "users",
      to: "/users",
      icon: <Contact />,
    },
    {
      name: "Guests",
      to: "/guest",
      icon: <UserStar />,
    },
    {
      name: "booking",
      to: "/about",
      icon:<CalendarDays />,
    },
    {
      name: "hotel",
      to: "/hotel",
      icon: <Hotel />,
    },
    {
      name: "rooms",
      to: "/room",
      icon: <DoorOpen />,
    },
  ];
  return (
    <div
      className={`${showSidebar ? "w-10/12 " : "w-3/5"}   mx-auto text-center`}
    >
      {sideLinks?.map((link) => {
        return (
          <Link
            to={link?.to}
            className={`sideBarLink`}
          >
            <span className={showSidebar ? "mx-5" : "mx-auto"}> {link?.icon}</span>
            <span className={showSidebar ? "ms-4" : "hidden"}>
              {link?.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
