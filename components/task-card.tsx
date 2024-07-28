"use client";
import { TaskType } from "@/lib/types";
import { ClockIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Avatar, DropdownMenu } from "@radix-ui/themes";
import Image from "next/image";
import React, { FC } from "react";

interface TaskCardPropType {
  task: TaskType;
  listId: string;
}

const TaskCard: FC<TaskCardPropType> = ({ listId, task }) => {
  return (
    <div
      className=" border border-gray-900 hover:border-gray-800 rounded p-4 text-sm space-y-2"
      role="button"
    >
      {/* card header */}
      <div>
        <h4 className=" flex items-center justify-between gap-2">
          <strong className=" max-w-full line-clamp-1"> {task.title}</strong>
          <span className="shrink-0">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <button className="size-7 rounded inline-flex items-center justify-center hover:bg-gray-900">
                  <DotsHorizontalIcon />
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item>Edit</DropdownMenu.Item>
                <DropdownMenu.Item>Delete</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </span>
        </h4>
      </div>
      {/* card image */}
      <div className=" space-y-1">
        <div className=" relative w-full h-32">
          <Image
            src={"/images/task.webp"}
            alt="task img"
            fill
            className=" w-full rounded"
          />
        </div>
        <div className=" line-clamp-1">{task.description}</div>
      </div>
      {/* card bottom */}
      <div className="space-y-2">
        <div className=" flex flex-wrap gap-1">
          {task.tags.map((tag) => (
            <small
              className=" py-1 px-2 lowercase text-xs bg-gray-900 rounded"
              key={tag}
            >
              {tag}
            </small>
          ))}
        </div>
        <div className=" flex items-center justify-between">
          <div>
            <Avatar fallback="U" size={"1"} radius="full" variant="solid" />
            <Avatar
              fallback="S"
              size={"1"}
              radius="full"
              variant="solid"
              className=" -ml-2"
              color="brown"
            />
            <Avatar
              fallback="E"
              size={"1"}
              radius="full"
              variant="solid"
              className=" -ml-2"
              color="crimson"
            />
            <Avatar
              fallback="R"
              size={"1"}
              radius="full"
              variant="solid"
              className=" -ml-2"
              color="yellow"
            />
            <Avatar
              fallback="S"
              size={"1"}
              radius="full"
              variant="solid"
              className=" -ml-2"
              color="grass"
            />
          </div>
          <div className=" flex items-center gap-1 text-sm">
            <ClockIcon />
            12 days left
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
