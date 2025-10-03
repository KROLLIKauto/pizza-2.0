import { create } from 'zustand';
import { IProduct } from '@/components/ProductSelector/types/product';

export interface CartItem {
  product: IProduct;
  size: number; 
  quantity: number;
  uniqueId: string;
}

interface CartState {
  items: CartItem[];
  isModalOpen: boolean;
  addItem: (product: IProduct, size: number) => void;
  removeItem: (uniqueId: string) => void;
  updateQuantity: (uniqueId: string, quantity: number) => void;
  clearCart: () => void;
  openModal: () => void;
  closeModal: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isModalOpen: false,

  addItem: (product, size) => {
    const uniqueId = `${product.id}-${size}`;
    const existingItem = get().items.find((item) => item.uniqueId === uniqueId);

    if (existingItem) {
      set({
        items: get().items.map((item) =>
          item.uniqueId === uniqueId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      set({
        items: [
          ...get().items,
          {
            product,
            size,
            quantity: 1,
            uniqueId,
          },
        ],
      });
    }
  },

  removeItem: (uniqueId) => {
    set({
      items: get().items.filter((item) => item.uniqueId !== uniqueId),
    });
  },

  updateQuantity: (uniqueId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(uniqueId);
      return;
    }
    set({
      items: get().items.map((item) =>
        item.uniqueId === uniqueId ? { ...item, quantity } : item
      ),
    });
  },

  clearCart: () => {
    set({ items: [] });
  },

  openModal: () => {
    set({ isModalOpen: true });
  },

  closeModal: () => {
    set({ isModalOpen: false });
  },

  getTotalPrice: () => {
    return get().items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  },

  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },
}));


