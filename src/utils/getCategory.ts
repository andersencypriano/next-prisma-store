import { ProdutosDatum } from "@/interfaces/StrapiData";

export async function getProductsByCategory(idCategory: string){
  try {
    const response = await fetch(
      `http://127.0.0.1:1337/api/categorias/${idCategory}?populate[produtos][populate]=*`
    );
    const data = await response.json();
    const productsArray: ProdutosDatum = data.data.attributes.produtos.data;
    return productsArray;
  } catch (error) {
    console.error("Erro:", error);
    return null;
  }
}
