import { appRoutes } from "@/constants";
import Link from "next/link";

export const HomeHero = () => {
  return (
    <section className="header-banner h-[550px] w-full bg-yellow-50 bg-[url('/images/bg.png')] bg-no-repeat bg-cover px-4">
      <div className="flex flex-col items-center justify-center h-full">
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
