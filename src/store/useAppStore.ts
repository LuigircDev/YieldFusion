import { create } from 'zustand';
import { Pool } from '../hooks/usePoolData'; // Assuming Pool type is exported from the hook

interface AppState {
  isModalOpen: boolean;
  selectedPool: Pool | null;
  openModal: (pool: Pool) => void;
  closeModal: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  isModalOpen: false,
  selectedPool: null,
  openModal: (pool) => set({ isModalOpen: true, selectedPool: pool }),
  closeModal: () => set({ isModalOpen: false, selectedPool: null }),
}));
