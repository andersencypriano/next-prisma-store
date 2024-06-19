import React from 'react'
import {ProductType} from '@/types/ProductType'
import ProductItem from './ProductItem';

type Props = {
  
}

async function getProducts () {
  const res = await fetch('https://fakestoreapi.com/products');

  if(!res.ok ) {
    throw new Error('Erro na requisição')
  };
    
  return res.json();
}


export default async function ProductList({}: Props) {
  
  const productsList = await getProducts();

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6'>
        {
          productsList.map((product: ProductType) => (
            <ProductItem key={product.id} product={product}/>
          ))
        }
      </div>
    </>
  )
}