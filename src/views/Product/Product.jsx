import styles from "./Product.module.css";

import NavigationRow from "/src/components/NavigationRow/NavigationRow.jsx";

import { useParams } from "react-router-dom";
import useProductsStore from "/src/stores/products.js";
import { useEffect } from "react";

function Product() {
    const products = useProductsStore((state) => state.products);
    const fetch = useProductsStore((state) => state.fetch);

    useEffect(async () => {
        await fetch();
    }, []);

    const { productId } = useParams();

    return (
        <>
            <NavigationRow buttons={[
                { text: "Main Page", route: "/" },
                { text: "Categories", route: "/categories" },
                { text: products[productId - 1].title, route: "/products" },
            ]} />
            <section>{productId}</section>
        </>
    );
}
