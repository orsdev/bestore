import { ProductDetailsSkeleton } from "@/components/ui";

export default function Loading() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 px-5 sm:px-10 md:px-36 overflow-hidden mt-20 min-h-[600px]">
      <ProductDetailsSkeleton />
    </section>
  );
}
