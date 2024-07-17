import { Heading, Flex } from "@radix-ui/themes";
import { TokensIcon } from "@radix-ui/react-icons";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-r-gray-900 h-screen">
      <div className=" p-5 text-center">
        <Flex gap={"1"} align={"center"}>
          <Heading size="3" className="flex items-center gap-1">
            NextTrello
          </Heading>
          <TokensIcon height={20} width={20} />
        </Flex>
      </div>
    </aside>
  );
};

export default Sidebar;
