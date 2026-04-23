"use client";

import type { ComponentType } from "react";
import { useEffect, useState } from "react";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import QRCode from "react-qr-code";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import {
  ANDROID_PLAY_STORE_URL,
  FALLBACK_SITE_URL,
  getDownloadEntryUrl,
  IOS_APP_STORE_URL,
  type MobilePlatform,
} from "@/lib/download";

const UnsafeShaderGradient = ShaderGradient as ComponentType<
  Record<string, unknown>
>;

const detectPlatform = (): MobilePlatform => {
  if (typeof navigator === "undefined") {
    return "other";
  }

  const normalizedAgent = navigator.userAgent.toLowerCase();

  if (/iphone|ipad|ipod/.test(normalizedAgent)) {
    return "ios";
  }

  if (/android/.test(normalizedAgent)) {
    return "android";
  }

  return "other";
};

const GradientSection = () => {
  const [platformState, setPlatformState] = useState(() => ({
    platform: "other" as MobilePlatform,
    downloadEntryUrl: getDownloadEntryUrl(FALLBACK_SITE_URL),
  }));

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setPlatformState({
        platform: detectPlatform(),
        downloadEntryUrl: getDownloadEntryUrl(window.location.origin),
      });
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const { platform, downloadEntryUrl } = platformState;
  const isMobileStoreCta = platform === "ios" || platform === "android";
  const mobileLabel =
    platform === "android" ? "Download on Android" : "Download on iOS";
  const mobileHref =
    platform === "android" ? ANDROID_PLAY_STORE_URL : IOS_APP_STORE_URL;
  const MobileIcon = platform === "android" ? FaGooglePlay : FaApple;

  return (
    <section
      id="get-app"
      className="w-full my-[30px] lg:h-[690px] md:h-[550px] min-h-[420px] relative isolate overflow-hidden flex flex-col items-center justify-center gap-[28px] md:gap-[40px] px-[24px] py-[36px] scroll-mt-[100px]"
    >
      <div className="absolute pointer-events-none inset-0 z-1 transform-gpu will-change-transform bg-[#09080E]">
        <ShaderGradientCanvas>
          <UnsafeShaderGradient
            animate="on"
            brightness={1}
            cAzimuthAngle={180}
            cDistance={2.8}
            cPolarAngle={80}
            cameraZoom={9.1}
            color1="#606080e9"
            color2="#8c7dca"
            color3="#212121"
            destination="onCanvas"
            embedMode="off"
            envPreset="city"
            format="gif"
            fov={45}
            frameRate={10}
            gizmoHelper="hide"
            grain="on"
            lightType="3d"
            pixelDensity={1}
            positionX={0}
            positionY={0}
            positionZ={0}
            range="disabled"
            rangeEnd={40}
            rangeStart={0}
            reflection={0.1}
            rotationX={50}
            rotationY={0}
            rotationZ={-60}
            shader="defaults"
            type="waterPlane"
            uAmplitude={0}
            uDensity={1}
            uFrequency={0}
            uSpeed={0.3}
            uStrength={1.5}
            uTime={8}
            wireframe={false}
          />
        </ShaderGradientCanvas>
      </div>
      <div className="px-[18px] py-[12px] rounded-full liquid-glass z-20">
        <p className="text-white text-[14px] font-semibold">Beta 1.0.0</p>
      </div>
      <h2 className="font-bold text-[25px] md:text-[40px] lg:text-[68px] bg-gradient-to-b from-[#fff] via-[#fff] to-[#4E4E4E] bg-clip-text dark:text-transparent z-20">
        {isMobileStoreCta ? "Download Collis" : "Scan to Download"}
      </h2>

      {isMobileStoreCta ? (
        <a
          href={mobileHref}
          className="p-[3.5px] bg-[#FFFFFF4D] rounded-full z-20"
        >
          <div className="md:px-[22px] px-[18px] md:py-[14px] py-[12px] rounded-full flex flex-row items-center gap-[8px] bg-linear-to-b from-[#FFFFFF] to-[#999999]">
            <MobileIcon
              className="lg:size-[35px] md:size-[28px] size-[22px]"
              color="black"
            />
            <p className="text-black lg:text-[18px] md:text-[15px] text-[12px] font-semibold">
              {mobileLabel}
            </p>
          </div>
        </a>
      ) : (
        <div className="z-20 flex flex-col items-center bg-[#FFFFFF1A] p-[10px]">
          <QRCode
            value={downloadEntryUrl}
            size={176}
            bgColor="#FFFFFF1A"
            fgColor="#FFFFFF"
          />
        </div>
      )}
    </section>
  );
};
export default GradientSection;
