import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCartStore } from "@/store";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";

export const CartItem = () => {
  const { cartItems, reduceItemQty, increaseItemQty, removeItemFromCart } =
    useCartStore();

  return (
    <div className="flex flex-col px-10 gap-10">
      {cartItems.map((item) => (
        <div key={item.product_id} className="flex gap-2">
          <div className="w-[62px] h-[62px] relative flex">
            <Image
              src={item.image}
              width={62}
              height={62}
              alt={item.name}
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
                position: "relative",
              }}
            />
            <Button
              variant="destructive"
              size="icon"
              className="h-6 w-6 shrink-0 rounded-full absolute top-[-8px] -left-2"
              onClick={() => removeItemFromCart(item)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Remove</span>
            </Button>
          </div>

          <div className="flex flex-col gap-2 items-end">
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => reduceItemQty(item)}
              >
                <Minus className="h-4 w-4" />
                <span className="sr-only">Decrease</span>
              </Button>
              <Input
                value={item.quantity}
                readOnly
                className="max-w-[80px] flex"
              />
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => increaseItemQty(item)}
              >
                <Plus className="h-4 w-4" />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
