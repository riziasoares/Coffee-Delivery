import { ReactNode, createContext, useState } from "react";
import { Coffee } from "../pages/Home/components/ProductCatalog";

export interface ProductCart {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

interface ItemsContextType {
  items: ProductCart[];
  selectedItem: ProductCart | undefined;
  createAddItemToCart: (selectedProduct: Coffee, quantity: number) => void;
  removeItemsFromCart: (id: number) => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
  totalQuantity: number;
  totalPrice: number;
  resetItemsFromCart: () => void;
}

export const ItemsContext = createContext({} as ItemsContextType);

interface ItemsContextProviderProps {
  children: ReactNode;
}

export function ItemsContextProvider({ children }: ItemsContextProviderProps) {
  const [items, setItems] = useState<ProductCart[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const selectedItem = items.find(item => item.id === selectedItemId); // está retornando todos os itens selecionados

  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

  const totalPrice = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const createAddItemToCart = (selectedProduct: Coffee, quantity: number) => {
    setItems((state) => {
      const existingItem = state.find(item => item.id === selectedProduct.id);
      if (existingItem) {
        if (quantity > existingItem.quantity) {
          const difference = quantity - existingItem.quantity;
          return state.map(item =>
            item.id === selectedProduct.id
              ? { ...item, quantity: item.quantity + difference }
              : item
          );
        } else {
          return state;
        }
      } else {
        const newProductCart = {
          id: selectedProduct.id,
          image: selectedProduct.image,
          title: selectedProduct.title,
          price: selectedProduct.price,
          quantity: quantity,
        };
        return [...state, newProductCart];
      }
    });
    setSelectedItemId(selectedProduct.id);
  };

  const removeItemsFromCart = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  const incrementQuantity = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
      )
    );
  };

  const resetItemsFromCart = () => {
    setItems([]);
  };

  return (
    <ItemsContext.Provider 
      value={{ 
        items, 
        selectedItem, 
        createAddItemToCart, 
        removeItemsFromCart, 
        incrementQuantity, 
        decrementQuantity, 
        totalQuantity, 
        totalPrice,
        resetItemsFromCart }}>
      {children}
    </ItemsContext.Provider>
  );
}
