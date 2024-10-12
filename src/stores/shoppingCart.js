import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useShoppingCartStore = create(
  immer((set, get) => ({
    products: [],

    push: (product) => {
      set((state) => {
        state.products.push(product);
      });
    },
    remove: (productId) => {
      set((state) => {
        if (productId > -1) {
          state.products.splice(productId, 1);
        }
      });
    },

    incrementCount: (productId) => {
      set((state) => {
        if (productId > -1) {
          state.products[productId].count++;
        }
      });
    },
    decrementCount: (productId) => {
      set((state) => {
        if (productId > -1) {
          state.products[productId].count--;
        }
      });
    },

    totalPrice: () => {
      let totalPrice = 0;

      for (let product of get().products) {
        totalPrice +=
          (product.discountPrice != null
            ? product.discountPrice
            : product.price) * product.count;
      }

      return totalPrice;
    },
  })),
);

export default useShoppingCartStore;
