"use client";
import useStore from "@/store";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import React from "react";

const Navbar = () => {
  const store = useStore();

  return (
    <nav className="p-4 border-b border-b-gray-900 w-full shrink-0">
      <button
        type="button"
        className=" size-8 rounded inline-flex items-center justify-center hover:bg-gray-900"
        onClick={store.toggleSidebar}
        title={store.isShowSidebar ? "close sidebar" : "open sidebar"}
      >
        {store.isShowSidebar ? <ArrowLeftIcon /> : <ArrowRightIcon />}
      </button>
    </nav>
  );
};

export default Navbar;
