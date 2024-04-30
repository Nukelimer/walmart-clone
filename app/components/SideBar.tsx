import { Grid2X2, Heart, LayoutGrid, ShoppingBag } from "lucide-react";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { GiProfit } from "react-icons/gi";
import { RxAvatar } from "react-icons/rx";
import { BsCart } from "react-icons/bs";

function SideBar({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`z-50 fixed top-[130px] right-0  bg-neutral-800/40  h-[100vh] w-[100vw] `}>
      <div
        className={`flex flex-col pt-24  bg-walmart w-[50vw] h-[100vh] ${
          isOpen ? "slide-in-fwd-bl" : ""
        } absolute right-0 `}>
        <Link
          href="/"
          className="mt-8 flex px-6 w-full text-white font-bold items-center justify-around">
          <ShoppingBag size={20} className="" />
          <div className="text-xs font-extralight ">
            <p>My order</p>
            <h2 className="font-bold mt-4">My Items</h2>
          </div>
        </Link>
        <Link
          href="/"
          className="mt-8 flex px-6 w-full text-white font-bold items-center justify-around">
          <RxAvatar size={20} className="" />
          <div className="text-xs font-extralight ">
            <p>Sign In</p>
            <h2 className="font-bold mt-4">Account</h2>
          </div>
        </Link>

        <Link
          href="/"
          className="mt-8 flex px-6 w-full text-white font-bold items-center justify-around">
          <BsCart size={20} className="" />
          <div className="text-xs font-extralight ">
            <p>No Item</p>
                      <h2 className="font-bold mt-4">Total: ${0 }</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
