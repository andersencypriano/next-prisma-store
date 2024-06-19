import { ProductType } from "@/types/ProductType";
import Image from "next/image";
import React from "react";

type ProductProps = {
  product: ProductType;
};

export default function ProductItem({ product }: ProductProps) {
  return (
    <>
      <div>
        <div className="flex justify-center w-full mb-4">
          <Image src={product.image} alt="image" width={200} height={200} className="w-[auto] h-[200px]"/>
        </div>
        <div>
          <h4>{product.title}</h4>
          <span>{product.price}</span>
        </div>
        <button>Adicionar ao carrinho</button>
      </div>
    </>
  );
}
