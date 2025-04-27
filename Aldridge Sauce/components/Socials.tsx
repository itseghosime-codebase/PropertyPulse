import React from 'react'
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { MdMail } from "react-icons/md";

export default function Socials() {
  return (
    <div className="flex items-center gap-3">
    <Link href={""}>
      <span className="btn-fill flex items-center justify-center rounded-full h-9 w-9 md:h-10 md:w-10">
        <FaInstagram className="text-xl md:text-2xl"/>
      </span>
    </Link>
    <Link href={""}>
      <span className="btn-fill flex items-center justify-center rounded-full h-9 w-9 md:h-10 md:w-10">
      <RiTelegram2Fill className="text-xl md:text-2xl"/>
      </span>
    </Link>
    <Link href={""}>
      <span className="btn-fill flex items-center justify-center rounded-full h-9 w-9 lg:h-10 lg:w-10">
        <MdMail className="text-xl lg:text-2xl"/>
      </span>
    </Link>
  </div>
  )
}
