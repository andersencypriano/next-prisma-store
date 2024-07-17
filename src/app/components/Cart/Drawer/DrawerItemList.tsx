import { ProductType } from "@/types/ProductType";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DeleteItemCart from "../Buttons/DeleteItemCart";
import { useStoreMT } from "@/store/cart";

interface DrawerProps {
  productItem: ProductType;
}

export default function DrawerItemList(product: DrawerProps) {
  const { id, title, price, thumbnail, category, sku, brand, count } =
    product.productItem;
    const { toggleIsOpen } = useStoreMT();
  return (
    <div className="mb-4">
      <Link onClick={toggleIsOpen} href={`/product/${id}`}>
        <div className="flex gap-2">
          <Image
            src={thumbnail}
            alt="image"
            width={80}
            height={80}
            className="w-[80px] h-[80px] bg-slate-100"
          />
          <div className=" relative w-full">
            <p className="text-xs font-bold flex align-top justify-between gap-2">
              {title}
              <DeleteItemCart idProduct={id} size={15} />
            </p>
            <p className="text-[9px]">{sku}</p>
            <p className="text-[9px] font-medium">{brand}</p>
            {/* <p className="text-[9px] font-medium">{count}</p> */}
            <p className="text-right font-extrabold w-full block">{`R$ ${price}`}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
