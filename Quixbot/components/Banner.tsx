import React from "react";
import SectionBackground from "./Reusables/SectionBackground";
import BannerBackground from "@/assets/backgrounds/background-2.webp";
import Link from "next/link";

export default function Banner() {
  return (
    <SectionBackground imageUrl={BannerBackground} className="h-fit">
      <div className="container grid md:grid-cols-2 items-center py-10">
        <section className="space-y-5">
          <h2>Accelerate your crypto success.</h2>
          <p className="text-sm">
            discover for yourself why QuixBot is undoubtedly the easiest and
            most effortless way to trade crypto, making it accessible for
            anyone, regardless of experience.
          </p>
          <Link href="">
            <span>Learn more</span>
          </Link>
        </section>
        <section></section>
      </div>
    </SectionBackground>
  );
}
