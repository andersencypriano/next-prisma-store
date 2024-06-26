import React from "react";
import { ProductType } from "@/types/ProductType";
import ProductItem from "./ProductItem";

async function getProducts() {
  try {
    const response = await fetch(
      "https://dummyjson.com/products?limit=8&select=id,title,price,description,thumbnail,category"
    );
    const data = await response.json();
    const productsArray = data.products;
    return productsArray;
  } catch (error) {
    console.error("Erro:", error);
    return null;
  }
}

export default async function ProductList() {
  const productsList = await getProducts();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-9 gap-y-10">
        {productsList.map((product: ProductType) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
