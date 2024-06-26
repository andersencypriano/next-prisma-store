'use-client'
import Link from "next/link";
import React from "react";
import ProductItem from "./ProductItem";

async function getCategoryList() {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/category-list?limit=5`
    );
    const data = await response.json();
    const productsArray = data;
    return productsArray;
  } catch (error) {
    console.error("Erro:", error);
    return null;
  }
}

export default async function NavBar() {
  const productsList = await getCategoryList();

  return (
    <>
      {/* <ul className="flex gap-2 justify-between">
        {productsList.map((categoryName: string) => (
          <li key={categoryName}>
            <Link href={`/category/${categoryName}`}>{`${categoryName}`}</Link>
          </li>
        ))}
      </ul> */}

      <ul className="flex gap-6 justify-between">
        <li>
          <Link href='/category/beauty'>Beauty</Link>
        </li>
        
        <li>
          <Link href="/category/motorcycle">Motorcycle</Link>
        </li>
        <li>
          <Link href="/category/sunglasses">Sunglasses</Link>
        </li>
        <li>
          <Link href="/category/tablets">Tablets</Link>
        </li>
        <li>
          <Link href="/category/tops">Tops</Link>
        </li>
        
      </ul>
    </>
  );
}
