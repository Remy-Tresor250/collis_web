import Image from "next/image";
import whiteLogo from "@/assets/svgs/whiteLogo.svg";
import GradientSection from "../GradientSection";

const PricingContent = () => {
  return (
    <main className="w-full flex flex-col overflow-y-scroll gap-[15px]">
      <div className="w-full flex flex-col items-center gap-[30px]">
        <div className="bg-linear-to-br from-[#2A2A2A] to-[#7C7C7C] p-[2px] rounded-[18px] shadow-lg">
          <div className="bg-linear-to-br from-[#09080E] to-[#727272] p-[14px] rounded-[18px]">
            <Image src={whiteLogo} alt="Collis" className="w-[52px] h-[52px]" />
          </div>
        </div>

        <h4 className="text-[var(--text-secondary)] text-[18px] font-semibold tracking-[10%]">
          PRICING
        </h4>

        <h2 className="text-[var(--text-primary)] text-[50px] text-center font-bold leading-tight">
          Less on Fees, More on Your <span className="block">Experience</span>
        </h2>

        <p className="text-center text-[var(--text-secondary)]">
          We charge a flat fee of only 350 RWF <span className="text-[var(--text-primary)]">($0.25)</span> per transaction,{" "}
          <span className="block">
            regardless of the amount. Wallet top-ups incur a <span className="text-[var(--text-primary)]">3%</span>
          </span>{" "}
          processing fee charged by our payment processor.
        </p>
      </div>

      <GradientSection title="Try it for Free" />
    </main>
  );
};

export default PricingContent;
