"use client";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <>
      <nav className=" z-40 h-16 md:h-24 flex items-center px-4 md:px-32 justify-end md:justify-between fixed bg-black w-full">
        <Link href={`/`} className="hidden md:flex">
          <Image
            src={`/logo.png`}
            width={35}
            height={65}
            alt="The Hominians Co.,Ltd."
          />
        </Link>
        <ul className="gap-10 text-xl hidden lg:flex">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="lg:hidden" onClick={() => setToggleMenu(true)}>
          <Menu size={30} />
        </div>
      </nav>
      <div
        className={cn(
          `fixed right-0 top-0 z-[200] h-screen w-[200px] bg-zinc-800 duration-500 ease-in-out`,
          {
            "right-[0%]": toggleMenu,
            "right-[-100%]": !toggleMenu,
          }
        )}>
        <div className="px-6">
          <div className="flex py-6">
            <button onClick={() => setToggleMenu(false)}>
              <ArrowRight />
            </button>
          </div>
          <ul className="gap-8 text-gray-200 flex-col flex mt-10">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key}>
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      {toggleMenu && (
        <div
          onClick={() => setToggleMenu(false)}
          className={cn(
            `fixed top-0 h-screen w-full bg-black/30 duration-500 ease-in-out`,
            {
              "z-[150]": toggleMenu,
              "-z-40 hidden": !toggleMenu,
            }
          )}
        />
      )}
    </>
  );
}
