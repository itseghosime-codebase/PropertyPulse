import Image from "next/image";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import Logo from "@/assets/icons/logoFoot.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <div id="contact">
      <section className="md:h-96 relative font-sans space-y-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.0687857642097!2d55.2762294!3d25.200902699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4283dcb05903%3A0xfdb34b3e83fc96cf!2sKempinski%20The%20Boulevard%20Dubai!5e0!3m2!1sen!2sng!4v1747500720030!5m2!1sen!2sng"
          width="100%"
          height="100%"
          className="h-full min-h-96"
          style={{ border: 0, height: "100%" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="md:absolute z-10 inset-x-0 w-full bottom-10 grid xl:grid-cols-3 items-center justify-center md:justify-between gap-4 lg:gap-10 container">
          <div className="flex items-center justify-center gap-4 px-6 bg-[#011031] py-4 rounded-sm">
            <IoLocationSharp color="#46B3FF" />
            <p className="text-white text-sm">Kempinski The Boulevard Dubai</p>
          </div>
          <div className="flex items-center justify-center gap-4 px-6 bg-[#011031] py-4 rounded-sm">
            <FaPhone color="#46B3FF" />
            <p className="text-white text-sm">+447535039110</p>
          </div>

          <div className="flex items-center justify-center gap-4 px-6 bg-[#011031] py-4 rounded-sm">
            <IoMdMail color="#46B3FF" />
            <p className="text-white text-sm">contact@propertypulsepro1.com</p>
          </div>
        </div>
      </section>
      <footer className="bg-[#011031]">
        <div className="container  mt-5 md:mt-0 py-5 md:py-2.5 grid  md:grid-cols-3 gap-5 items-center justify-center">
          <div>
            <Image
              src={Logo}
              alt="Logo"
              sizes="100%"
              className="h-12 w-auto mx-auto md:mx-0"
            />
          </div>
          <div className="flex items-center gap-10 text-sm">
            <Link href={""} className="text-white shrink-0">
              <span>Privacy policy</span>
            </Link>
            <Link href={""} className="text-white shrink-0">
              <span>Term of service</span>
            </Link>
          </div>
          <div>
            <p className="text-white uppercase text-sm text-center md:text-right">
              &copy; {new Date().getFullYear()} Lumina
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
