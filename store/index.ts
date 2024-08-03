import data from '@/lib/data';
import { ListType, TaskType } from '@/lib/types';
import { create } from 'zustand';

interface StoreState{
 isShowSidebar: boolean,
 toggleSidebar: () => void;
 lists?: ListType[],
 addTask: (task: TaskType, listId: string) => void,
 addNewList: (listName: string, listId: string) => void
}

const useStore = create<StoreState>()((set) => ({
  isShowSidebar: true,
  lists: data,
  toggleSidebar: () => set((state)=>({ isShowSidebar: !state.isShowSidebar})),
  addTask: (task, listId) => set((state)=>({lists: state.lists?.map(list=> {
       if(list.id === listId){
         list.tasks = [...list.tasks, task];
       }
       return list;
  })})),
  addNewList: (listName, listId) => set((state)=>{
    console.log({state, listName, listId});
    return state
  })
}))


export default useStore;