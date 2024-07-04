'use client'
import Image from 'next/image'
import React from 'react'
import IconBag from '../../../../public/images/shopping_bag.svg'
import { useStoreMT } from '@/store/cart'

export default function MiniCart() {
  const {count} = useStoreMT();
  
  return (
    <>
      <div className='relative'>
        <span className="absolute rounded-full right-[-5px] top-[-3px] w-4 h-4 bg-slate-400 text-slate-950 flex items-center justify-center text-xs font-medium">{count()}</span>
        <Image src={IconBag} width={29} height={29} alt="Meu Carrinho"/>
      </div>
    </>
  )
}
