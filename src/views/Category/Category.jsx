import styles from "./Category.module.css";

import useProductsStore from "/src/stores/products.js";
import useCategoriesStore from "/src/stores/categories.js";

import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import Filters from "/src/components/Filters/Filters.jsx";
import ProductCard from "/src/components/ProductCard/ProductCard.jsx";
import SectionTitle from "/src/components/SectionTitle/SectionTitle.jsx";
import NavigationRow from "/src/components/NavigationRow/NavigationRow.jsx";

function Products() {
    const { categoryId } = useParams();

    const categoryById = useCategoriesStore(state => state.byId);

    const byCategory = useProductsStore(state => state.byCategory);
    const fetch = useProductsStore(state => state.fetch);

    useEffect(() => {
        (async () => {
            await fetch();

            byCategory(categoryId);
        })();
    }, []);
    
    const [products, setProducts] = useState(byCategory(categoryId));

    return (
        <>
        <NavigationRow buttons={[
            { text: "Main page", route: "/" },
            { text: "Categories", route: "/categories" },
            { text: categoryById(categoryId).title, route: `/categories/${categoryId}` },
        ]} />
        <section className={styles.products}>
            <SectionTitle content={categoryById(categoryId).title} />
            <Filters products={products} setProducts={setProducts} />
            <div className={styles.cards}>
                { products.map((product) => <ProductCard product={product} key={product.id} />) }
            </div>
        </section>
        </>
    );
}

export default Products;
