import { ProductType } from "@/types/ProductType";
import { create } from "zustand";

interface CartItem extends ProductType {
  count: number;
}

type CartStore = {
  cart: CartItem[];
  count: () => number;
  add: (product: ProductType) => void;
  remove: (idProduct: number) => void;
  removeAll: () => void;
};

export const useStoreMT = create<CartStore>((set, get) => ({
  cart: [],
  count: () => {
    const { cart } = get();
    return cart.length;
  },
  add: (product: ProductType) => {
    const { cart } = get();
    const updatedCart = updateCart(product, cart);
    set({ cart: updatedCart });
  },
  remove: (idProduct: number) => {
    const { cart } = get();
    const updatedCart = remove(idProduct, cart);
    set({ cart: updatedCart });
  },
  removeAll: () => set({ cart: [] }),
}));

function updateCart(product: ProductType, cart: CartItem[]): CartItem[] {
  const cartItem = { ...product, count: 1 } as CartItem;

  const productOnCart = cart.map((item) => item.id).includes(product.id);

  if (!productOnCart) cart.push(cartItem);
  else {
    return cart.map((item) => {
      if (item.id === product.id)
        return { ...item, count: item.count + 1 } as CartItem;
      return item;
    });
  }

  return cart;
}

function remove(idProduct: number, cart: CartItem[]): CartItem[] {
  return cart
    .map((item) => {
      if (item.id === idProduct) return { ...item, count: item.count - 1 };
      return item;
    })
    .filter((item) => {
      return item.count;
    });
}
