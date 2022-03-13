import create from "zustand";

export interface iState {
    items: number
    increaseItems: () => void
    removeAllItems: () => void
  }
  const useStore = create<iState>(set => ({
    items: 0,
    increaseItems: () => set(state => ({ items: state.items + 1 })),
    removeAllItems: () => set({ items: 0 })
  }))
export default useStore