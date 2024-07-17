"use client";
import { useStoreMT } from "@/store/cart";
import IconBag from "../../../../../public/images/shopping_bag.svg";
import Image from "next/image";
import React from "react";
import DrawerList from "./DrawerList";
import DrawerItemList from "./DrawerItemList";
import { MdClose } from "react-icons/md";
import Link from "next/link";

export default function Drawer() {
  const { isOpen, toggleIsOpen, cart } = useStoreMT();

  return (
    <>
      <div className="relative ">
        <div
          className={`fixed top-0 right-0 bg-white h-[100vh] z-[52] transition-all w-64 md:w-80 ${
            isOpen ? "right-0" : "right-[-100%]"
          }`}
        >
          <div className="p-2 bg-slate-900 flex gap-3 items-center justify-between">
            <Image src={IconBag} width={29} height={29} alt="Meu Carrinho" />
            <h2 className="text-slate-50">Meu Carrinho</h2>
            <MdClose
              color="#FFF"
              size="25"
              className="cursor-pointer"
              onClick={toggleIsOpen}
            />
          </div>
          <div className="p-3 max-h-[70%] overflow-y-auto">
            {cart.map((product) => (
              <DrawerItemList key={product.id} productItem={product} />
            ))}
          </div>
          <div className="p-3 w-full">
            <Link href="/carrinho" className="flex justify-center items-center mt-6 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Finalizar compra
            </Link>
            <button className="flex justify-center items-center mt-2 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Limpar itens</button>
          </div>
        </div>
        <div
          onClick={toggleIsOpen}
          className={`fixed cursor-pointer top-0 bg-black bg-opacity-65 w-full h-[100vh] z-[51] ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        ></div>
      </div>
    </>
  );
}
