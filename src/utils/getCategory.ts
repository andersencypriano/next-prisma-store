import { Main } from "@/interfaces/StrapiData";

export async function getCategoryById(idCategory: string){
  try {
    const response = await fetch(
      `http://127.0.0.1:1337/api/categorias/${idCategory}?populate[produtos][populate]=*`
    );
    const data = await response.json();
    const dataCategory: Main = data;
    return dataCategory;
  } catch (error) {
    console.error("Erro:", error);
    return null;
  }
}

