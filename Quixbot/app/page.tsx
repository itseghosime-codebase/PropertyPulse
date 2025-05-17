import HomeLander from "@/components/HomeLander";
import BoxSection from "@/components/Reusables/BoxSection";
import Timer from "@/assets/icons/timer.svg";
import Money from "@/assets/icons/money.svg";
import Click from "@/assets/icons/sign-out.svg";
import Image from "next/image";
import TradingComplex from "@/components/TradingComplex";
import NonTechie from "@/components/NonTechie";
import Banner from "@/components/Banner";
import Automated from "@/components/Automated";

export default function Home() {
  return (
    <main>
      <HomeLander />
      <div className="grid md:grid-cols-3 gap-7 container -mt-10 relative z-10">
        {GridInfoOne.map((props, index) => (
          <BoxSection key={index} {...props} />
        ))}
      </div>
      <TradingComplex />
      <NonTechie />
      <Banner />
      <Automated />
    </main>
  );
}

const GridInfoOne = [
  {
    icon: (
      <Image
        alt="Icon"
        src={Timer}
        sizes="100%"
        className="w-24 h-auto mx-auto "
      />
    ),
    heading: "EARN CRYPTO 24/7",
    description:
      "Earn passive income around the clock! with the freedom to withdraw your profits whenever you’d like.",
  },
  {
    icon: (
      <Image
        alt="Icon"
        src={Money}
        sizes="100%"
        className="w-24 h-auto mx-auto "
      />
    ),
    heading: "Profit-Driven Design",
    description:
      "QuixBot is smartly programmed to adapt to any market condition, helping you earn even when the market drops.",
  },
  {
    icon: (
      <Image
        alt="Icon"
        src={Click}
        sizes="100%"
        className="w-24 h-auto mx-auto "
      />
    ),
    heading: "1-Click Setup",
    description:
      "Start securing profitable trades today with QuixBot’s proven 1-click strategy.",
  },
];
