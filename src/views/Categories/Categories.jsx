import styles from "./Categories.module.css";

import { useEffect } from "react";

import useCategoriesStore from "/src/stores/categories.js";

import CategoryCard from "/src/components/CategoryCard/CategoryCard.jsx";
import SectionTitle from "/src/components/SectionTitle/SectionTitle.jsx";
import NavigationRow from "/src/components/NavigationRow/NavigationRow.jsx";

function Categories() {
    const categories = useCategoriesStore(state => state.categories);
    const fetch = useCategoriesStore(state => state.fetch);

    useEffect(() => {
        (async () => {
            await fetch();
        })();
    });

    return (
        <>
        <NavigationRow buttons={[
            { text: "Main page", route: "/" },
            { text: "Categories", route: "/categories" },
        ]} />
        <section className={styles.categories}>
        <SectionTitle content="Categories" />
        <div className={styles.cards}>
        { categories.map(category => (
            <CategoryCard key={category.id} category={category} />
        )) }
        </div>
        </section>
        </>
    );
}

export default Categories;
