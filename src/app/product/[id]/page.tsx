import { ProductType } from "@/types/ProductType";
import Image from "next/image";

async function getSingleProducts(id: string) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/${id}?select=id,title,price,description,thumbnail,category`
    );
    const data = await response.json();
    const dataproduct = data;
    return dataproduct;
  } catch (error) {
    console.error("Erro:", error);
    return null;
  }
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const productsList: ProductType = await getSingleProducts(params.id);
  const { id, title, price, description, thumbnail, category } = productsList;

  return (
    <>
      <h1>{id}</h1>
      <h1>{title}</h1>
      <h1>{price}</h1>
      <h1>{description}</h1>
      <h1>{thumbnail}</h1>
      <Image
        src={thumbnail}
        alt="image"
        width={200}
        height={200}
        className="w-[auto] h-[200px]"
      />
    </>
  );
}
