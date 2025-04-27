import React from "react";
import Image from "next/image";
import LogoImage from "@/public/logo.svg";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        alt="Logo image"
        src={LogoImage}
        sizes="100%"
        priority
        className="h-16 md:h-20 w-auto"
      />
    </Link>
  );
}
