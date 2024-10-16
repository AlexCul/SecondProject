import styles from "./Product.module.css";

import Price from "/src/components/Price/Price.jsx";
import Loader from "/src/components/Loader/Loader.jsx";
import NavigationRow from "/src/components/NavigationRow/NavigationRow.jsx";

import { useParams } from "react-router-dom";
import useProductsStore from "/src/stores/products.js";
import useCategoriesStore from "/src/stores/categories.js";
import { useState, useEffect } from "react";

function Product() {
    const fetchProducts = useProductsStore(state => state.fetch);
    const productById = useProductsStore(state => state.byId);

    const fetchCategories = useCategoriesStore(state => state.fetch);
    const categoryById = useCategoriesStore(state => state.byId);

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            await fetchProducts();
            await fetchCategories();
            setLoading(false);
        })();
    }, []);

    if (isLoading) return <Loader />;

    const { productId } = useParams();

    const product = productById(productId);
    const category = categoryById(product.categoryId);

    return (
        <>
            <NavigationRow buttons={[
                { text: "Main Page", route: "/" },
                { text: "Categories", route: "/categories" },
                { text: category.title, route: `/categories/${category.id}` },
                { text: product.title, route: `/products/${product.id}` },
            ]} />
            <section className={styles.product}>
                <img src={`http://localhost:3333/${product.image}`} />
                <div>
                    <h3>{product.title}</h3>
                    <Price product={product} />
                </div>
            </section>
        </>
    );
}

export default Product;
