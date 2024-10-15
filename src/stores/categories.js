import axios from "axios";

import { create } from "zustand";

const useCategoriesStore = create((set) => ({
    categories: [],
    fetch: async () => {
        const response = await axios.get("http://localhost:3333/categories/all");

        set({
            categories: await response.data,
        });
    },

    byId: (id) => {
        return categories[id-1];
    },
}));

export default useCategoriesStore;
