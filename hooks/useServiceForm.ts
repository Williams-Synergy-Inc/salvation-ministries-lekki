import { create } from "zustand";
interface ServiceInfoStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

export const useOpenServiceModal = create<ServiceInfoStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));

export const useConfirmAction = create<ServiceInfoStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));
