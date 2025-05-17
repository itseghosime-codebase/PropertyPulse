import Link from "next/link";
import React from "react";
import { FaCalendar } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlinePerson } from "react-icons/md";
import { PiClockClockwise } from "react-icons/pi";
import { RiSeoFill } from "react-icons/ri";
import { BlurFade } from "./magicui/blur-fade";

export default function Work() {
  return (
    <div className="bg-[#000B24]">
      <div className="container py-20 space-y-8 text-center">
        <section className="space-y-4 font-sans">
          <BlurFade inView>
            <h2 className="text-2xl md:text-3xl text-[#46B3FF] uppercase font-semibold">
              Your Website Should Work as Hard as You Do
            </h2>
          </BlurFade>
          <BlurFade inView delay={0.25}>
            <p className="text-sm md:text-lg max-w-5xl capitalize mx-auto text-white">
              Most agents rely on outdated templates or brokerage-provided pages
              that do nothing to boost visibility or build trust. In today’s
              market, your online presence is your first impression—and the
              right website can help you close more deals.
            </p>
          </BlurFade>
        </section>
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {HowToWork.map((items, index) => (
            <BlurFade
              inView
              delay={0.5 + index * 0.05}
              key={index}
              className="p-[1px] rounded-sm bg-gradient-to-r from-[#46B3FF]/90 via-white/0 to-[#46B3FF]/90"
            >
              <div className="h-full w-full text-center flex flex-col items-center justify-center text-white rounded py-8 px-4 bg-[#000B24] space-y-1">
                <div className="bg-[#46B3FF] h-11 w-11 text-2xl flex items-center justify-center mb-3">
                  <items.icon className="text-black" />
                </div>
                <h5 className="text-base font-medium font-mono">
                  {items.heading}
                </h5>
                <p className="text-xs font-mono font-light">
                  {items.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </section>

        <BlurFade inView delay={0.7}>
          <Link href="" className="inline-block">
            <span className="flex items-center justify-center text-center bg-[#068EED] gap-2 px-8 py-4 rounded text-white font-semibold text-sm uppercase">
              <FaCalendar /> LETS HAVE A CHAT
            </span>
          </Link>
        </BlurFade>
      </div>
    </div>
  );
}

const HowToWork = [
  {
    icon: IoIosPhonePortrait,
    heading: "Mobile-First Design",
    description:
      "90%+ of home buyers search from mobile. your site must look great on every screen.",
  },
  {
    icon: RiSeoFill,
    heading: "SEO Optimized",
    description:
      "Show up on Google when buyers and sellers are searching locally.",
  },
  {
    icon: PiClockClockwise,
    heading: "24/7 Marketing Tool",
    description:
      "Your website works for you around the clock, even while you're out showing homes.",
  },
  {
    icon: MdOutlinePerson,
    heading: "Client Testimonials",
    description: "Showcase your happy clients and build credibility fast.",
  },
];
