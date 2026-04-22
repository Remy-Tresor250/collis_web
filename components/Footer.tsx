import Image from "next/image";
import blackLogo from "@/assets/svgs/blackLogo.svg";
import Link from "next/link";

const legals = [
  { name: "Terms of Service", url: "#" },
  { name: "Privacy Policy", url: "#" },
  { name: "KYC Policy", url: "#" },
  { name: "Data Processing Arrangement", url: "#" },
];

const Footer = () => {
  return (
    <div className="w-full px-[8%]">
      <div className="w-full bg-[var(--surface-soft)] rounded-t-[20px] lg:px-[10%] px-[5%] py-[40px] flex flex-col md:flex-row items-start justify-between gap-[40px] md:gap-[20px]">
        <div className="md:w-[50%] w-full flex flex-col gap-[30px]">
          <Link href={"https://collis.so"} className="flex flex-row gap-[6px] items-center">
            <Image
              src={blackLogo}
              alt="Collis logo"
              className="theme-logo lg:w-[41px] lg:h-[41px] md:w-[30px] md:h-[30px] w-[23px] h-[23px]"
            />
            <h4 className="text-[var(--text-primary)] font-arp lg:text-[32px] md:text-[25px] text-[18px]">Collis</h4>
          </Link>

          <p className="text-[var(--text-secondary)] font-regular lg:text-[15px] text-[12px]">
            Collis is a digital wallet for visitors and tourists to Rwanda,
            enabling instant cashless payments.
          </p>
          <p className="text-[var(--text-secondary)] font-regular lg:text-[15px] text-[12px]">
            Users can seamlessly pay anyone via mobile money without needing to
            register for a local SIM card
          </p>

          <p className="text-[var(--text-secondary)] font-semibold lg:text-[14px] text-[12px]">&copy; 2026 Collis. All rights reserved.</p>
        </div>

        <div className="md:w-[50%] w-full flex flex-row items-start justify-evenly">
          <div className="flex flex-col gap-[12px] items-start">
            <h4 className="lg:text-[18px] text-[15px] text-[var(--text-primary)] font-semibold mb-[20px]">
              Legal
            </h4>

            {legals.map((item, index) => (
              <Link href={item.url} key={index}>
                <p className="text-[var(--text-secondary)] lg:text-[14px] text-[13px] font-medium">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-[12px] items-start">
            <h4 className="lg:text-[18px] text-[15px] text-[var(--text-primary)] font-semibold mb-[20px]">
              Links
            </h4>

            <Link href={"#"}>
              <p className="text-[var(--text-secondary)] lg:text-[14px] text-[13px] font-medium">Pricing</p>
            </Link>

            <Link href={"#"}>
              <div className="flex flex-row items-center gap-[3px]">
                <p className="text-[var(--text-secondary)] lg:text-[14px] text-[13px] font-medium">
                  Get app
                </p>
                <div className="text-white font-semibold bg-[#459CFF] text-[10px] rounded-full px-[6px] py-[2px]">
                  Beta
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
