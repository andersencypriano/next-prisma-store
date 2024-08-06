'use client';
import { Data } from "@/interfaces/SingleProduct";
import { useStoreMT } from "@/store/cart";
import React from "react";

interface Props {
  product: Data;
  label: string;
}

export default function AddToCart({ product, label }: Props) {
  const { add: addToCart } = useStoreMT();
  return (
    <>
      <button onClick={()=> addToCart(product)} className="mt-6 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        {label}
      </button>
    </>
  );
}
