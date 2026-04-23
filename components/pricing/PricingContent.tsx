"use client";

import Image from "next/image";
import whiteLogo from "@/assets/svgs/whiteLogo.svg";
import GradientSection from "../GradientSection";
import { useRevealSequence } from "../useRevealSequence";

const PricingContent = () => {
  const { canPlay, markComplete } = useRevealSequence();
  const sequenceProps = (index: number) => ({
    play: canPlay(index),
    onRevealComplete: () => markComplete(index),
  });

  return (
    <main className="w-full flex flex-col overflow-y-scroll gap-[15px]">
      <div className="w-full flex flex-col items-center gap-[30px] lg:px-[10%] px-[5%]">
        <div className="bg-linear-to-br from-[#2A2A2A] to-[#7C7C7C] p-[2px] rounded-[18px] shadow-lg">
          <div className="bg-linear-to-br from-[#09080E] to-[#727272] p-[14px] rounded-[18px]">
            <Image src={whiteLogo} alt="Collis" className="w-[52px] h-[52px]" />
          </div>
        </div>

        <h5 className="text-[var(--text-secondary)] text-[15px] sm:text-[18px] font-semibold tracking-[10%]">
          PRICING
        </h5>

        <h2 className="lg:text-[50px] md:text-[35px] text-[25px] text-center font-bold leading-tight">
          Less on Fees, More on Your
          <span className="block">Experience</span>
        </h2>

        <p
          className="text-center text-[var(--text-secondary)] lg:text-[18px] md:text-[14px] text-[12px]"
        >
          We charge a flat fee of only 350 RWF{" "}
          <span {...sequenceProps(3)} className="text-[var(--text-primary)] font-semibold">
            ($0.25)
          </span>{" "}
          per transaction, regardless{" "}
          <span className="md:block inline">
            of the amount. Withdrawals incur a flat fee of{" "}
            <span className="text-[var(--text-primary)] font-semibold">$2</span>, regardless
            of the{" "}
          </span>
          <span className="md:block inline">
            amount being withdrawn. Wallet top-ups incur a
            <span className="text-[var(--text-primary)] font-semibold"> 3%</span> processing
            fee
          </span>{" "}
          charged by our payment processor.
        </p>
      </div>

      <GradientSection title="Try it for Free" />
    </main>
  );
};

export default PricingContent;
