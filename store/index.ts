import { ListType } from '@/lib/types';
import { create } from 'zustand';

interface StoreState{
 isShowSidebar: boolean,
 toggleSidebar: () => void;
 lists?: ListType[]
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
  toggleSidebar: () => set((state)=>({ isShowSidebar: !state.isShowSidebar}))
}))


export default useStore;