import { useStoreMT } from "@/store/cart";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

interface Props {
  idProduct: number;
}

export default function DeleteItemCart({ idProduct }: Props) {
  const { remove } = useStoreMT();
  return (
    <>
      <button onClick={() => remove(idProduct)}>
        <RiDeleteBin6Line />
      </button>
    </>
  );
}
