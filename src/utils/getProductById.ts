import { MainProducts } from "@/interfaces/SingleProduct";

export async function getProductById(idProduct: string){
  try {
    const response = await fetch(
      `http://127.0.0.1:1337/api/produtos/${idProduct}?populate=*`
    );
    const data = await response.json();
    const dataCategory: MainProducts = data;
    return dataCategory;
  } catch (error) {
    console.error("Erro:", error);
    return null;
  }
}