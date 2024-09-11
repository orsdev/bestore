import { IProduct } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

export const Product = ({
  name,
  price,
  image,
  product_id,
  brand,
}: IProduct) => {
  return (
    <Link
      href={`/product/${product_id}`}
      className="grid grid-rows-[1fr_minmax(25px_50px)_40px] place-items-stretch w-full min-h-full justify-stretch items-stretch relative"
    >
      <div className="bg-[#eeecec] overflow-hidden relative rounded-2xl">
        <Image
          src={image}
          alt={name}
          loading="lazy"
          width={250}
          height={250}
          className="w-full object-cover aspect-square"
        />
      </div>
      <p className="text-2xl line-clamp-2 overflow-hidden mt-2">{name}</p>
      <p className="text-lg bg-grey py-1 rounded bg-gray-100 px-2 justify-self-start my-1">
        {brand}
      </p>
      <p className="text-2xl font-extrabold">${price}</p>
    </Link>
  );
};
