import axios from "axios";

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";

const useCategoriesStore = create(devtools(persist(immer((set, get) => ({
    categories: [],
    fetch: async () => {
        const response = await axios.get("http://localhost:3333/categories/all");

        set({
            categories: await response.data,
        });
    },

    byId: (id) => {
        return get().categories[id-1];
    },
})),
    {
        name: "categories",
        getStorage: () => localStorage,
    })));

export default useCategoriesStore;
