import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";

import { get as getCategories } from "/src/services/categories.js";

const useCategoriesStore = create(
  devtools(
    persist(
      immer((set, get) => ({
        categories: [],
        fetch: async () => {
          set({
            categories: await getCategories(),
          });
        },

        byId: (id) => {
          return get().categories[id - 1];
        },
      })),
      {
        name: "categories",
        getStorage: () => localStorage,
      },
    ),
  ),
);

export default useCategoriesStore;
