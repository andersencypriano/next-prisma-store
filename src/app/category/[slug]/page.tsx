import React from "react";
import { ProductType } from "@/types/ProductType";
import ProductItem from "@/app/components/ProductItem";

async function getProducts(slug: string) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${slug}?select=id,title,price,description,thumbnail,category,sku,stock`
    );
    const data = await response.json();
    const productsArray = data.products;
    return productsArray;
  } catch (error) {
    console.error("Erro:", error);
    return null;
  }
}

export default async function ProductList({ params }: { params: { slug: string } }) {
  const productsList = await getProducts(params.slug);

  return (
    <>
    <h1 className="text-center mt-24 mb-4 text-2xl font-bold">{params.slug}</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
          {productsList.map((product: ProductType) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
    </>
  );
}
