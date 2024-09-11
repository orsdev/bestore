import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="sticky z-50 top-0 left-0 w-full bg-white">
      <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3 justify-between">
        <Link className="flex flex-grow items-center" href="/">
          <img
            className="w-[45px] cursor-pointer"
            src="/images/logo.png"
            alt="logo"
          />
          <div className="ml-2">
            <h4 className="text-[1.4rem]">
              <span className="text-red-500 cursive">Be</span>Store
            </h4>
          </div>
        </Link>

        <div className="flex items-center">
          <Image
            src="/images/icons/basket.svg"
            alt="Cart Button"
            width={18}
            height={18}
          />
          <p className="text-lg font-semibold">100</p>
        </div>
      </nav>
    </header>
  );
};
