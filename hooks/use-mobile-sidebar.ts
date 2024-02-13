import { create } from 'zustand';

type MobileSidebarState = {
  isOpen: boolean;
  onOpen: VoidFunction;
  onClose: VoidFunction;
};

export const useMobileSidebar = create<MobileSidebarState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
