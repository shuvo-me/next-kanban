import { create } from 'zustand';

interface StoreState{
 isShowSidebar: boolean,
 toggleSidebar: () => void;
}

const useStore = create<StoreState>()((set) => ({
  isShowSidebar: true,
  toggleSidebar: () => set((state)=>({ isShowSidebar: !state.isShowSidebar}))
}))

export default useStore;