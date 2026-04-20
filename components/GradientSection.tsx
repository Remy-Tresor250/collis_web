import { FaApple } from "react-icons/fa";

const GradientSection = ({title}: {title: string}) => {
  return (
    <section className="w-full my-[30px] h-[690px] bg-gradient flex flex-col items-center justify-center gap-[55px]">
      <div className="px-[18px] py-[12px] rounded-full liquid-glass">
        <p className="text-white text-[14px] font-semibold">Beta 1.0.0</p>
      </div>

      <h2 className="font-bold text-[68px] text-white">
        {title}
      </h2>

      <button className="p-[3.5px] bg-[#FFFFFF4D] rounded-full">
        <div className="px-[22px] py-[14px] rounded-full flex flex-row items-center gap-[8px] bg-linear-to-b from-[#FFFFFF] to-[#999999]">
          <FaApple size={30} color="black" />
          <p className="text-black text-[18px] font-semibold">
            Download for ios
          </p>
        </div>
      </button>
    </section>
  );
};

export default GradientSection;
