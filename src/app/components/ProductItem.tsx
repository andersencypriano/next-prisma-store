import { Produtos, ProdutosDatum } from "@/interfaces/StrapiData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProductProps = {
  product: ProdutosDatum;
  key: number;
};

export default function ProductItem({ product, key }: ProductProps) {

  const getImage = (url: string) => {
    return `${process.env.STRAPI_URL}${url}`;
  };
  return (
    <>
      <Link href={`/product/${product.id}`}>
        <div key={product.id} className="p-4 rounded-lg hover:shadow-xl">
          <div className="flex justify-center w-full mb-4 bg-slate-100">
            <Image
              src={getImage(product.attributes.Images.data[0].attributes.url)}
              alt="image"
              width={200}
              height={200}
              className="w-[auto] h-[200px]"
            />
          </div>
          <div className="mb-3">
            <h4 className="text-base">{product.attributes.Nome}</h4>
          </div>
          <div className="flex justify-between items-center mt-10">
            <span className="font-bold">R$ {product.attributes.valor}</span>
            <button className="w-[35%] h-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Comprar
            </button>
          </div>
        </div>
      </Link>
    </>
  );
}
