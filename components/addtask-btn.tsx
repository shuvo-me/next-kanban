import { PlusIcon } from "@radix-ui/react-icons";
import React from "react";

const AddTaskBtn = () => {
  return (
    <button className=" flex items-center justify-center gap-2 border border-gray-900 text-sm py-2 px-1 rounded hover:text-white/80">
      Add Task
      <PlusIcon />
    </button>
  );
};

export default AddTaskBtn;
