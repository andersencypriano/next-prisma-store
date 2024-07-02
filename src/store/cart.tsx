import { create } from 'zustand'

export const useStoreMT = create((set) => ({
  totalItems: 0,
  addItems: () => set((state) => ({ totalItems: state.totalItems + 1 })),
  removeAllBears: () => set({ totalItems: 0 }),
}))