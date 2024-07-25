"use client";
import { Heading, Flex } from "@radix-ui/themes";
import { TokensIcon } from "@radix-ui/react-icons";
import React from "react";
import Link from "next/link";
import cn from "@/lib/cn";
import useStore from "@/store";

const Sidebar = () => {
  const { isShowSidebar } = useStore();
  return (
    <aside
      className={cn(
        "border-r border-r-gray-900 h-screen transition duration-200 ease-linear",
        isShowSidebar
          ? "w-64 translate-x-0"
          : "w-0 -translate-x-52 overflow-hidden"
      )}
    >
      <div className=" p-5 text-center">
        <Flex gap={"1"} align={"center"} justify={"center"}>
          <Heading size="3" className="flex items-center gap-1">
            <Link href={"/"}>NextTrello</Link>
          </Heading>
          <TokensIcon height={20} width={20} />
        </Flex>
      </div>
      <div className=" mt-10 *:text-left">
        <ul className=" space-y-1">
          <li>
            <Link href={"/project-1"} className="p-4 hover:bg-slate-900 block">
              Project1
            </Link>
          </li>
          <li>
            <Link href={"/project-2"} className="p-4 hover:bg-slate-900 block">
              Project2
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
