"use client";

import AnimatedTextReveal from "../AnimatedTextReveal";
import GradientSection from "../GradientSection";
import { useRevealSequence } from "../useRevealSequence";

const HomeContent = () => {
  const { canPlay, markComplete } = useRevealSequence();
  const sequenceProps = (index: number) => ({
    play: canPlay(index),
    onRevealComplete: () => markComplete(index),
  });

  // Show the vertical bar + "With Collis" block only once sequence reaches index 7
  const showCollisBlock = canPlay(7);

  return (
    <main className="w-full flex flex-col overflow-y-scroll gap-[15px]">
      <AnimatedTextReveal
        as="h3"
        duration={0.8}
        className="uppercase text-[var(--text-secondary)] tracking-wide font-semibold text-[15px] sm:text-[18px] px-[10%] md:px-[20%]"
        {...sequenceProps(0)}
      >
        Collis Manifesto
      </AnimatedTextReveal>

      <AnimatedTextReveal
        as="h2"
        duration={0.8}
        className="lg:text-[35px] text-[25px] tracking-wide font-bold leading-tight mt-[15px] px-[10%] md:px-[20%]"
        contentClassName="text-[var(--text-primary)]"
        {...sequenceProps(1)}
      >
        Payments Simplified for Rwanda
        <span className="block text-[var(--text-primary)] dark:bg-gradient-to-b dark:from-[var(--text-primary)] dark:via-[#C7C7C7] dark:to-[#7A7A7A] dark:bg-clip-text dark:text-transparent">
          Visitors & Tourists
        </span>
      </AnimatedTextReveal>

      <div className="w-full flex flex-col gap-[30px] items-start mt-[40px] px-[10%] md:px-[20%]">
        <AnimatedTextReveal
          as="p"
          className="text-[var(--text-secondary)] text-[16px] lg:text-[20px] font-medium"
          delay={0}
          {...sequenceProps(2)}
        >
          Rwanda is one of the fastest-growing digital economies in Africa,
          where mobile money powers everyday life.
        </AnimatedTextReveal>

        <AnimatedTextReveal
          as="p"
          className="text-[var(--text-secondary)] text-[16px] lg:text-[20px] font-medium"
          {...sequenceProps(3)}
        >
          Most small businesses, moto riders, and taxi drivers do not accept
          card payments and often don&apos;t have change to offer, making mobile
          money the easiest way to transact.
        </AnimatedTextReveal>

        <AnimatedTextReveal
          as="p"
          className="text-[var(--text-secondary)] text-[16px] lg:text-[20px] font-medium"
          {...sequenceProps(4)}
        >
          The{" "}
          <span className="bg-[var(--chip-background)] text-[var(--chip-foreground)] py-[4px] px-[6px] rounded-[10px] mx-[3px]">
            Challenge
          </span>{" "}
          is that mobile money works on top of telecom operators (MTN, Airtel).
          Arriving, you first have to register through one. Then find an ATM to
          withdraw cash, and go to an agent to load that cash onto your simcard.
          Only after that can you start paying.
        </AnimatedTextReveal>

        <AnimatedTextReveal
          as="p"
          className="text-[var(--text-secondary)] text-[16px] lg:text-[20px] font-medium"
          {...sequenceProps(5)}
        >
          Exhausting, right?
        </AnimatedTextReveal>

        <AnimatedTextReveal
          as="p"
          className="text-[var(--text-secondary)] text-[16px] lg:text-[20px] font-medium"
          {...sequenceProps(6)}
        >
          We built{" "}
          <span className="bg-[var(--chip-background)] text-[var(--chip-foreground)] py-[4px] px-[6px] rounded-[10px] mx-[3px]">
            Collis
          </span>{" "}
          so you can start your adventure the moment you arrive, not after
          struggling to set up payment methods.
        </AnimatedTextReveal>

        <div className="w-full flex flex-row gap-[4%] items-center">
          <div
            className={`${showCollisBlock ? "flex" : "hidden"} bg-[var(--text-muted-strong)] w-[6px] rounded-full h-[100px] lg:h-[180px] transition-all duration-500`}
          />

          <div className="flex flex-col items-start w-full">
            <AnimatedTextReveal
              duration={0.5}
              as="p"
              className="w-full text-[var(--text-muted-strong)] text-[16px] lg:text-[21px] font-bold"
              {...sequenceProps(7)}
            >
              With Collis:
            </AnimatedTextReveal>
            <AnimatedTextReveal
              duration={0.5}
              as="p"
              className="w-full text-[var(--text-muted-strong)] text-[16px] lg:text-[21px] font-bold"
              {...sequenceProps(8)}
            >
              You don&apos;t need a SIM Card
            </AnimatedTextReveal>
            <AnimatedTextReveal
              duration={0.5}
              as="p"
              className="w-full text-[var(--text-muted-strong)] text-[16px] lg:text-[21px] font-bold"
              {...sequenceProps(9)}
            >
              You don&apos;t need ATM withdraws
            </AnimatedTextReveal>
            <AnimatedTextReveal
              duration={0.5}
              as="p"
              className="w-full text-[var(--text-muted-strong)] text-[16px] lg:text-[21px] font-bold"
              {...sequenceProps(10)}
            >
              And you certainly don&apos;t need to struggle.
            </AnimatedTextReveal>
          </div>
        </div>

        <div className="w-full flex flex-col pl-[20px] gap-[10px]">
          <div className="w-full flex flex-row items-start gap-[12px]">
            <div
              className="w-2 h-2 rounded-full mt-[10px] flex-shrink-0 transition-opacity duration-300"
              style={{
                background: "var(--text-secondary)",
                opacity: canPlay(11) ? 1 : 0,
              }}
            />
            <AnimatedTextReveal
              as="p"
              duration={0.5}
              className="w-full text-[16px] lg:text-[21px] font-medium text-[var(--text-secondary)] leading-tight"
              {...sequenceProps(11)}
            >
              <span className="font-semibold text-[var(--text-primary)]">
                Top up your wallet
              </span>{" "}
              Instantly using your debit/credit card and
            </AnimatedTextReveal>
          </div>

          <div className="w-full flex flex-row items-start gap-[12px]">
            <div
              className="w-2 h-2 rounded-full mt-[10px] flex-shrink-0 transition-opacity duration-300"
              style={{
                background: "var(--text-secondary)",
                opacity: canPlay(12) ? 1 : 0,
              }}
            />
            <AnimatedTextReveal
              as="p"
              duration={0.5}
              className="w-full text-[16px] lg:text-[21px] font-medium text-[var(--text-secondary)] leading-tight"
              {...sequenceProps(12)}
            >
              <span className="font-semibold text-[var(--text-primary)]">
                Start paying immediately,
              </span>{" "}
              wherever you go. And when you leave Rwanda, you can
            </AnimatedTextReveal>
          </div>

          <div className="w-full flex flex-row items-start gap-[12px]">
            <div
              className="w-2 h-2 rounded-full mt-[10px] flex-shrink-0 transition-opacity duration-300"
              style={{
                background: "var(--text-secondary)",
                opacity: canPlay(13) ? 1 : 0,
              }}
            />
            <AnimatedTextReveal
              as="p"
              duration={0.5}
              className="w-full text-[16px] lg:text-[21px] font-medium text-[var(--text-secondary)] leading-tight"
              {...sequenceProps(13)}
            >
              <span className="font-semibold text-[var(--text-primary)]">
                Withdraw your remaining balance
              </span>{" "}
              through PayPal anytime
            </AnimatedTextReveal>
          </div>
        </div>

        <AnimatedTextReveal
          as="p"
          className="text-[var(--text-secondary)] text-[18px] lg:text-[28px] font-medium italic mt-[20px]"
          {...sequenceProps(14)}
        >
          Rwanda&apos;s remarkable Experience, starts with Collis on your phone.
        </AnimatedTextReveal>
      </div>

      <GradientSection title="Arrive & Start Paying." />
    </main>
  );
};

export default HomeContent;
