import { HomeHero } from "@/components/home";
import { Product, ProductSkeleton } from "@/components/ui";
import { baseEndpoint } from "@/constants";
import { IProduct } from "@/interfaces";
import { Suspense } from "react";

export default async function Home() {
  const data = await fetch(`${baseEndpoint}/products`);
  const products = (await data.json()) as Array<IProduct>;

  return (
    <>
      <HomeHero />
      <div className="my-[100px] max-w-[1100px] mx-auto px-[20px] lg:px-8">
        <h1 className="mb-32 text-center text-6xl cursive text-gray-600">
          New Collections
        </h1>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-[20px] gap-y-[40px]">
          <Suspense fallback={<ProductSkeleton />}>
            {products?.map((item) => (
              <Product key={item.product_id} {...(item || {})} />
            ))}
          </Suspense>
        </div>
      </div>
    </>
  );
}
