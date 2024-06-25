import { ProductType } from "@/types/ProductType";
import Image from "next/image";

async function getSingleProducts(id: string) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/${id}?select=id,title,price,description,thumbnail,category,sku,stock`
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
  const { id, title, price, description, thumbnail, category, sku } = productsList;

  return (
    <>
      <div className='mt-20 flex flex-col items-center xl: max-w-7xl mx-auto'>
        <h1>id: {id}</h1>
        <h1 >{title}</h1>
        <p>sku: {sku}</p>
        <Image
          src={thumbnail}
          alt="image"
          width={200}
          height={200}
          className="w-[auto] h-[200px]"
        />
        <h1>R$ {price}</h1>
        <h1>Descrição: {description}</h1>
        <h1>Categoria: {category}</h1>
        <button className="mt-6 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            COMPRAR
          </button>
      </div>
    </>
  );
}
