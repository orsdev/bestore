import { appRoutes, baseEndpoint } from "@/constants";
import { IProduct } from "@/models";
import { getDiscountedPrice } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export async function getProducts() {
  const data = await fetch(`${baseEndpoint}/products`);
  return (await data.json()) as Array<IProduct>;
}

export const Product = async () => {
  const products = await getProducts();
  return (
    <>
      {products?.map(({ name, price, image, product_id, discount, brand }) => (
        <Link
          key={product_id}
          href={appRoutes.product(product_id.toString())}
          className="grid grid-rows-[1fr_minmax(25px_50px)_40px] place-items-stretch w-full min-h-full justify-stretch items-stretch relative bg-white border border-gray-200 pb-4 rounded-xl rounded-b-none overflow-hidden"
        >
          <div className="bg-[#eeecec] overflow-hidden relative">
            {discount && (
              <span className="absolute right-6 top-4 text-md inline-flex items-center rounded-[6px]  min-w-6 bg-red-50 px-2 py-[.5] font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                -{discount}%
              </span>
            )}
            <Image
              src={image}
              alt={name}
              loading="lazy"
              width={250}
              height={250}
              className="w-full object-cover aspect-square"
            />
          </div>
          <div className="px-4 flex flex-col">
            <p className="text-lg line-clamp-2 overflow-hidden mt-2">{name}</p>
            <p className="text-sm bg-grey py-1 rounded bg-gray-100 px-2 my-1 self-baseline">
              {brand}
            </p>
            <div className="flex gap-2 items-center">
              <p className="text-lg font-extrabold">
                ${getDiscountedPrice(price, discount as number).toFixed(2)}
              </p>
              <p className="text-md font-extrabold line-through">${price}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
