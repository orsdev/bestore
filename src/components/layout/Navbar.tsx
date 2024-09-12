"use client";

import Image from "next/image";
import Link from "next/link";
import { CenteredLayout } from "./centered-layout";
import { useCartStore } from "@/store";
import { CartDrawer } from "./cart/cart-drawer";

export const Navbar = () => {
  const { cartItems, toggleCart } = useCartStore((state) => state);

  return (
    <>
      <header className="sticky z-50 top-0 left-0 w-full bg-white">
        <CenteredLayout>
          <nav className="flex items-center justify-between">
            <Link className="flex flex-grow items-center" href="/">
              <img
                className="w-[45px] cursor-pointer"
                src="/images/logo.png"
                alt="logo"
              />
              <div className="ml-2">
                <h4 className="text-md">
                  <span className="text-red-500 cursive">Be</span>Store
                </h4>
              </div>
            </Link>

            <button className="flex items-center" onClick={toggleCart}>
              <Image
                src="/images/icons/basket.svg"
                alt="Cart Button"
                width={18}
                height={18}
              />
              <p className="text-sm font-semibold">{cartItems.length}</p>
            </button>
          </nav>
        </CenteredLayout>
      </header>
      <CartDrawer />
    </>
  );
};
