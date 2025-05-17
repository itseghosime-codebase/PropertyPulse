import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { ReactNode } from "react";

interface BackgroundProp {
  className: string;
  children: ReactNode;
  imageUrl: string | StaticImport;
}

export default function SectionBackground(props: BackgroundProp) {
  return (
    <div className={`relative ${props.className}`}>
      <Image
        src={props.imageUrl}
        alt="Background Image"
        fill
        sizes="100%"
        className="h-full w-full object-cover object-center absolute z-0"
      />
      <div className="relative z-10">{props.children}</div>
    </div>
  );
}
