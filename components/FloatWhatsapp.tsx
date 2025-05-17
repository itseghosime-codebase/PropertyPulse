import Link from "next/link";
import React from "react";
import { RiWhatsappFill } from "react-icons/ri";

export default function FloatWhatsapp() {
  return (
    <div className="fixed bottom-10 right-10 md:right-14 md:bottom-14 lg:right-20 lg:bottom-20 z-[999]">
      <Link
        href={"https://wa.me/447535039110"}
        target="_blank"
        className="text-white bg-[#007CD2] rounded-lg inline-block"
      >
        <span className="h-14 w-14 flex items-center justify-center">
          <RiWhatsappFill className="text-4xl" />
        </span>
      </Link>
    </div>
  );
}
