/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useEffectEvent, useState } from "react";
import Image from "next/image";
import blackLogo from "@/assets/svgs/blackLogo.svg";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { href: "/", label: "Manifesto" },
    { href: "/pricing", label: "Pricing" },
  ];

  const syncScrolledState = useEffectEvent(() => {
    setIsScrolled((current) => {
      const next = window.scrollY > 8;
      return current === next ? current : next;
    });
  });

  useEffect(() => {
    window.addEventListener("scroll", syncScrolledState, { passive: true });
    window.addEventListener("resize", syncScrolledState);
    return () => {
      window.removeEventListener("scroll", syncScrolledState);
      window.removeEventListener("resize", syncScrolledState);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleGetAppClick = () => {
    setMobileOpen(false);
    if (pathname === "/" || pathname === "/pricing") {
      const el = document.getElementById("get-app");
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top, behavior: "smooth" });
      }
      return;
    }
    router.push("/pricing#get-app");
  };

  return (
    <div
      className={`fixed top-[30px] z-20 transition-[left,right] duration-300 ease-out ${
        isScrolled
          ? "md:left-[20%] md:right-[20%] left-[10%] right-[10%]"
          : "md:left-[10%] md:right-[10%] left-[5%] right-[5%]"
      }`}
    >
      {/* ── Desktop navbar (md+) ── */}
      <div
        className={`hidden md:flex w-full flex-row items-center rounded-full py-[14px] px-[18px] transition-all duration-100 ease-out ${
          isScrolled
            ? "liquid-glass bg-[var(--nav-surface)] backdrop-blur-[10px] shadow-[var(--nav-shadow)]"
            : "bg-transparent shadow-none"
        }`}
      >
        <Link
          href="https://collis.atomiq.rw"
          className="flex flex-row gap-[6px] items-center"
        >
          <Image
            src={blackLogo}
            alt="Collis logo"
            className="theme-logo lg:w-[31px] lg:h-[31px] w-[25px] h-[25px]"
          />
          <h4 className="font-arp lg:text-[22px] text-[18px] text-[var(--text-primary)]">
            Collis
          </h4>
        </Link>

        <div className="flex-1 flex flex-row items-center justify-center gap-[8px]">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-[16px] py-[8px]"
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 rounded-full bg-[var(--surface-soft)] ring-1 ring-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span
                  className={`relative z-10 lg:text-[15px] text-[12px] font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-[var(--text-primary)]"
                      : "text-[var(--text-secondary)]"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          onClick={handleGetAppClick}
          className="flex flex-row items-center gap-[6px] rounded-full px-[12px] py-[8px] transition-colors duration-200 hover:bg-[var(--surface-soft)]"
        >
          <p className="lg:text-[16px] text-[14px] font-medium text-[var(--text-secondary)]">
            Get app
          </p>
          <div className="text-white font-semibold bg-[#459CFF] text-[10px] rounded-full px-[6px] py-[2px]">
            Beta
          </div>
        </button>
      </div>

      {/* ── Mobile navbar (< md) ── */}
      <div className="md:hidden w-full">
        <motion.div
          animate={{ borderRadius: mobileOpen ? "20px" : "9999px" }}
          transition={{ type: "spring", stiffness: 340, damping: 34 }}
          className={`w-full overflow-hidden transition-[background,box-shadow,backdrop-filter] duration-100 ease-out ${
            isScrolled || mobileOpen
              ? "liquid-glass bg-[var(--nav-surface)] backdrop-blur-[10px] shadow-[var(--nav-shadow)]"
              : "bg-transparent shadow-none"
          }`}
        >
          {/* Top row: logo + toggle */}
          <div className="flex flex-row items-center justify-between py-[14px] px-[18px]">
            <Link
              href="https://collis.atomiq.rw"
              className="flex flex-row gap-[6px] items-center"
            >
              <Image
                src={blackLogo}
                alt="Collis logo"
                className="theme-logo w-[25px] h-[25px]"
              />
              <h4 className="font-arp text-[18px] text-[var(--text-primary)]">
                Collis
              </h4>
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="flex items-center justify-center w-[36px] h-[36px] rounded-full transition-colors duration-200 hover:bg-[var(--surface-soft)]"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                  >
                    <RiCloseLine
                      size={20}
                      className="text-[var(--text-primary)]"
                    />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                  >
                    <RiMenu3Line
                      size={20}
                      className="text-[var(--text-primary)]"
                    />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Expandable menu */}
          <AnimatePresence initial={false}>
            {mobileOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 340,
                  damping: 34,
                  mass: 0.7,
                }}
                className="overflow-hidden"
              >
                <div className="mx-[18px] h-px bg-white/10" />

                <div className="flex flex-col px-[10px] py-[10px] gap-[4px]">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center px-[14px] py-[12px] rounded-[12px] transition-colors duration-200 ${
                          isActive
                            ? "bg-[var(--surface-soft)]"
                            : "hover:bg-[var(--surface-soft)]"
                        }`}
                      >
                        <span
                          className={`text-[15px] font-medium ${
                            isActive
                              ? "text-[var(--text-primary)]"
                              : "text-[var(--text-secondary)]"
                          }`}
                        >
                          {item.label}
                        </span>
                        {isActive && (
                          <span className="ml-auto w-[6px] h-[6px] rounded-full bg-[#459CFF]" />
                        )}
                      </Link>
                    );
                  })}

                  <button
                    type="button"
                    onClick={handleGetAppClick}
                    className="flex flex-row items-center gap-[8px] px-[14px] py-[12px] rounded-[12px] transition-colors duration-200 hover:bg-[var(--surface-soft)]"
                  >
                    <p className="text-[15px] font-medium text-[var(--text-secondary)]">
                      Get app
                    </p>
                    <div className="text-white font-semibold bg-[#459CFF] text-[10px] rounded-full px-[6px] py-[2px]">
                      Beta
                    </div>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
