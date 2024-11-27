import Image from "next/image";
import logo from "@/public/images/Logo.svg";
import logo2 from "@/public/images/logo2.svg";
import logo3 from "@/public/images/logo3.svg";
import logo4 from "@/public/images/logo4.svg";
import logo5 from "@/public/images/logo5.svg";
import logo6 from "@/public/images/logo6.svg";

const Hero2 = () => {
  return (
    <div className="bg-custom h-[228px] xl:w-screen max-sm:h-auto xl:mt-10 max-sm:pt-[48px] max-sm:pl-[24px] pt-[80px] flex max-sm:flex-col max-sm:items-start">
      {/* Text Section */}
      <p className="font-[Roboto] text-[24px] max-sm:text-[18px] ml-2 font-bold leading-[33.6px] max-sm:leading-[26px]">
        Trusted by 2000+ companies <br className="max-sm:hidden" />
        worldwide.
      </p>

      {/* Logos Section */}
      <div className="space-x-[30px] flex ml-[64px] max-sm:ml-0 max-sm:mt-[24px] max-sm:space-x-0 max-sm:space-y-[16px] max-sm:flex-wrap max-sm:gap-4 max-sm:justify-start">
        <Image
          src={logo}
          alt="company logo"
          width={123.8}
          height={38.52}
          className="max-sm:h-[33.34px] max-sm:w-[107.15px]"
        />
        <Image
          src={logo2}
          alt="company logo"
          width={123.8}
          height={38.52}
          className="max-sm:h-[33.34px] max-sm:w-[107.15px]"
        />
        <Image
          src={logo3}
          alt="company logo"
          width={123.8}
          height={38.52}
          className="max-sm:h-[33.34px] max-sm:w-[107.15px]"
        />
        <Image
          src={logo4}
          alt="company logo"
          width={123.8}
          height={38.52}
          className="max-sm:hidden"
        />
        <Image
          src={logo5}
          alt="company logo"
          width={123.8}
          height={38.52}
          className="max-sm:hidden"
        />
        <Image
          src={logo6}
          alt="company logo"
          width={123.8}
          height={38.52}
          className="max-sm:hidden"
        />
      </div>
    </div>
  );
};

export default Hero2;
