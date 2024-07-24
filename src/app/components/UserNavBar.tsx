import React from "react";
import MiniCart from "./Cart/MiniCart";
import { FaRegCircleUser } from "react-icons/fa6";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { PiUserCircleLight } from "react-icons/pi";

type Props = {};

export default function UserNavBar({}: Props) {
  return (
    <>
      <div className="flex items-center gap-3">
        <MiniCart />
        <SignedOut>
          <SignInButton mode="modal">
            <PiUserCircleLight size={29} title="Fazer login"/>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </>
  );
}
