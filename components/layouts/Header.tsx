"use client";

import React, { useState } from "react";
import logo from "../../public/images/logo.png";
import menu from "../../public/images/menu.png";
import closeImage from "../../public/images/ei-close.png";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="w-full flex fixed top-0 shadow-md z-10">
        <div className="flex sm:flex-1 justify-between w-full bg-gray-50">
          <div className="md:mx-10">
            <Link href={"/"}>
              <Image
                src={logo}
                alt={"logo"}
                className="object-contain h-20 w-20 m-5"
              />
            </Link>
          </div>
          <div className=" font-bold my-8 ml-10 ">
            <div className="lg:flex hidden flex-initial text-left mr-20">
              <ul className="lg:flex hidden flex-initial text-left">
                <li className="p-4 ml-10">
                  <a href={"/"}>ホーム</a>
                </li>
                <li className="p-4 ml-10">
                  <a href={"/cafes"}>カフェ一覧</a>
                </li>
                <li className="p-4 ml-10">
                  <a href={"/add"}>カフェを登録</a>
                </li>
              </ul>
              <div className="ml-10">
                <button className="p-3 bg-zinc-900 shadow-md rounded-md text-white">
                  ログイン
                </button>
              </div>
              <div className="ml-10">
                <button className="py-3 px-5 bg-zinc-600 shadow-md rounded-md text-white">
                  登録
                </button>
              </div>
            </div>
          </div>
          {!open ? (
            <div className="lg:hidden lg:mx-10 ">
              <Image
                src={menu}
                alt={"menu"}
                className="object-contain h-10 w-10 m-9"
                onClick={() => {
                  toggleMenu();
                }}
              />
            </div>
          ) : (
            <div className="lg:hidden lg:mx-10 ">
              <Image
                src={closeImage}
                alt={"closeImage"}
                className="object-contain h-10 w-10 m-9"
                onClick={() => {
                  toggleMenu();
                }}
              />
            </div>
          )}
        </div>
        {open && (
          <div className="bg-gray-50 lg:hidden w-full h-100 absolute top-[120px] shadow-md z-10">
            <ul className="text-center">
              <li className="p-4 border-y border-gray-300">
                <a href={"/"}>ホーム</a>
              </li>
              <li className="p-4 border-b border-gray-300">
                <a href={"/cafes"}>カフェ一覧</a>
              </li>
              <li className="p-4 border-b border-gray-300">
                <a href={"/add"}>カフェを登録</a>
              </li>
            </ul>
            <div className="p-4 text-center border-b border-gray-300">
              <button>ログイン</button>
            </div>
            <div className="p-4 text-center border-b border-gray-300">
              <button>登録</button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
