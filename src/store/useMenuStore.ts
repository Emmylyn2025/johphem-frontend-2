import { create } from 'zustand';

interface MenuState {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

/**
 * UI-only state for the mobile nav panel — never server data (see PRD §7.3).
 */
export const useMenuStore = create<MenuState>((set) => ({
  isOpen: false,
  toggle: () => set((s) => ({ isOpen: !s.isOpen })),
  close: () => set({ isOpen: false }),
}));