import React from "react";
import { ProductType } from "@/types/ProductType";
import ProductItem from "@/app/components/ProductItem";
import { getCategoryById } from "@/utils/getCategory";



export default async function ProductList({
  params,
}: {
  params: { slug: string };
}) {
  const dataCategory = await getCategoryById(params.slug);

  return (
    <>
      <div className="max-w-7xl mx-auto mt-24">
        <h1 className="text mb-4 text-2xl font-bold">
          {dataCategory?.data.attributes.Nome}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-9 gap-y-10">
          {dataCategory?.data.attributes.produtos?.data.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
