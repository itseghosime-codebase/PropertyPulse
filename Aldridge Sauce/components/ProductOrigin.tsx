import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductFullView from "@/assets/product-img.webp";
import Beef from "@/assets/Icons/cow.svg";
import Chicken from "@/assets/Icons/hen.svg";
import Pork from "@/assets/Icons/pig.svg";
import BeefBg from "@/assets/beef-background.webp";
import ChickenBg from "@/assets/chicken-background.webp";
import PorkBg from "@/assets/pork-background.webp";
import { FaArrowRightLong } from "react-icons/fa6";
import { FlipText } from "./magicui/flip-text";
import { TextAnimate } from "./magicui/text-animate";
import { BlurFade } from "./magicui/blur-fade";

export default function ProductOrigin() {
  return (
    <div className="pt-20 md:pt-24 lg:pt-28 xl:pt-32 2xl:pt-36">
      <section className="container md:text-center space-y-3">
        <FlipText
          duration={0.1}
          delayMultiple={0.05}
          className="text-[#A8D6F8] -tracking-widest h2"
        >
          Born in the Backyard. Bottled for the World.
        </FlipText>

        <TextAnimate
          animation="blurInUp"
          by="word"
          delay={0.2}
          className="xl:text-2xl lg:text-xl md:text-base"
        >
          Aldridge Sauce started with a grill, a dream, and a whole lot of
          flavor. Perfected over cookouts and family gatherings, it’s a secret
          recipe passed down with pride—and made to be shared.
        </TextAnimate>

        <BlurFade inView direction="up" delay={0.4}>
          <div className="max-w-2xl mx-auto">
            <Link href={""}>
              <span className="btn btn-fill">
                <p>Shop now and taste the difference</p>
                <FaArrowRightLong />
              </span>
            </Link>
          </div>
        </BlurFade>
      </section>

      {/* Sause Product View */}
      <section className="mt-8 md:mt-10">
        <BlurFade inView direction="up" delay={0.6}>
          <div>
            <Image
              src={ProductFullView}
              alt="Image of Aldridge Babeque Sauce"
              sizes="100%"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </BlurFade>
      </section>

      {/* Babeque Usage Info */}
      <section className="grid md:grid-cols-2">
        {BabequeUsage.map((items, index) => {
          return (
            <BlurFade
              inView
              direction="up"
              delay={(index + 4) / 10}
              key={index}
              className={`h-80 lg:h-96 flex items-center ${
                index == 0 ? "md:col-span-2 col-span-1" : "col-span-1"
              } relative px-4 md:px-10 xl:px-24`}
            >
              <Image
                src={items.bg}
                alt={items.usageType + " " + "Background"}
                fill
                className="h-full w-full object-center object-cover z-0"
              />
              <div className="absolute z-10 bg-[#000D21]/[83%] inset-0" />
              <div className="max-w-3xl mx-auto space-y-4 relative z-20">
                <div className="flex items-center gap-3">
                  <Image
                    src={items.icon}
                    sizes="100%"
                    className="h-7 w-auto"
                    alt={items.usageType + " " + "icon"}
                  />
                  <h4 className="xl:text-4xl lg:text-3xl md:text-2xl text-3xl font-semibold uppercase">
                    {items.usageType}
                  </h4>
                </div>
                <p className="text-base lg:text-xl">{items.description}</p>
              </div>
            </BlurFade>
          );
        })}
      </section>
    </div>
  );
}

const BabequeUsage = [
  {
    bg: BeefBg,
    icon: Beef,
    usageType: "beef",
    description:
      "From brisket to burgers, Aldridge Sauce adds depth, smoke, and a smooth kick that turns every cut into a showstopper. Slather it on ribs or brush it on steaks—This sauce doesn’t play.",
  },
  {
    bg: PorkBg,
    icon: Pork,
    usageType: "Pork",
    description:
      "Pork and Aldridge are a match made in pitmaster heaven. Whether it’s pulled pork, chops, or tenderloin, our sauce brings that perfect balance of sweet, tangy, and smoky heat that keeps folks coming back for seconds.",
  },
  {
    bg: ChickenBg,
    icon: Chicken,
    usageType: "Chicken",
    description:
      "Grilled, baked, or fried, chicken loves Aldridge Sauce. Our blend caramelizes beautifully, locking in juicy flavor and giving wings, thighs, and breasts a mouthwatering glaze you won’t forget.",
  },
];
