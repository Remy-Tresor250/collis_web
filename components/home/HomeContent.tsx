import GradientSection from "../GradientSection";

const HomeContent = () => {
  return (
    <main className="w-full flex flex-col overflow-y-scroll gap-[15px]">
      <h3 className="uppercase text-[var(--text-secondary)] tracking-wide font-semibol text-[18px] px-[20%]">
        Collis Manifesto
      </h3>
      <h2 className="text-[var(--text-primary)] text-[35px] tracking-wide font-bold leading-tight mt-[15px] px-[20%]">
        Payments Simplified for Rwanda{" "}
        <span className="block">Visitors & Tourists</span>
      </h2>

      <div className="w-full flex flex-col gap-[30px] items-start mt-[40px] px-[20%]">
        <p className="text-[var(--text-secondary)] text-[20px] font-medium">
          Rwanda is one of the fastest-growing digital economies in Africa, 
          where mobile money powers everyday life.
        </p>

        <p className="text-[var(--text-secondary)] text-[20px] font-medium">
          Most small businesses, moto riders, and taxi drivers do not accept
          card payments and often don’t have change to offer, making mobile
          money the easiest way to transact.
        </p>

        <p className="text-[var(--text-secondary)] text-[20px] font-medium">
          The
          <span className="bg-[var(--chip-background)] text-[var(--chip-foreground)] py-[4px] px-[6px] rounded-[10px] mx-[3px]">
            Challenge
          </span>
          is that mobile money works on top of telecom operators (MTN, Airtel).
          Arriving, you first have to register through one. Then find an ATM to
          withdraw cash, and go to an agent to load that cash onto your simcard.
          Only after that can you start paying.
        </p>

        <p className="text-[var(--text-secondary)] text-[20px] font-medium">
          Exhausting, right?
        </p>

        <p className="text-[var(--text-secondary)] text-[20px] font-medium">
          We built
          <span className="bg-[var(--chip-background)] text-[var(--chip-foreground)] py-[4px] px-[6px] rounded-[10px] mx-[3px]">
            Collis
          </span>
          so you can start your adventure the moment you arrive, not after
          struggling to set up payment methods.
        </p>

        <div className="w-full flex flex-row gap-[4%] items-center">
          <div className="bg-[var(--text-muted-strong)] w-[6px] rounded-full h-[180px]" />
          <div className="flex flex-col items-start">
            <p className="text-[var(--text-muted-strong)] text-[22px] font-bold">With Collis:</p>
            <p className="text-[var(--text-muted-strong)] text-[22px] font-bold">
              You don&apos;t need a SIM Card
            </p>
            <p className="text-[var(--text-muted-strong)] text-[22px] font-bold">
              You don&apos;t need ATM withdraws
            </p>
            <p className="text-[var(--text-muted-strong)] text-[22px] font-bold">
              And you certainly don’t need to struggle.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col pl-[20px] gap-[10px]">
          <div className="w-full flex flex-row items-start gap-[12px]">
            <div className="w-2 h-2 bg-[var(--text-secondary)] rounded-full mt-[10px]" />
            <p className="text-[22px] font-medium text-[var(--text-secondary)] leading-tight">
              <span className="font-semibold text-[var(--text-primary)]">Top up your wallet</span>{" "}
              Instantly using your debit/credit card and
            </p>
          </div>

          <div className="w-full flex flex-row items-start gap-[12px]">
            <div className="w-2 h-2 bg-[var(--text-secondary)] rounded-full mt-[10px]" />
            <p className="text-[22px] font-medium text-[var(--text-secondary)] leading-tight">
              <span className="font-semibold text-[var(--text-primary)]">Start paying immediately,</span>{" "}
              wherever you go. And when you leave Rwanda, you can
            </p>
          </div>

          <div className="w-full flex flex-row items-start gap-[12px]">
            <div className="w-2 h-2 bg-[var(--text-secondary)] rounded-full mt-[10px]" />
            <p className="text-[22px] font-medium text-[var(--text-secondary)] leading-tight">
              <span className="font-semibold text-[var(--text-primary)]">
                Withdraw your remaining balance
              </span>{" "}
              through PayPal anytime
            </p>
          </div>
        </div>

        <p className="text-[var(--text-secondary)] text-[28px] font-medium italic mt-[20px]">
          Rwanda&apos;s remarkable Experience, starts with Collis on your phone.
        </p>
      </div>

      <GradientSection title="Arrive & Start Paying." />
    </main>
  );
};

export default HomeContent;
