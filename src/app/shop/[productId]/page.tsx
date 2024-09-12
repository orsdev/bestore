import { CenteredLayout } from "@/components/layout";
import { ProductOverview, ProductSlider } from "@/components/product";
import { getProducts } from "@/components/ui";
import { IProduct } from "@/models";

interface IProductPage {
  params: { productId: string };
}

export default async function ProductPage({ params }: IProductPage) {
  const product = await getProducts();
  const findProduct = product?.find(
    (item) => item.product_id.toString() === params?.productId,
  );

  const { name } = findProduct as IProduct;

  return (
    <CenteredLayout>
      <div className="mt-14">
        <h3 className="text-md">Home / Products / {name}</h3>
        <section className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 px-5 sm:px-10 md:px-36 overflow-hidden mt-20 min-h-[600px]">
          <ProductSlider name={name} />
          <ProductOverview product={findProduct} />
        </section>
      </div>
    </CenteredLayout>
  );
}
