import SideBarLinks from "../../Components/SideBar/SideBarLinks/SideBarLinks.jsx";
import SideBarLogo from "../../Components/SideBar/SideBarLogo/SideBarLogo.jsx";

export default function Sidebar() {
  return (
    <>
      <div className="w-full h-full py-4 bg-secBgc border-e border-lightBorder">
        <SideBarLogo />
        <SideBarLinks />
      </div>
    </>
  );
}
