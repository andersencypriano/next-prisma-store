import { ProdutosDatum } from "@/interfaces/StrapiData";
import React from "react";
import ProductItem from "../ProductItem";
import { getCategoryById } from "@/utils/getCategory";

interface IVitrineProps {
  title?: string;
  category: string;
}

export default async function VitrineProducts({
  title,
  category,
}: IVitrineProps) {
  const dataCategory = await getCategoryById(category);

  return (
    <>
      <div className="my-10">
        <h2 className="text-center mb-4 text-2xl font-bold">
          {dataCategory?.data.attributes.Nome}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
          {dataCategory?.data.attributes.produtos?.data.map(
            (product: ProdutosDatum) => (
              <ProductItem key={product.id} product={product} />
            )
          )}
        </div>
      </div>
    </>
  );
}
