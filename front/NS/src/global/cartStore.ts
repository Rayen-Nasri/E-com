import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
  subcategory?: string;
  image?: string;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemsCount: () => number;
  toggleCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      
      addItem: (item: CartItem) => {
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);
          
          if (existingItem) {
            return {
              ...state,
              items: state.items.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
              isOpen: true,
            };
          }
          
          return {
            ...state,
            items: [...state.items, { ...item, quantity: 1 }],
            isOpen: true,
          };
        });
      },
      
      removeItem: (itemId: string) => {
        set((state) => ({
          ...state,
          items: state.items.filter((i) => i.id !== itemId)
        }));
      },
      
      updateQuantity: (itemId: string, quantity: number) => {
        set((state) => ({
          ...state,
          items: state.items.map((i) =>
            i.id === itemId ? { ...i, quantity } : i
          ).filter((i) => i.quantity > 0)
        }));
      },
      
      clearCart: () => set((state) => ({ ...state, items: [] })),
      
      getTotal: () => {
        const { items } = get();
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
      
      getItemsCount: () => {
        const { items } = get();
        return items.reduce((count, item) => count + item.quantity, 0);
      },
    }),
    {
      name: 'shopping-cart',
      storage: createJSONStorage(() => localStorage),
      version: 1,
      partialize: (state) => ({ items: state.items }),
    }
  )
);