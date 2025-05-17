import React from "react";
import Image from "next/image";
import Image1 from "@/assets/carousel-1.webp";
import Image2 from "@/assets/carousel-2.webp";
import Image3 from "@/assets/carousel-3.webp";
import Image4 from "@/assets/carousel-4.webp";
import Image5 from "@/assets/carousel-5.webp";
import Image6 from "@/assets/carousel-6.webp";
import Image7 from "@/assets/carousel-7.webp";
import Image8 from "@/assets/carousel-8.webp";
import { Marquee } from "./magicui/marquee";
import { BlurFade } from "./magicui/blur-fade";

export default function Carousel() {
  return (
    <div className="bg-[#000B24] relative overflow-hidden">
      <div className="z-0 absolute h-full w-full py-5">
        <Marquee className="[--duration:20s]">
          {ImageTopBG.map((review, idx) => (
            <Image
              key={idx}
              src={review}
              alt="Landing Page Previews"
              sizes="100%"
              className=""
            />
          ))}
        </Marquee>
        <Marquee reverse className="[--duration:20s]">
          {ImageBottomBG.map((review, idx) => (
            <Image
              key={idx}
              src={review}
              alt="Landing Page Previews"
              sizes="100%"
              className=""
            />
          ))}
        </Marquee>
      </div>
      <section className="relative z-10 py-40 bg-gradient-to-r from-0% via-30% from-black via-black to-black/0">
        <BlurFade inView delay={0.25} className="container">
          <h3 className="text-2xl md:text-4xl lg:text-5xl max-w-3xl text-white font-sans font-semibold">
            From clicks to closings - case studies that prove <br /> PropertyPulsePro
            works
          </h3>
        </BlurFade>
      </section>
    </div>
  );
}

const ImageTopBG = [Image1, Image3, Image5, Image7];

const ImageBottomBG = [Image2, Image4, Image6, Image8];
