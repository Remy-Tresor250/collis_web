"use client";
import type { ComponentType } from "react";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import { FaApple } from "react-icons/fa";
const UnsafeShaderGradient = ShaderGradient as ComponentType<
  Record<string, unknown>
>;
const GradientSection = ({ title }: { title: string }) => {
  return (
    <section
      id="get-app"
      className="w-full my-[30px] lg:h-[690px] md:h-[550px] h-[400px] relative isolate overflow-hidden flex flex-col items-center justify-center gap-[55px] scroll-mt-[100px]"
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
        {title}
      </h2>
      <button className="p-[3.5px] bg-[#FFFFFF4D] rounded-full z-20">
        <div className="md:px-[22px] px-[18px] md:py-[14px] py-[12px] rounded-full flex flex-row items-center gap-[8px] bg-linear-to-b from-[#FFFFFF] to-[#999999]">
          <FaApple
            className="lg:size-[35px] md:size-[28px] size-[22px]"
            color="black"
          />
          <p className="text-black lg:text-[18px] md:text-[15px] text-[12px] font-semibold">
            Download for ios
          </p>
        </div>
      </button>
    </section>
  );
};
export default GradientSection;
