"use client";
import Link from "next/link";
import React from "react";
import { BlurFade } from "./magicui/blur-fade";
import { InlineWidget } from "react-calendly";

export default function Bookings() {
  return (
    <div className="py-20 grid lg:grid-cols-5 gap-10 items-center container">
      <section className="lg:col-span-3 space-y-3">
        <BlurFade inView delay={0.25}>
          <h2 className="text-2xl md:text-3xl font-semibold uppercase text-[#000B24] font-sans">
            Build a Site That Brings in Clients
          </h2>
        </BlurFade>
        <BlurFade delay={0.5} inView>
          <p className="font-mono font-light text-lg md;text-xl">
            Whether you're just getting started or looking to level up, this
            free 15-minute call is your first step toward a high-performing real
            estate website.
          </p>
        </BlurFade>
        <BlurFade delay={0.75} inView>
          <Link href={"https://wa.me/447535039110"} target="_blank">
            <span className="inline-block bg-[#068EED] px-8 py-4 rounded text-white font-semibold text-sm uppercase">
              Schedule Free Call
            </span>
          </Link>
        </BlurFade>
      </section>
      <section className="lg:col-span-2">
        <div className="rounded-lg h-fit overflow-hidden">
          <InlineWidget
            url="https://calendly.com/mosa_kambule/30min"
            pageSettings={{
              backgroundColor: "#000B24",
              textColor: "#ffffff",
              primaryColor: "#46B3FF",
            }}
          />
        </div>
      </section>
    </div>
  );
}
