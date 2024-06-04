import Link from "next/link";
import React from "react";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <>
      <ul className="flex gap-2 justify-between">
        <li>
          <Link href="#">Camisetas</Link>
        </li>
        <li>
          <Link href="#">Blusas</Link>
        </li>
        <li>
          <Link href="#">Calças</Link>
        </li>
        <li>
          <Link href="#">Tênis</Link>
        </li>
      </ul>
    </>
  );
}
