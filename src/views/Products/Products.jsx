import styles from "./Products.module.css";

import useProductsStore from "/src/stores/products.js";

import { useEffect } from "react";

import ProductCard from "/src/components/ProductCard/ProductCard.jsx";
import SectionTitle from "/src/components/SectionTitle/SectionTitle.jsx";
import NavigationRow from "/src/components/NavigationRow/NavigationRow.jsx";

function Products() {
    const products = useProductsStore(state => state.products);
    const fetch = useProductsStore(state => state.fetch);

    useEffect(() => {
        (async () => {
            fetch();
        })();
    }, []);

    return (
        <>
        <NavigationRow buttons={[
            { text: "Main page", route: "/" },
            { text: "All products", route: "/products" },
        ]} />
        <SectionTitle content="All products" />
        <section className={styles.products}>
            { products.map((product) => <ProductCard product={product} key={product.id} />) }
        </section>
        </>
    );
}

export default Products;
