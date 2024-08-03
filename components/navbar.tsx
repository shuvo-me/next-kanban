"use client";
import useStore from "@/store";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Button, Flex } from "@radix-ui/themes";
import React from "react";
import AddProjectButton from "./addproject-button";

const Navbar = () => {
  const store = useStore();

  return (
    <nav className="p-4 border-b border-b-gray-900 w-full shrink-0 ">
      <Flex align={"center"} justify={"between"} gap={"6"}>
        <button
          type="button"
          className=" size-8 rounded inline-flex items-center justify-center hover:bg-gray-900"
          onClick={store.toggleSidebar}
          title={store.isShowSidebar ? "close sidebar" : "open sidebar"}
        >
          {store.isShowSidebar ? <ArrowLeftIcon /> : <ArrowRightIcon />}
        </button>
        <div>
          <AddProjectButton />
        </div>
      </Flex>
    </nav>
  );
};

export default Navbar;
