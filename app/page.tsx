import AddListBtn from "@/components/adlist-btn";
import List from "@/components/list";

export default function Home() {
  return (
    <main className=" text-base  size-full">
      <div></div>
      <div className=" flex items-start gap-6 h-full overflow-x-auto">
        <List />
        <AddListBtn />
      </div>
    </main>
  );
}
