import React from "react";
import MockUp from "@/assets/mobileMockups/phone-mockup-2.webp";
import Image from "next/image";
import Link from "next/link";

export default function NonTechie() {
  return (
    <div className="container pb-16 grid md:grid-cols-2 items-center gap-8">
      <section>
        <Image
          src={MockUp}
          alt={"Phone Mockup"}
          sizes="100%"
          className="min-w-xs max-w-md h-auto"
        />
      </section>
      <section className="space-y-4">
        <h2 className="text-center">
          Introducing the Crypto Trading Bot MADE for Everyday,{" "}
          <div className="bg-[#AF75F6] px-2 py-1 rounded-tr-2xl rounded-bl-2xl inline-block text-white">
            Non-Techie
          </div>{" "}
          People!
        </h2>
        <p className="text-sm">
          There are many crypto trading bots out there. However, they are made
          for experienced traders and/or tech-savvy people. So, even though they
          are supposed to make trading easier, the truth is, they are very
          complicated.
        </p>

        <h5 className="text-xl">
          That’s why we created QuixBot — to make crypto trading simple and
          accessible for everyone.
        </h5>
        <div className="flex items-center justify-center">
        <Link href="">
            <span>learn more</span>
        </Link>
      </div>
      </section>
    </div>
  );
}
