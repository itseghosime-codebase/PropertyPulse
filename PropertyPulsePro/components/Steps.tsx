import Image from "next/image";
import React from "react";
import LandscapeTwo from "@/assets/landscape-2.webp";
import Link from "next/link";
import { FaCalendar } from "react-icons/fa6";
import { BlurFade } from "./magicui/blur-fade";

export default function Steps() {
  return (
    <div className="grid md:grid-cols-5 items-center bg-[#000B24]">
      <section className="md:col-span-3 py-16 px-5 md:p-16 space-y-6">
        <BlurFade inView delay={0.2}>
          <h2 className="text-2xl md:ext-3xl font-semibold uppercase text-white font-sans">
            Simple, Streamlined, and Designed Around You
          </h2>
        </BlurFade>
        <div className="grid lg:grid-cols-2 gap-5">
          {Step.map((items, index) => (
            <BlurFade key={index} delay={0.5 + index * 0.12}>
              <div className="bg-white flex items-center p-1.5 rounded-sm">
                <div className="py-3 px-5 bg-[#000B24] rounded-md text-white font-mono font-semibold ">
                  Step {index + 1}
                </div>
                <p className="text-sm max-w-40 text-center mx-auto">{items}</p>
              </div>
            </BlurFade>
          ))}
        </div>
        <BlurFade inView delay={1}>
          <Link href="">
            <span className="flex items-center justify-center text-center bg-[#068EED] gap-2 px-8 py-4 rounded text-white font-semibold text-sm uppercase">
              <FaCalendar />{" "}
              <span className="shrink-0">Schedule Your Free Consultation</span>
            </span>
          </Link>
        </BlurFade>
      </section>
      <BlurFade inView direction="left" delay={0.7} className="md:col-span-2">
        <Image
          src={LandscapeTwo}
          alt={"Background Image"}
          sizes={"100%"}
          className="h-full w-full object-cover"
        />
      </BlurFade>
    </div>
  );
}

const Step = [
  "Free Strategy Call",
  "Website Planning & Mockup",
  "Build, Test, Launch",
  "Ongoing Support & Updates",
];
