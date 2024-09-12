import { FeaturedProducts, HomeHero } from "@/components/home";
import { CenteredLayout } from "@/components/layout";
import { Product, ProductCardSkeleton } from "@/components/ui";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <HomeHero />
      <CenteredLayout>
        <div className="my-[80px] px-[20px] lg:px-4">
          <h1 className="mb-14 text-center text-5xl cursive text-gray-600">
            Featured
          </h1>
          <div>
            <FeaturedProducts />
          </div>
          <h1 className="my-14 text-center text-5xl cursive text-gray-600">
            New Collections
          </h1>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] gap-[20px] gap-y-[40px]">
            <Suspense fallback={<ProductCardSkeleton />}>
              <Product />
            </Suspense>
          </div>
        </div>
      </CenteredLayout>
    </>
  );
}
