import React from "react";
import { ProductType } from "@/types/ProductType";
import ProductItem from "../ProductItem";

type VitrineProps = {
  title: string;
  categoryName: string;
  limit: number
}

async function getCategoryProducts(categoryName: string, limit: number) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${categoryName}?limit=${limit}&select=id,title,price,description,thumbnail,category`
    );
    const data = await response.json();
    const productsArray = data.products;
    return productsArray;
  } catch (error) {
    console.error("Erro:", error);
    return null;
  }
}

export default async function VitrineProducts({title, categoryName, limit}: VitrineProps) {
  const productsList = await getCategoryProducts(categoryName, limit);

  return (
    <>
    <div className="my-10">
      <h2 className="text-center mb-4 text-2xl font-bold">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        {productsList.map((product: ProductType) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
    </>
  );
}
