"use client";

import { IProduct } from "@/models";
import { getDiscountedPrice } from "@/utils";
import { Rating } from "../ui";
import { useCartStore } from "@/store";
import { useToast } from "@/hooks/use-toast";
import { Button } from "../ui/button";
import { ShoppingCart } from "@/store/cart/cart.util";

interface IProductOverview {
  product?: IProduct;
}

export const ProductOverview = ({ product }: IProductOverview) => {
  const { toast } = useToast();
  const { name, brand, price, rating, discount, description } = product || {};
  const { addItemToCart, cartItems, toggleCart } = useCartStore(
    (state) => state,
  );

  const handleAddToCart = (item: IProduct) => {
    addItemToCart(item as IProduct);
    toggleCart();
    toast({
      description: `${item.name} added to cart`,
    });
  };

  return (
    <div className="w-1/2 max-lg:w-4/5">
      <h2 className="text-orange font-bold text-sm">{brand}</h2>
      <h1 className="text-4xl mt-4 mb-4 max-sm:text-3xl">{name}</h1>
      <p>{description}</p>
      <div className="flex flex-col items-start gap-4 mt-4 mb-5  max-sm:justify-between max-sm:mb-7">
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <span className="font-bold text-4xl">
            $
            {getDiscountedPrice(price as number, discount as number).toFixed(2)}
          </span>
          {discount && (
            <span className="text-orange bg-pale-orange py-1 px-2 rounded-sm">
              50% discount
            </span>
          )}
        </div>
        {discount && <p className="line-through font-bold text-lg">${price}</p>}
      </div>
      <div>
        <Rating value={rating || 0} isDisabled isReadOnly />
      </div>
      <div className="mt-6">
        <Button
          disabled={ShoppingCart.isInCart(
            product?.product_id as number,
            cartItems,
          )}
          className="px-6 py-3 text-base font-medium rounded-lg"
          onClick={() => handleAddToCart(product as IProduct)}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};
