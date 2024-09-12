import { ICart, IProduct } from "@/models";
import { create } from "zustand";
import { ShoppingCart } from "./cart.util";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartState {
  cartItems: ICart[];
  isCartOpen: boolean;
  addItemToCart(item: IProduct): void;
  removeItemFromCart(item: ICart): void;
  increaseItemQty(item: ICart): void;
  reduceItemQty(item: ICart): void;
  toggleCart(): void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cartItems: [],
      isCartOpen: false,
      addItemToCart: (item: ICart) => {
        set((state) => ({
          cartItems: ShoppingCart.addItemToCart({
            itemToBeAdded: item,
            cartItems: state.cartItems,
          }),
        }));
      },
      removeItemFromCart: (item: ICart) => {
        set((state) => ({
          cartItems: ShoppingCart.removeItemFromCart(
            item.product_id,
            state.cartItems,
          ),
        }));
      },
      reduceItemQty: (item: ICart) => {
        set((state) => ({
          cartItems: ShoppingCart.reduceItemQty(
            item.product_id,
            state.cartItems,
          ),
        }));
      },
      increaseItemQty: (item: ICart) => {
        set((state) => ({
          cartItems: ShoppingCart.increaseItemQty(
            item.product_id,
            state.cartItems,
          ),
        }));
      },
      toggleCart: () =>
        set((state) => ({
          isCartOpen: !state.isCartOpen,
        })),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state as CartState).filter(
            ([key]) => !["isCartOpen"].includes(key),
          ),
        ),
    },
  ),
);
