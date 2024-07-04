"use client";
import { useStoreMT } from "@/store/cart";
import { ProductType } from "@/types/ProductType";
import ProductItem from "../components/ProductItem";
import CartList from "../components/Cart/CartList";
import ClearCart from "../components/Cart/Buttons/ClearCart";

export default function cartPage() {
  


  return (
    <>
      <div className="mt-20 container mx-auto">
        <h2 className="text-center mb-4 text-2xl font-bold">Carrinho</h2>
        <CartList/>
        <div className="mt-10 max-w-52 mx-auto">
          <ClearCart/>
        </div>
      </div>
    </>
  );
}
