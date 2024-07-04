import { ProductType } from "@/types/ProductType";
import { create } from "zustand";

interface CartItem extends ProductType {
  count: number;
}

type CartStore = {
  cart: CartItem[];
  count: () => number;
  add: (product: ProductType) => void;
  removeAll: () => void;
};

export const useStoreMT = create<CartStore>((set, get) => ({
  cart: [],
  count: () => {
    const { cart } = get();
    console.log(cart.length);
    return 0;
  },
  add: (product: ProductType) => {
    const { cart } = get();
  },
  removeAll: () => set({ cart: [] }),
}));
