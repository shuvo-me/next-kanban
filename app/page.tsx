import AddTaskBtn from "@/components/addtask-btn";
import TaskCard from "@/components/task-card";
import {
  DotsHorizontalIcon,
  Pencil1Icon,
  PlusIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { DropdownMenu } from "@radix-ui/themes";

export default function Home() {
  return (
    <main className=" text-base overflow-auto size-full">
      <div></div>
      <div className=" flex items-start gap-6 divide-x divide-gray-900 h-full overflow-x-auto">
        <div className=" w-72 max-w-72 min-h-full bg-gray-900/20 p-4 rounded space-y-6">
          <div className="flex items-center justify-between">
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
          <div className="flex flex-col gap-6">
            <TaskCard />
            <AddTaskBtn />
          </div>
        </div>
      </div>
    </main>
  );
}
