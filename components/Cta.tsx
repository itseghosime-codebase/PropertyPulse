import Link from "next/link";
import React from "react";
import House from "@/assets/house.webp";
import Image from "next/image";
import { BlurFade } from "./magicui/blur-fade";

export default function Cta() {
  return (
    <div className="relative">
      <Image
        src={House}
        alt={"Background Image"}
        sizes={"100%"}
        fill
        className="h-full w-full object-bottom object-cover absolute z-0"
      />
      <div className="py-28 bg-[#000B24]/70 relative z-10">
        <section className="text-center container lg:!max-w-5xl space-y-5">
          <BlurFade delay={0.25} inView>
            <h2 className="text-2xl lg:text-3xl font-semibold uppercase text-[#9DD7FF] font-sans">
              Ready to Elevate Your Real Estate Brand?
            </h2>
          </BlurFade>
          <BlurFade inView delay={0.5}>
            <p className="font-mono font-light text-white text-base md:text-lg lg:text-xl">
              Book a free strategy call to discover how a custom real estate
              website can help you attract more clients, showcase your listings,
              and grow your business— no tech jargon, just real results.
            </p>
          </BlurFade>
          <BlurFade inView delay={0.75}>
            <Link href={"https://wa.me/447535039110"} target="_blank">
              <span className="inline-block bg-[#068EED] px-8 py-4 rounded text-white font-semibold text-sm uppercase">
                Schedule a Free Call
              </span>
            </Link>
          </BlurFade>
        </section>
      </div>
    </div>
  );
}
