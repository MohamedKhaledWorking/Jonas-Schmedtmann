import { Link } from "react-router-dom";

export default function SideBarLink({ link }) {
  return (
    <>
      <Link
        to={link?.path}
        className="flex cursor-pointer py-4 rounded-xl bg-theme/25 text-theme"
      >
        <span className="mx-auto">{link?.icon}</span>
        {/* <span>{link?.name}</span> */}
      </Link>
    </>
  );
}
