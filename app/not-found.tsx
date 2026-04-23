import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-full flex-1 px-[5%] md:px-[10%] pb-[20px]">
      <section className="relative mx-auto flex min-h-[calc(100vh-260px)] max-w-[1120px] items-center justify-center overflow-hidden rounded-[36px] bg-[var(--surface-soft)] px-[24px] py-[48px] sm:px-[36px] lg:px-[56px]">
        <div className="pointer-events-none absolute inset-0 opacity-80">
          <div className="absolute left-[-8%] top-[-12%] h-[240px] w-[240px] rounded-full bg-[#459CFF]/18 blur-[80px]" />
          <div className="absolute bottom-[-14%] right-[-6%] h-[280px] w-[280px] rounded-full bg-white/12 blur-[100px]" />
        </div>

        <div className="relative z-10 grid w-full items-center">
          <div className="w-full flex flex-col items-start gap-[18px]">
            <div className="rounded-full bg-[var(--chip-background)] px-[14px] py-[8px]">
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[var(--chip-foreground)] sm:text-[13px]">
                Error 404
              </p>
            </div>

            <h1 className="font-arp text-[32px] leading-none text-[var(--text-primary)] sm:text-[48px] lg:text-[68px]">
              This route
              <span className="mt-[6px] block">doesn&apos;t exist.</span>
            </h1>

            <p className="text-[16px] leading-relaxed text-[var(--text-secondary)] sm:text-[19px]">
              The page you were trying to reach is not available. Let&apos;s get
              you back to Collis so you can keep exploring pricing, the product,
              or how to get started in Rwanda.
            </p>

            <div className="flex flex-col gap-[12px] pt-[8px] sm:flex-row sm:flex-wrap">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-[var(--text-primary)] px-[22px] py-[13px] text-[15px] font-semibold text-[var(--background)] transition-transform duration-200 hover:-translate-y-[1px]"
              >
                Back to Manifesto
              </Link>

              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-[var(--text-primary)]/12 bg-white/30 px-[22px] py-[13px] text-[15px] font-semibold text-[var(--text-primary)] backdrop-blur-sm transition-colors duration-200 hover:bg-white/45 dark:bg-white/8 dark:hover:bg-white/12"
              >
                View Pricing
              </Link>

              <Link
                href="/pricing#get-app"
                className="inline-flex items-center justify-center rounded-full border border-transparent px-[18px] py-[13px] text-[15px] font-medium text-[var(--text-secondary)] transition-colors duration-200 hover:text-[var(--text-primary)]"
              >
                Get the app
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
