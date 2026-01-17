import { BedDouble, ContactRound, Hotel, LayoutDashboard, Settings } from "lucide-react";
import SideBarLink from "./SideBarLink.jsx";

export default function SideBarLinks() {
  const links = [
    {
      name: "Dashboard",
      path: "/",
      icon: <LayoutDashboard />,
    },
    {
      name: "Guest",
      path: "/guest",
      icon: <ContactRound />,
    },
    {
      name: "hotels",
      path: "/hotels",
      icon: <Hotel />,
    },
    {
      name: "rooms",
      path: "/rooms",
      icon: <BedDouble />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings />,
    },
  ];
  return (
    <>
      <div className="w-9/12 mx-auto mt-8 space-y-6">
        {links?.map((link) => {
          return <SideBarLink link={link} key={link?.name} />;
        })}
      </div>
    </>
  );
}
