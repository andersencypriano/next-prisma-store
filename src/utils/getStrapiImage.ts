export function getStrapiImage (url: string) {
  const urlImage = `${process.env.STRAPI_URL}${url}`;

  return urlImage;
}