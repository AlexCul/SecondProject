import { useState, useEffect } from "react";

import styles from "./Sales.module.css";

import useProductsStore from "/src/stores/products.js";

import ProductCard from "/src/components/ProductCard/ProductCard.jsx";
import SectionTitle from "/src/components/SectionTitle/SectionTitle.jsx";
import NavigationRow from "/src/components/NavigationRow/NavigationRow.jsx";

function Sales() {
    const [products, setProducts] = useState([]);

    const discounted = useProductsStore(state => state.discounted);
    const fetch = useProductsStore(state => state.fetch);

    useEffect(() => {
        (async () => {
            await fetch();

            setProducts(await discounted());
        })()
    }, []);

    return (
        <>
        <NavigationRow buttons={[
            { text: "Main Page", route: "/" },
            { text: "All Sales", route: "/sales" },
        ]} />
        <section className={styles.sales}>
            <SectionTitle content="Discounted Items" />
            <div className={styles.cards}>
                { products.map((product) => <ProductCard product={product} key={product.id} />) }
            </div>
        </section>
        </>
    );
}

export default Sales;
