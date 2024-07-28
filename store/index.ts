import { ListType, TaskType } from '@/lib/types';
import { create } from 'zustand';

interface StoreState{
 isShowSidebar: boolean,
 toggleSidebar: () => void;
 lists?: ListType[],
 addTask: (task: TaskType, listId: string) => void
}

const useStore = create<StoreState>()((set) => ({
  isShowSidebar: true,
  lists: [
    {
      title: 'To Do',
      id: 'todo',
      tasks: [
        {
          title: 'Make the work done',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, dolor?',
          tags: ['web','design'],
          dueDate: '12-25-12'
        }
      ]
    }
  ],
  toggleSidebar: () => set((state)=>({ isShowSidebar: !state.isShowSidebar})),
  addTask: (task, listId) => set((state)=>({lists: state.lists?.map(list=> {
       if(list.id === listId){
         list.tasks = [...list.tasks, task];
       }
       return list;
  })}))
}))


export default useStore;