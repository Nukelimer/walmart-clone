"use client";

import { Grid2X2, Heart, LayoutGrid, Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SideBar from "./SideBar";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { RxAvatar } from "react-icons/rx";
import { BsCart } from "react-icons/bs";

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const router = useRouter();

  const submitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchValue = event.currentTarget.searchInput.value;
    router.push(`/search?q=${searchValue}`);
    
  };
  return (
    <header className=" md:flex-row md:justify-center flex flex-col justify-center bg-walmart py-4 px-4 md:space-x-5 item-center">
      <Link
        href={"/"}
        className=" mb-7 md:mb-0 my-auto">
        <Image
          className="pb-1"
          src="https://i.imgur.com/5V4wehM.png"
          alt="logo"
          width={100}
          height={100}
          style={{ width: "auto", height: "auto" }}
          priority
        />
      </Link>
      <div
        className="absolute right-3 top-2 p-2 px-0 md:hidden"
        onClick={() => {
          setIsOpen(!isOpen);
        }}>
        {isOpen ? (
          <AiOutlineMenuUnfold size={32} color="white" />
        ) : (
          <AiOutlineMenuFold color="white" size={32} />
        )}
      </div>
      <form
        onSubmit={submitFormHandler}
        className=" bg-white items-center self-end mt-0  flex rounded-full w-full flex-1">
        <input
          type="text"
          name="searchInput"
          className=" w-[200px] placeholder:text-sm placeholder:text-walmart focus:text-walmart px-4  m-0 rounded-l-full outline-none flex-1"
          placeholder="Search Product ..."
        />

        <button type="submit">
          <Search
            size={10}
            className="h-10 w-10 px-2 bg-yellow-300 rounded-full"
          />
        </button>
      </form>

      {isOpen && <SideBar isOpen={isOpen} />}

      <div className={` hidden md:flex bg-walmart `}>
        <Link
          href="/"
          className=" flex px-6 w-full text-white font-bold items-center justify-around">
          <ShoppingBag size={20} className=" mr-1" />
          <div className="text-xs font-extralight text-nowrap ">
            <p>My order</p>
            <h2 className="font-bold ">My Items</h2>
          </div>
        </Link>
        <Link
          href="/"
          className=" flex px-6 w-full text-white font-bold items-center justify-around">
          <RxAvatar size={20} className=" mr-1" />
          <div className="text-xs font-extralight text-nowrap ">
            <p>Sign In</p>
            <h2 className="font-bold ">Account</h2>
          </div>
        </Link>

        <Link
          href="/"
          className=" flex px-6 w-full text-white font-bold items-center justify-around">
          <BsCart size={20} className=" mr-1" />
          <div className="text-xs font-extralight text-nowrap ">
            <p>No Item</p>
            <h2 className="font-bold ">Total: ${0}</h2>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
