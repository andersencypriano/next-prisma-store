export async function getData(query: string) {
  try {
    const response = await fetch(
      `${process.env.STRAPI_API_URL}${query}`
    );
    const data = await response.json();
    const productsArray = data.data;
    return productsArray;
  } catch (error) {
    console.error("Erro:", error);
    return null;
  }
}