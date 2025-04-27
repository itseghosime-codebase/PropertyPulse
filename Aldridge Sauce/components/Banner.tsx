import Link from "next/link";
import React from "react";
import LearnMore from "./LearnMore";
import { BlurFade } from "./magicui/blur-fade";

export default function Banner() {
  return (
    <div className="xl:h-[110vh] lg:h-[650px] min-h-[550px] pt-40 pb-28 md:py-0 md:px-10 bg-hero relative flex items-center">
      <div className="absolute z-0 inset-0 bg-gradient-to-l from-0% from-white/0 to-90% to-black/[97%]" />
      <section className="container relative z-10 lg:space-y-5 space-y-3.5">
        <BlurFade direction="up" delay={0.2} inView>
          <h1 className="xl:text-7xl lg:text-5xl md:text-4xl text-3xl xl:leading-20 lg:leading-14 md:leading-10 leading-9">
            The Flavor That Brings <br className="hidden md:block" />
            It All Together
          </h1>
        </BlurFade>
        <BlurFade inView direction="up" delay={0.3}>
          <p className="max-w-4xl xl:text-3xl lg:text-2xl md:text-lg text-base font-normal">
            Crafted with bold ingredients and backyard love, Aldridge Sauce{" "}
            <br className="hidden md:block" />
            is your go-to for ribs, wings, burgers, and everything in between.
          </p>
        </BlurFade>

        <div className="flex flex-col md:flex-row items-center max-w-md gap-4">
          <BlurFade inView direction="up" delay={0.5} className="w-full">
            <Link href="/shop">
              <span className="btn btn-fill">Shop now</span>
            </Link>
          </BlurFade>

          <BlurFade inView direction="up" delay={0.7} className="w-full">
            <LearnMore />
          </BlurFade>
        </div>
      </section>
    </div>
  );
}
