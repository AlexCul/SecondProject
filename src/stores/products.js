import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";

import { get as getProducts } from "/src/services/products.js";

const useProductsStore = create(
  devtools(
    persist(
      immer((set, get) => ({
        products: [],

        fetch: async () => {
          set({
            products: await getProducts(),
          });
        },

        byCategory: (categoryId) => {
          let byCategory = [];

          for (let product of get().products) {
            if (product.categoryId == categoryId) {
              byCategory.push(product);
            }
          }

          return byCategory;
        },
        byId: (id) => {
          return get().products[id - 1];
        },

        discounted: async () => {
          let discounted = [];

          for (let product of get().products) {
            if (product.discountPrice != null) {
              discounted.push(product);
            }
          }

          return discounted;
        },
      })),
      {
        name: "products",
        getStorage: () => localStorage,
      },
    ),
  ),
);

export default useProductsStore;
