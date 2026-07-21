import { create } from 'zustand';

interface ProjectFilterState {
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
}

export const useProjectFilterStore = create<ProjectFilterState>((set) => ({
  activeCategory: null,
  setActiveCategory: (category) => set({ activeCategory: category }),
}));