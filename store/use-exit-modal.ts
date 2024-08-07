import { create } from "zustand"

interface ExitModalState {
  isOpen: boolean
  open: () => void
  close: () => void
}

export const useExitModal = create<ExitModalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}))
