"use client";
import { TaskType } from "@/lib/types";
import { PlusIcon } from "@radix-ui/react-icons";
import {
  Box,
  Button,
  Dialog,
  Flex,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import React, { FC, useState } from "react";

interface AddTaskBtn {
  onAddTask: (task: TaskType) => void;
}

const AddTaskBtn: FC<AddTaskBtn> = ({ onAddTask }) => {
  const [task, setTask] = useState<TaskType>({
    title: "",
    description: "",
    dueDate: "",
    tags: [],
  });

  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <button className=" flex items-center justify-center gap-2 border border-gray-900 text-sm py-2 px-1 rounded hover:text-white/80">
          Add Task
          <PlusIcon />
        </button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>
          <h4>Add Task</h4>
        </Dialog.Title>
        <Dialog.Description>
          <Text>Fill the bellow information to add new Task</Text>
        </Dialog.Description>
        <Flex direction={"column"} gap={"3"} mt={"4"}>
          <Box className="space-y-1">
            <label htmlFor="title" className=" text-sm">
              Title
            </label>
            <TextField.Root
              radius="large"
              placeholder="Task title…"
              id="title"
              onInput={(e) => {
                setTask((tsk) => ({
                  ...tsk,
                  title: (e.target as HTMLInputElement).value || "",
                }));
              }}
            />
          </Box>
          <Box className="space-y-1">
            <label htmlFor="title" className=" text-sm">
              Description
            </label>
            <TextArea
              placeholder=" Task description..."
              onInput={(e) =>
                setTask((tsk) => ({
                  ...tsk,
                  description: (e.target as HTMLTextAreaElement).value,
                }))
              }
            />
          </Box>
          <Button
            className="!cursor-pointer"
            onClick={() => {
              setOpen(false);
              onAddTask(task);
            }}
          >
            <Flex align={"center"} gap={"2"}>
              Add
              <PlusIcon />
            </Flex>
          </Button>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default AddTaskBtn;
