"use client";

import * as React from "react";
import { CircleX } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useCartStore } from "@/store";
import { CartItem } from "./cart-item";
import { ShoppingCart } from "@/store/cart/cart.util";

export const CartDrawer = () => {
  const { isCartOpen, toggleCart, cartItems } = useCartStore((state) => state);
  return (
    <Drawer open={isCartOpen} direction="right">
      <DrawerContent>
        <div className="mx-auto min-w-[350px] flex flex-col h-full">
          {/* Header */}
          <DrawerHeader className="flex justify-between items-center h-12">
            <DrawerTitle>My Cart</DrawerTitle>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-12 shrink-0"
              onClick={toggleCart}
            >
              <CircleX className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
          </DrawerHeader>
          {/* Items */}
          <div className="flex-1 py-10 overflow-y-auto">
            <CartItem />
          </div>
          <hr />
          {/* Footer */}
          <DrawerFooter className="h-[150px] borderflex items-center">
            <div className="flex items-center justify-between w-full">
              <h3 className="text-lg font-bold">Total</h3>
              <h2 className="text-xl font-bold">
                {" "}
                ${ShoppingCart.calculateSubTotal(cartItems).toFixed(2)}
              </h2>
            </div>
            <Button className="w-full" disabled={cartItems.length == 0}>
              Checkout
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
