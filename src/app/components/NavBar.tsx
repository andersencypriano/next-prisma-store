'use-client'
import Link from "next/link";
import React from "react";
import { MainCategoryList, MainDatum } from "@/types/CategoryList";

async function getCategoryList(){
  try {
    const response = await fetch(
      `http://127.0.0.1:1337/api/categorias?populate=*`
    );
    const data = await response.json();
    const categories: MainCategoryList = data;
    return categories;
  } catch (error) {
    console.error("Erro:", error);
    return null;
  }
}

export default async function NavBar() {
  const categoriesList = await getCategoryList();
  return (
    <>
      <ul className="flex gap-6 justify-between">
        {categoriesList?.data.map((category: MainDatum) => (
          <li key={category.id}>
            <Link href={`/category/${category.id}`}>{`${category.attributes.Nome}`}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
