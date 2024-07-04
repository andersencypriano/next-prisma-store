import AddToCart from "@/app/components/Cart/Buttons/AddToCart";
import { ProductType } from "@/types/ProductType";
import Image from "next/image";

async function getSingleProducts(id: string) {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/${id}?select=id,title,price,description,thumbnail,category,sku,stock,brand`
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
  const product: ProductType = await getSingleProducts(params.id);
  const { id, title, price, description, thumbnail, category, sku, brand } =
    product;

  return (
    <>
      <div className="mt-24 flex gap-9 justify-between max-w-4xl mx-auto">
        <div className="bg-slate-100 w-[50%] flex items-center justify-center">
          <Image
            src={thumbnail}
            alt="image"
            width={350}
            height={350}
            className="w-[auto] h-[350px]"
          />
        </div>
        <div className="xl: max-w-[40%]">
          <h1 className="text-xs">{brand}</h1>
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-sm mb-8 text-stone-500">sku: <span className="text-xs text-stone-500">{sku}</span></p>
          <h1 className="mb-6">{description}</h1>
          <h1 className="text-xl font-bold">R$ {price}</h1>
          <AddToCart product={product} label="Adicionar ao carrinho"/>
        </div>
      </div>
    </>
  );
}
