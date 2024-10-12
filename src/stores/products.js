import { create } from "zustand";

import axios from "axios";

const useProductsStore = create((set, get) => ({
    products: [],

    fetch: async () => {
        const products = await axios.get("http://localhost:3333/products/all");

        set({
            products: await products.data,
        });
    },

    byCategory: async (categoryId) => {
        let byCategory = [];

        for (let product of get().products) {
            if (product.categoryId == categoryId) {
                byCategory.push(product);
            }
        }

        return byCategory;
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
}));

export default useProductsStore;
