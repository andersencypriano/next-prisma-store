import { ProductType } from "@/types/ProductType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProductProps = {
  product: ProductType;
};

export default function ProductItem({ product }: ProductProps) {
  return (
    <>
      <Link href={`/product/${product.id}`}>
        <div key={product.id}>
          <div className="flex justify-center w-full mb-4">
            <Image
              src={product.thumbnail}
              alt="image"
              width={200}
              height={200}
              className="w-[auto] h-[200px]"
            />
          </div>
          <div className="mb-3">
            <h4>{product.title}</h4>
            <span>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product.id)}
            </span>
          </div>
          <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Adicionar ao carrinho
          </button>
        </div>
      </Link>
    </>
  );
}
