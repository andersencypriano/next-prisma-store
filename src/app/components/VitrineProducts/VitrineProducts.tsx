import { ProdutosDatum } from "@/interfaces/StrapiData";
import React from "react";
import ProductItem from "../ProductItem";

interface IVitrineProps {
  title?: string;
  category: string;
}
async function getProductsByCategory(idCategory: string){
  try {
    const response = await fetch(
      `http://127.0.0.1:1337/api/categorias/${idCategory}?populate[produtos][populate]=*`
    );
    const data = await response.json();
    const productsArray = data.data.attributes.produtos.data;
    return productsArray;
  } catch (error) {
    console.error("Erro:", error);
    return null;
  }
}

export default async function VitrineProducts({title, category}: IVitrineProps) {
  
  const categoryProductList = await getProductsByCategory(category)
  
  return (
    <>
    <div className="my-10">
      <h2 className="text-center mb-4 text-2xl font-bold">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        {categoryProductList.map((product: ProdutosDatum) => (
          <ProductItem key={product.id} product={product}/>
        ))}
      </div>
    </div>
    </>
  );
}
