import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  User,
} from "@heroui/react";
import {
  Bell,
  ListIndentDecrease,
  ListIndentIncrease,
  Sun,
} from "lucide-react";
import { useTheme } from "../../Context/ThemeContext.jsx";

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { showSidebar, dispatch } = useTheme();

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      classNames={{
        base: "px-10 bg-mainBgc border-b lightBorder", 
        wrapper: "px-0 max-w-full", 
      }}
    >
      <NavbarContent className="gap-2">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <div
          onClick={() => dispatch({ type: "set/sidebar" })}
          className="cursor-pointer"
        >
          {showSidebar ? <ListIndentDecrease /> : <ListIndentIncrease />}
        </div>
      </NavbarContent>

      {/* RIGHT: Sign Up (most end) */}
      <NavbarContent justify="end space-x-8" className="gap-8">
        <NavbarItem className="cursor-pointer">
          <Sun />
        </NavbarItem>
        <NavbarItem className="cursor-pointer">
          <Bell />
        </NavbarItem>
        <NavbarItem className="cursor-pointer">
          <User
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
            description="Product Designer"
            name="Jane Doe"
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
