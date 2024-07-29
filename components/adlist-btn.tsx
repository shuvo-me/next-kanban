"use client";
import { PlusIcon } from "@radix-ui/react-icons";
import { Button, Dialog, Text, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import useStore from "@/store";

const AddListBtn = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [listName, setListName] = useState<string>("");
  const { addNewList } = useStore();

  const handleAddNewList = () => {
    const listId = listName.toLowerCase().split(" ").join("-");
    addNewList(listName, listId);
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <div className=" w-72 max-w-72">
          <button className=" flex items-center justify-center gap-2 border border-gray-900 text-sm py-2 px-1 rounded hover:text-white/80 w-full">
            Add New List
            <PlusIcon />
          </button>
        </div>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>
          <h4>Add New List</h4>
        </Dialog.Title>
        <div className=" space-y-1">
          <Text size={"3"}>List Name</Text>
          <TextField.Root
            placeholder="Enter list name...."
            onInput={(e) => setListName((e.target as HTMLInputElement).value)}
          />
        </div>
        <div className="flex items-center gap-2 mt-4 justify-between">
          <Button className=" !cursor-pointer" onClick={handleAddNewList}>
            Add
          </Button>
          <Dialog.Close>
            <Button variant="ghost" className="!cursor-pointer">
              Close
            </Button>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default AddListBtn;
