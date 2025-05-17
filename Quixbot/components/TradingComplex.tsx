import React from "react";

export default function TradingComplex() {
  return (
    <div className="py-16 container">
      <h2 className="text-center">Crypto trading CAN BE COMPLEX</h2>
      <div className="mt-16 grid md:grid-cols-2 gap-12">
        <section className="space-y-8">
          <p>
            Crypto trading is more difficult than it seems, with 95% of traders
            failing within a few months. Success requires years of experience
            and significant investment for trial and error.
          </p>
          <h2 className="lg:text-4xl leading-12">
            We built <span>quixBOT</span> to change the game.
          </h2>
          <p>
            QuixBot is user-friendly, with pre-programmed, proven strategies
            that make it easy for anyone — even beginners — to confidently enter
            the market and start trading.
          </p>
        </section>
        <section className="space-y-6">
          {Complex.map((item, idx) => (
            <div className="flex items-start gap-5">
              <div className="rounded-full text-2xl text-[#AF75F6] border-[3px] border-[#AF75F6] flex items-center justify-center h-11 w-11 shrink-0">
                {idx + 1}
              </div>
              <section>
                <h4 className="text-xl underline underline-offset-4">
                  {item.heading}
                </h4>
                <p className="text-sm">{item.description}</p>
              </section>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

const Complex = [
  {
    heading: "TIRED OF LEARNING?",
    description:
      "QuixBot includes pre-set trading strategies that have been tested and validated by professional traders.",
  },
  {
    heading: "Worried about losing your investment?",
    description:
      "QuixBot includes pre-set trading strategies that have been tested and validated by professional traders.",
  },
  {
    heading: "TIRED OF LEARNING?",
    description:
      "No need to quit your job just yet. Let QuixBot handle the trading for you—sit back and relax while the bots take care of everything!",
  },
];
