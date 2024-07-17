import { useStoreMT } from "@/store/cart";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

interface Props {
  idProduct: number;
  size: number;
}

export default function DeleteItemCart({ idProduct, size }: Props) {
  const { remove } = useStoreMT();
  return (
    <>
      <button onClick={() => remove(idProduct)}>
        <RiDeleteBin6Line size={size}/>
      </button>
    </>
  );
}
