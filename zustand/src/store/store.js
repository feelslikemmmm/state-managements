import { create } from 'zustand';

const useMemoStore = create((set) => ({
  memo: '',
  setMemo: (text) => set({ memo: text }),
}));

export default useMemoStore;
