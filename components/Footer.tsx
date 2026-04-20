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
      <div className="w-full bg-[var(--surface-soft)] rounded-t-[20px] px-[10%] py-[40px] flex flex-row items-start justify-between">
        <div className="w-[50%] flex flex-col gap-[30px]">
          <div className="flex flex-row gap-[6px] items-center">
            <Image
              src={blackLogo}
              alt="Collis logo"
              className="theme-logo w-[41px] h-[41px]"
            />
            <h4 className="text-[var(--text-primary)] font-arp text-[32px]">Collis</h4>
          </div>

          <p className="text-[var(--text-secondary)] font-regular text-[15px]">
            Collis is a digital wallet for visitors and tourists to Rwanda,
            enabling instant cashless payments.
          </p>
          <p className="text-[var(--text-secondary)] font-regular text-[15px]">
            Users can seamlessly pay anyone via mobile money without needing to
            register for a local SIM card
          </p>

          <p className="text-[var(--text-secondary)] font-semibold text-[14px]">&copy; 2026 Collis. All rights reserved.</p>
        </div>

        <div className="w-[50%] flex flex-row items-start justify-evenly">
          <div className="flex flex-col gap-[12px] items-start">
            <h4 className="text-[18px] text-[var(--text-primary)] font-semibold mb-[20px]">
              Legal
            </h4>

            {legals.map((item, index) => (
              <Link href={item.url} key={index}>
                <p className="text-[var(--text-secondary)] text-[14px] font-medium">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-[12px] items-start">
            <h4 className="text-[18px] text-[var(--text-primary)] font-semibold mb-[20px]">
              Links
            </h4>

            <Link href={"#"}>
              <p className="text-[var(--text-secondary)] text-[14px] font-medium">Pricing</p>
            </Link>

            <Link href={"#"}>
              <div className="flex flex-row items-center gap-[3px]">
                <p className="text-[var(--text-secondary)] text-[14px] font-medium">
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
