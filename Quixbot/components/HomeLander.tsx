import React from "react";
import SectionBackground from "./Reusables/SectionBackground";
import Background from "@/assets/backgrounds/background-1.webp";
import Mockup from '@/assets/mobileMockups/phone-mockup-1.webp'
import Link from "next/link";
import Image from "next/image";

export default function HomeLander() {
  return (
    <SectionBackground className="min-h-[650px] relative z-0" imageUrl={Background}>
      <section className="grid md:grid-cols-5 container pt-32 items-center gap-10">
        <div className="space-y-6 md:col-span-3">
          <h1 className="text-4xl">
            Crypto trading done <span>quix!</span>
            <br />
            no experience needed
          </h1>
          <p className="text-sm">
            Our intuitive crypto trading bot simplifies the trading process,
            making it easier than ever to get started. Within minutes,{" "}
            <span className="!text-black !decoration-black">
              you can deploy multiple bots that trade automatically
            </span>{" "}
            on your behalf using either built-in,{" "}
            <span className="!text-black !decoration-black">
              proven strategies
            </span>{" "}
            or your own custom approach.
          </p>
          <Link href={""}>
            <span>LEARN MORE</span>
          </Link>
        </div>
        <div className="md:col-span-2">
            <Image
            src={Mockup}
            alt={'Phone Mockup'}
            sizes="100%"
            className="min-w-xs h-auto"
            />
        </div>
      </section>
    </SectionBackground>
  );
}
