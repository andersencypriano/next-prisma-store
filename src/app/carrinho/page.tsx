"use client";
import { useStoreMT } from "@/store/cart";
import { ProductType } from "@/types/ProductType";
import ProductItem from "../components/ProductItem";

export default function cartPage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { cart } = useStoreMT();

  return (
    <>
      <div className="mt-20 container mx-auto">
        <h2 className="text-center mb-4 text-2xl font-bold">Carrinho</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-9 gap-y-10">
          {cart.map((product: ProductType) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
