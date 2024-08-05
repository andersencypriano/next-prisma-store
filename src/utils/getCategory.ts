export async function getCategory(idCategory: string) {
  try {
    const response = await fetch(
      `${process.env.STRAPI_API_URL}/categorias/${idCategory}?populate=*`
    );
    const data = await response.json();
    const productsArray = data;
    return productsArray;
  } catch (error) {
    console.error("Erro:", error);
    return null;
  }
}