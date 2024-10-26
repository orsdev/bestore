import { appRoutes } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export const HomeHero = () => {
  return (
    <section className="header-banner h-[550px] w-full bg-yellow-50 px-4 overflow-hidden relative ">
      <Image
        src="/images/bg2.png"
        alt="Smilling Lady in glasses"
        className="w-full h-full object-cover"
        quality={100}
        priority={true}
        fill
      />
      <div className="flex flex-col items-center justify-center h-full relative z-50">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-gray-700 mx-auto max-w-[800px]">
          Elevate Your Style with
          <br /> Our New Collection
        </h1>
        <Link
          href={appRoutes.index()}
          className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium text-lg xl:text-xl rounded-xl p-3 px-4 text-center inline-flex items-center dark:focus:ring-gray-500 mt-4"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};
