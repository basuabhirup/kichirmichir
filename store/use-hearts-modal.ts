import { create } from "zustand"

interface HeartsModalState {
  isOpen: boolean
  open: () => void
  close: () => void
}

export const useHeartsModal = create<HeartsModalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}))
