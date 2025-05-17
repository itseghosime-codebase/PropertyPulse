import Link from "next/link";
import React from "react";
import Background from "@/assets/estate.webp";
import Image from "next/image";
import { BlurFade } from "./magicui/blur-fade";

export default function Banner() {
  return (
    <div className="relative min-h-[800px] pt-32">
      <Image
        src={Background}
        alt={"Background Image"}
        sizes={"100%"}
        fill
        className="h-full w-full object-bottom object-cover absolute z-0"
      />
      <div className="container relative z-10 font-sans">
        <section className="text-center space-y-3">
          <BlurFade inView>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold uppercase text-[#011031]">
              Stand Out in Real Estate. Get a Website That Sells.
            </h1>
          </BlurFade>
          <BlurFade delay={0.25} inView>
            <p className="text-base md:text-lg lg:text-xl max-w-4xl capitalize mx-auto text-[#060606]">
              Attract more clients, showcase your listings beautifully, and grow
              your real estate brand with a high-performance website built just
              for agents like you.
            </p>
          </BlurFade>
          <BlurFade delay={0.5} inView>
            <Link href={"https://wa.me/447535039110"} target="_blank">
              <span className="inline-block bg-[#068EED] px-8 py-4 rounded text-white font-semibold text-xs md:text-sm uppercase">
                Get Your Free Website Audit
              </span>
            </Link>
          </BlurFade>
        </section>
      </div>
    </div>
  );
}
