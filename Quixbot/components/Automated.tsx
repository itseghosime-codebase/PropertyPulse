import React from "react";
import BoxSection from "./Reusables/BoxSection";
import Link from "next/link";

export default function Automated() {
  return (
    <div className="py-20 text-center container space-y-10">
      <h2>
        Start generating automated <br /> passive income in just 3 easy steps
      </h2>
      <p className="max-w-md mx-auto">
        <span>In under 10 minutes</span> and just <span>3 simple steps,</span>{" "}
        you can set up and deploy your bots — it’s that easy.
      </p>

      <section className="grid md:grid-cols-3 gap-8">
        {Steps.map((items, index) => (
          <BoxSection
            key={index}
            icon={
              <div className="rounded-full mx-auto text-2xl text-[#AF75F6] border-[3px] border-[#AF75F6] flex items-center justify-center h-11 w-11 shrink-0">
                {index + 1}
              </div>
            }
            {...items}
          />
        ))}
      </section>
      <div className="flex items-center justify-center">
        <Link href="">
            <span>learn more</span>
        </Link>
      </div>
    </div>
  );
}

const Steps = [
  {
    heading: "StartING OUT",
    description:
      "Create your account and set up your personalized trading bots to start automating your crypto strategy with ease.",
  },
  {
    heading: "CUSTOMIZE bots",
    description:
      "Customize your bots by selecting from the built-in, proven winning strategies, or take full control and implement your own personalized strategies to match your trading goals.",
  },
  {
    heading: "LAUNCH BOTS",
    description:
      "Once your bots are deployed, they will trade on your behalf 24/7 based on the parameters you’ve set. All you have to do is sit back and relax as your AI-powered bots handle the trading for you.",
  },
];
