import React from "react";


export default async function VitrineProducts() {


  return (
    <>
    <div className="my-10">
      <h2 className="text-center mb-4 text-2xl font-bold"></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
        {/* {productsList.map((product: ProductType) => (
          <ProductItem key={product.id} product={product} />
        ))} */}
      </div>
    </div>
    </>
  );
}
