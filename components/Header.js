import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const HeaderData = {
  logoText: '<span class="font-semibold">Jozef</span> Bachorík<span class="text-accent leading-none font-medium"> .</span>',
};

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-y-6 gap-y-2 py-8">
          <Link href={"/"}> 
            <span
              className="font-['Helvetica Neu'] font-thin lowercase text-xl sm:text-2xl md:text-4xl  tracking-wide"
              dangerouslySetInnerHTML={{ __html: HeaderData.logoText }}
            />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
