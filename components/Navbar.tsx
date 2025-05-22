"use client";
import React from "react";
import { FaBarsStaggered, FaTwitter } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Logo from "@/assets/icons/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";

export default function Navbar() {
  const [clicked, setClicked] = React.useState(true);
  const changeToggle = () => {
    setClicked(!clicked);
  };
  return (
    <header className="fixed z-40 top-0 bg-[#000E28] inset-x-0 flex items-center md:justify-center">
      <nav className="w-full lg:px-16 lg:flex lg:items-center lg:justify-between">
        <div className="flex items-center justify-between py-4 bg-[#000E28] px-6 relative z-10">
          <Link href="/">
            <Image
              sizes="100%"
              src={Logo}
              alt="Logo"
              className="w-auto h-10 md:h-14"
            />
          </Link>
          <button className="lg:hidden text-white" onClick={changeToggle}>
            {!clicked ? (
              <IoClose className="text-2xl" />
            ) : (
              <FaBarsStaggered className="text-xl" />
            )}
          </button>
        </div>
        <ul
          className={`flex flex-col lg:flex-row fixed transition-all text-white ease-in-out duration-500 ${
            clicked ? "-translate-x-[100vh] lg:translate-x-0" : "translate-x-0"
          } top-0 left-0 -z-0 w-full max-w-sm lg:max-w-full uppercase items-start font-medium font-sans justify-start pt-20 md:pt-28 lg:pt-0 gap-3 px-6 lg:gap-10 h-screen bg-[#000E28] lg:relative lg:bg-transparent lg:w-auto lg:h-auto`}
        >
          <li>
            <Link
              className="hover:text-[#007CD2]"
              onClick={() => setClicked(true)}
              href="/"
            >
              <span className="text-sm md:text-xs font-medium">Home</span>
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#007CD2]"
              onClick={() => setClicked(true)}
              href="#about"
            >
              <span className="text-sm md:text-xs font-medium">About US</span>
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#007CD2]"
              onClick={() => setClicked(true)}
              href="#works"
            >
              <span className="text-sm md:text-xs font-medium">WHY it works</span>
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#007CD2]"
              onClick={() => setClicked(true)}
              href="#features"
            >
              <span className="text-sm md:text-xs font-medium">Features</span>
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#007CD2]"
              onClick={() => setClicked(true)}
              href="#contact"
            >
              <span className="text-sm md:text-xs font-medium">Contact</span>
            </Link>
          </li>

          <div className="flex items-center gap-4 text-2xl mt-10 lg:hidden">
            <Link
              href={"https://LinkedIn.com/in/propertypulsepro"}
              target="_blank"
              className="text-white bg-[#007CD2] rounded-md inline-block"
            >
              <span className="h-10 w-10 flex items-center justify-center">
                <FaLinkedinIn />
              </span>
            </Link>
            <Link
              href={"https://x.com/PropertyPulseP"}
              target="_blank"
              className="text-white bg-[#007CD2] rounded-md inline-block"
            >
              <span className="h-10 w-10 flex items-center justify-center">
                <FaTwitter />
              </span>
            </Link>
             <Link
              href={"https://www.instagram.com/propertypulsepro1?igsh=MzBnc2ZmaW5mdnE3&utm_source=qr"}
              target="_blank"
              className="text-white bg-[#007CD2] rounded-md inline-block"
            >
              <span className="h-10 w-10 flex items-center justify-center">
                <AiFillInstagram />
              </span>
            </Link>
            <Link
              href={"https://wa.me/447535039110"}
              target="_blank"
              className="text-white bg-[#007CD2] rounded-md inline-block"
            >
              <span className="h-10 w-10 flex items-center justify-center">
                <RiWhatsappFill />
              </span>
            </Link>
          </div>
        </ul>
        <div className="xl:flex items-center gap-4 text-2xl hidden">
          <Link
            href={"https://LinkedIn.com/in/propertypulsepro"}
            target="_blank"
            className="text-white bg-[#007CD2] rounded-md inline-block"
          >
            <span className="h-10 w-10 flex items-center justify-center">
              <FaLinkedinIn />
            </span>
          </Link>
          <Link
            href={"https://x.com/PropertyPulseP"}
            target="_blank"
            className="text-white bg-[#007CD2] rounded-md inline-block"
          >
            <span className="h-10 w-10 flex items-center justify-center">
              <FaTwitter />
            </span>
          </Link>
          <Link
              href={"https://www.instagram.com/propertypulsepro1?igsh=MzBnc2ZmaW5mdnE3&utm_source=qr"}
              target="_blank"
              className="text-white bg-[#007CD2] rounded-md inline-block"
            >
              <span className="h-10 w-10 flex items-center justify-center">
                <AiFillInstagram />
              </span>
            </Link>
          <Link
            href={"https://wa.me/447535039110"}
            target="_blank"
            className="text-white bg-[#007CD2] rounded-md inline-block"
          >
            <span className="h-10 w-10 flex items-center justify-center">
              <RiWhatsappFill />
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
