import Image from "next/image";
import Link from "next/link";
import React from "react";
import OwnersImg from "@/assets/aldridge.webp";
import { TextAnimate } from "./magicui/text-animate";
import { BlurFade } from "./magicui/blur-fade";

export default function AboutSection() {
  return (
    <div>
      <div className="grid md:grid-cols-2 items-center md:gap-14 gap-10 pt-20 md:pt-0">
        <section className="px-4 md:pr-0 md:pl-12 lg:pl-16 xl:pl-28 xl:space-y-5 lg:space-y-4 space-y-3">
          <TextAnimate
            once
            animation="blurInUp"
            by="character"
            className="h2 text-[#A8D6F8]"
          >
            How it all started
          </TextAnimate>
          <TextAnimate
            animation="slideUp"
            by="word"
            as={"p"}
            once
            delay={0.2}
            className="xl:text-xl text-sm text-balance font-normal"
          >
            Rashad Aldridge is a BBQ enthusiast with deep roots in North
            Carolina and a passion for bringing the flavors of his home state to
            the heart of Texas. As the Co-owner alongside his wife Jessica of
            Aldridge BBQ, a family-owned and veteran- operated restaurant, they
            have made it their mission to shake up the BBQ scene in the Lone
            Star State with his unique blend of North Carolina and Central Texas
            styles with a hint of Tex-Mex.ashad grew up in the small town of
            Dudley, North Carolina, where BBQ is a way of life.
          </TextAnimate>
          <div className="max-w-52">
            <BlurFade inView direction="up" delay={0.4} className="w-full">
              <Link href={""}>
                <span className="btn btn-fill">Read more</span>
              </Link>
            </BlurFade>
          </div>
        </section>
        <section className="xl:h-[700px] lg:h-[550px] h-[500px] px-4 md:p-0">
          <BlurFade inView direction="left" delay={0.6} duration={0.6}>
            <Image
              src={OwnersImg}
              alt="Aldrideg on an apron"
              sizes="100%"
              priority
              className="object-center object-cover h-full w-full"
            />
          </BlurFade>
        </section>
      </div>
    </div>
  );
}
