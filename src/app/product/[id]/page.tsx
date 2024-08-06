import AddToCart from "@/app/components/Cart/Buttons/AddToCart";
import { getProductById } from "@/utils/getProductById";
import Image from "next/image";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {

  const singleProduct = await getProductById(params.id);
  const getImage = (url: string) => {
    return `${process.env.STRAPI_URL}${url}`;
  };
  return (
    <>
      <div className="mt-24 flex gap-9 justify-between max-w-4xl mx-auto">
        <div className="bg-slate-100 w-[50%] flex items-center justify-center">
          <Image
            src={getImage(`${singleProduct?.data.attributes.Images.data[0].attributes.url}`)}
            alt="image"
            width={350}
            height={350}
            className="w-[auto] h-[350px]"
          />
        </div>
        <div className="xl: max-w-[40%]">
          {/* <h1 className="text-xs">{brand}</h1> */}
          <h1 className="text-4xl font-bold">{singleProduct?.data.attributes.Nome}</h1>
          {/* <p className="text-sm mb-8 text-stone-500">sku: <span className="text-xs text-stone-500">{sku}</span></p> */}
          <h1 className="mb-6">{singleProduct?.data.attributes.descricao[0].children[0].text}</h1>
          <h1 className="text-xl font-bold">R$ {singleProduct?.data.attributes.valor}</h1>
          {/* <AddToCart product={product} label="Adicionar ao carrinho"/> */}
        </div>
      </div>
    </>
  );
}
