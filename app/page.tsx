import List from "@/components/list";

export default function Home() {
  return (
    <main className=" text-base  size-full">
      <div></div>
      <div className=" flex items-start gap-6 divide-x divide-gray-900 h-full overflow-x-auto overflow-y-hidden">
        <List />
      </div>
    </main>
  );
}
