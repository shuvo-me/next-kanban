"use client";
import React from "react";
import TaskCard from "@/components/task-card";
import useStore from "@/store";
import {
  DotsHorizontalIcon,
  Pencil1Icon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { DropdownMenu, ScrollArea } from "@radix-ui/themes";
import AddTaskBtn from "@/components/addtask-btn";
import { TaskType } from "@/lib/types";

const List = () => {
  const { lists, addTask } = useStore();
  const handleAddTask = (task: TaskType, listId: string) => {
    addTask(task, listId);
  };
  return lists?.map((list) => (
    <div className=" w-72 max-w-72 h-full bg-gray-900/20 rounded" key={list.id}>
      <ScrollArea type="auto" scrollbars="vertical">
        <div className="flex items-center justify-between  p-4 ">
          <h4>Todo</h4>
          <div className=" flex items-center gap-1">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <button className=" size-7 rounded hover:bg-gray-900 inline-flex items-center justify-center">
                  <DotsHorizontalIcon />
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item>
                  Edit List
                  <Pencil1Icon className=" ml-auto" />
                </DropdownMenu.Item>
                <DropdownMenu.Item color="red">
                  Delete List
                  <TrashIcon />
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-6  overflow-y-auto  px-4 ">
          {list.tasks.map((task) => (
            <TaskCard task={task} key={task.title} listId={list.id} />
          ))}
          <AddTaskBtn
            onAddTask={(task: TaskType) => handleAddTask(task, list.id)}
          />
        </div>
      </ScrollArea>
    </div>
  ));
};

export default List;
