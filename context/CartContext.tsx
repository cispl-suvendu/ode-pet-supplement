"use client";

import React, { createContext, useContext, useReducer, ReactNode } from "react";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  skuColor: string;
  ingredients: string[];
  size: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  isSubscription?: boolean;
}

interface CartState {
  items: CartItem[];
  subtotal: number;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: { product: Product; quantity: number; isSubscription?: boolean } }
  | { type: "REMOVE_ITEM"; payload: { id: string } }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" };

interface CartContextType {
  items: CartItem[];
  subtotal: number;
  isCartOpen: boolean;
  addItem: (product: Product, quantity?: number, isSubscription?: boolean) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function calculateSubtotal(items: CartItem[]): number {
  return items.reduce((acc, item) => {
    // 15% discount for subscribe & save
    const price = item.isSubscription ? item.product.price * 0.85 : item.product.price;
    return acc + price * item.quantity;
  }, 0);
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, quantity, isSubscription } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.product.id === product.id && !!item.isSubscription === !!isSubscription
      );

      let newItems = [...state.items];
      if (existingItemIndex > -1) {
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + quantity, 
        };
      } else {
        newItems.push({ product, quantity, isSubscription });
      }

      return {
        items: newItems,
        subtotal: calculateSubtotal(newItems),
      };
    }

    case "REMOVE_ITEM": {
      const newItems = state.items.filter((item) => item.product.id !== action.payload.id);
      return {
        items: newItems,
        subtotal: calculateSubtotal(newItems),
      };
    }

    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        const newItems = state.items.filter((item) => item.product.id !== id);
        return {
          items: newItems,
          subtotal: calculateSubtotal(newItems),
        };
      }

      const newItems = state.items.map((item) =>
        item.product.id === id ? { ...item, quantity } : item
      );

      return {
        items: newItems,
        subtotal: calculateSubtotal(newItems),
      };
    }

    case "CLEAR_CART":
      return {
        items: [],
        subtotal: 0,
      };

    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], subtotal: 0 });
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const addItem = (product: Product, quantity = 1, isSubscription = false) => {
    dispatch({ type: "ADD_ITEM", payload: { product, quantity, isSubscription } });
    setIsCartOpen(true); // Auto-open cart when adding item
  };

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        subtotal: state.subtotal,
        isCartOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
