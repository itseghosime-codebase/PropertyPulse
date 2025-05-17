import React from "react";
import Landscape from "@/assets/landscape.webp";
import Star from "@/assets/icons/star.svg";
import Image from "next/image";
import { BlurFade } from "./magicui/blur-fade";

export default function Tailored() {
  return (
    <div id="works" className="grid lg:grid-cols-5 items-center">
      <BlurFade inView direction="right" delay={0.7} className="lg:col-span-2">
        <Image
          src={Landscape}
          alt={"Background Image"}
          sizes={"100%"}
          className="h-full w-full"
        />
      </BlurFade>
      <section className="py-16 px-5 md:p-16 lg:col-span-3 space-y-3">
        <BlurFade inView delay={0.25}>
          <h2 className="text-2xl md:text-3xl font-semibold uppercase text-[#000B24] font-sans">
            Tailored Websites Built for Real <br className="hidden md:block" />{" "}
            Estate Success
          </h2>
        </BlurFade>
        <BlurFade inView delay={0.5}>
          <p className="font-mono font-light text-base md:text-xl">
            Whether you're an independent agent or part of a team, I create
            websites that position you as the go-to expert in your market.
          </p>
        </BlurFade>
        <div className="space-y-6 pt-5">
          {Reasons.map((res, index) => (
            <BlurFade key={index} inView delay={0.7 + index * 0.05}>
              <div className="flex items-baseline gap-3">
                <Image
                  src={Star}
                  sizes="100%"
                  alt="Icon"
                  className="h-3 w-3 md:h-4 md:w-4"
                />
                <h3 className="text-xl md:text-2xl font-medium font-mono">
                  {res}
                </h3>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>
    </div>
  );
}

const Reasons = [
  "Custom design to reflect your personal brand",
  "Fast load speed for better rankings and user experience",
  "Listing pages with filters and map views",
  "Blog and resource sections to build credibility",
  "CRM and calendar integrations",
];
