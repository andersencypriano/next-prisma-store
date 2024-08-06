import React from "react";
import { MainDatum, ProductType } from "@/types/ProductType";
import ProductItem from "./ProductItem";

async function getProducts() {
  try {
    const response = await fetch(
      "http://127.0.0.1:1337/api/produtos?populate=*"
    );
    const data = await response.json();
    const productsArray = data.data;
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
        {productsList.map((product: MainDatum) => (
          <div key={product.id}>
          <ProductItem  product={product} />
          </div>
        ))}
      </div>
    </>
  );
}
