import styles from "./Products.module.css";

import useProductsStore from "/src/stores/products.js";

import { useState } from "react";

import Filters from "/src/components/Filters/Filters.jsx";
import ProductCard from "/src/components/ProductCard/ProductCard.jsx";
import SectionTitle from "/src/components/SectionTitle/SectionTitle.jsx";
import NavigationRow from "/src/components/NavigationRow/NavigationRow.jsx";

function Products() {
  const storeProducts = useProductsStore((state) => state.products);

  const [products, setProducts] = useState(storeProducts);

  return (
    <>
      <NavigationRow
        buttons={[
          { text: "Main page", route: "/" },
          { text: "All products", route: "/products" },
        ]}
      />
      <section className={styles.products}>
        <SectionTitle content="All products" />
        <Filters products={products} setProducts={setProducts} />
        <div className={styles.cards}>
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Products;
