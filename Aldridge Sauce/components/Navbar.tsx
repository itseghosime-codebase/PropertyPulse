"use client";
import React from "react";
import Logo from "./Logo";
import Socials from "./Socials";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { MdContactPage, MdShoppingBag } from "react-icons/md";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className=" fixed inset-x-0 w-full top-0 z-50 bg-[#151515]/80 drop-shadow-md backdrop-blur-2xl">
      <div className="container flex items-center justify-between">
        <div>
          <Logo />
        </div>
        <div className="flex items-center">
          {LinkRel.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.href}
                className={`p-6  ${
                  (item.href === "/" && pathname === item.href) || // Home exact match
                  (item.href === "/shop" && pathname.startsWith(item.href)) // Shop starts with /shop
                    ? "bg-[#93C2E4] text-[#2A2B31]"
                    : "text-white hover:text-[#93C2E4]"
                } transition-colors ease-linear duration-150`}
              >
                <span className="flex items-center flex-col text-sm font-medium md:w-12 lg:w-14">
                  {item.icon}
                  <p>{item.label}</p>
                </span>
              </Link>
            );
          })}
        </div>
        <div className="hidden md:block">
          <Socials />
        </div>
      </div>
    </nav>
  );
}

const LinkRel = [
  {
    icon: <IoMdHome />,
    label: "Home",
    href: "/",
  },
  {
    icon: <MdShoppingBag />,
    label: "Shop",
    href: "/shop",
  },
  {
    icon: <MdContactPage />,
    label: "Contact",
    href: "#",
  },
];
