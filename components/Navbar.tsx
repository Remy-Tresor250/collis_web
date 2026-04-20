"use client";

import { useEffect, useEffectEvent, useState } from "react";
import Image from "next/image";
import blackLogo from "@/assets/svgs/blackLogo.svg";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <div
      className={`fixed top-[30px] z-20 transition-[left,right] duration-300 ease-out ${
        isScrolled ? "left-[20%] right-[20%]" : "left-[10%] right-[10%]"
      }`}
    >
      <div
        className={`w-full flex flex-row items-center rounded-full py-[14px] px-[18px] transition-all duration-100 ease-out ${
          isScrolled
            ? "liquid-glass bg-[var(--nav-surface)] backdrop-blur-[10px] shadow-[var(--nav-shadow)]"
            : "bg-transparent shadow-none"
        }`}
      >
        <Link
          href={"https://collis.atomiq.rw"}
          className="flex flex-row gap-[6px] items-center"
        >
          <Image
            src={blackLogo}
            alt="Collis logo"
            className="theme-logo w-[31px] h-[31px]"
          />
          <h4 className="font-arp text-[22px] text-[var(--text-primary)]">Collis</h4>
        </Link>

        <div className="flex-1 flex flex-row items-center justify-center gap-[18px]">
          <Link href={"/"}>
            <p className="text-[15px] font-medium text-[var(--text-secondary)]">Manifesto</p>
          </Link>

          <Link href={"/pricing"}>
            <p className="text-[15px] font-medium text-[var(--text-secondary)]">Pricing</p>
          </Link>
        </div>

        <Link href={"/getApp"}>
          <div className="flex flex-row items-center gap-[3px]">
            <p className="text-[16px] font-medium text-[var(--text-secondary)]">Get app</p>
            <div className="text-white font-semibold bg-[#459CFF] text-[10px] rounded-full px-[6px] py-[2px]">
              Beta
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
