import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";

import axios from "axios";

const useProductsStore = create(devtools(persist(immer((set, get) => ({
    products: [],

    fetch: async () => {
        const products = await axios.get("http://localhost:3333/products/all");

        set({
            products: await products.data,
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
        return get().products[id-1];
    },

    discounted: () => {
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
      }
)));

export default useProductsStore;
