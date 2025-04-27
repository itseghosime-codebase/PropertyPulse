import Link from "next/link";
import React from "react";
import BottleAds from "@/assets/bottle-ads.svg";
import Image from "next/image";
import FooterBackground from "@/assets/footer-background.webp";
import LearnMore from "./LearnMore";
import { TextAnimate } from "./magicui/text-animate";
import { BlurFade } from "./magicui/blur-fade";

export default function Advertisment() {
  return (
    <>
      <div className="container grid md:grid-cols-2 items-center py-20">
        <section className="space-y-4">
          <BlurFade direction="right" duration={0.6} inView>
            <h3>
              Get Yourself a Bottle... {<br className="hidden md:block" />}
              or Two… or More!
            </h3>
          </BlurFade>

          <div className="text-base md:text-lg max-w-lg space-y-4">
            <TextAnimate animation="blurIn" delay={0.2} by="word">
              Whether you’re feeding the whole block or just making dinner hit
              different, stock up and stay ready.
            </TextAnimate>
            <TextAnimate
              className="italic text-[#93C2E4] font-medium"
              animation="slideLeft"
              delay={0.4}
              as={"p"}
              by="character"
            >
              Pro Tip: One bottle is never enough
            </TextAnimate>
          </div>
          <div className="max-w-52">
            <BlurFade inView direction="up" delay={0.4} className="w-full">
              <LearnMore />
            </BlurFade>
          </div>
        </section>
        <section className="flex items-center justify-center">
          <BlurFade direction="up" delay={0.4} duration={0.6} inView>
            <Image
              src={BottleAds}
              alt="Advertisment of Aldridge Sauce"
              sizes="100%"
              className="min-h-[500px]"
            />
          </BlurFade>
        </section>
      </div>
      <BlurFade direction="up" delay={0.5} inView>
        <div className="py-20 relative grid md:grid-cols-2 px-4">
          <div className="absolute bg-black/[32%] inset-0 z-10" />
          <Image
            src={FooterBackground}
            alt="Background Image"
            fill
            className="object-center object-cover z-0"
          />
          <BlurFade
            direction="up"
            delay={0.7}
            className="relative z-20 md:col-start-2"
            inView
          >
            <section className="p-5 md:p-8 lg:p-12 bg-[#93C2E4] rounded-lg max-w-xl space-y-4">
              <BlurFade direction="up" delay={0.8} inView>
                <h3 className="text-[#292929]">
                  Get Yourself a Bottle... <br className="hidden md:block" />
                  or Two… or More!
                </h3>
              </BlurFade>

              <BlurFade direction="up" delay={1} inView>
                <p className="lg:text-2xl text-[#292929] text-normal lg:leading-9">
                  Aldridge Sauce started with a grill, a dream and a whole lot
                  of flavor. Perfected over cookouts and family gatherings, it’s
                  a secret recipe passed down with pride— and made to be shared.
                </p>
              </BlurFade>
            </section>
          </BlurFade>
        </div>
      </BlurFade>
    </>
  );
}
