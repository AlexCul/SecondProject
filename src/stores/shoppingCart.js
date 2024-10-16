import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";

const useShoppingCartStore = create(
  devtools(
    persist(
      immer((set, get) => ({
        products: {}, // Изначально пустой объект

        push: (product, count = 1) => {
          set((state) => {
            product.count = count;

            state.products[product.id] = product; // Добавляем продукт в объект
          });
        },

        remove: (productId) => {
          set((state) => {
            delete state.products[productId]; // Удаляем продукт по его id
          });
        },

        incrementCount: (productId) => {
          set((state) => {
            const product = state.products[productId];
            if (product) {
              product.count++; // Увеличиваем количество продукта
            }
          });
        },

        decrementCount: (productId) => {
          set((state) => {
            const product = state.products[productId];
            if (product && product.count > 1) {
              product.count--; // Уменьшаем количество продукта
            }
          });
        },

        totalPrice: () => {
          let total = 0;
          Object.values(get().products).forEach((product) => {
            const price = product.discountPrice || product.price; // Берем цену со скидкой или обычную
            total += price * product.count; // Умножаем на количество
          });
          return total;
        },
      })),
      {
        name: "shopping-cart",
        getStorage: () => localStorage,
      }
    )
  )
);

export default useShoppingCartStore;

