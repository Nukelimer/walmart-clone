import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Product } from "./typings/productTyping";

interface CartState {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeItemFromCart: (product: Product) => void;
}

export  const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],

        addToCart: (product) => {
          set((state) => ({
            cart: [...state.cart, product],
          }));
        },
        removeItemFromCart: (product) => {
          const findingProductToDelete = get().cart.findIndex(
            (p) => p.meta.sku === product.meta.sku
          );

          set((state) => {
            const newCart = [...state.cart];

            newCart.splice(findingProductToDelete, 1);

            return { cart: newCart };
          });
        },
      }),
      {
        name: "cart-storage",
      }
    )
  )
);
