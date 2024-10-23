import { useState, useEffect } from "react";

import styles from "./Sales.module.css";

import useProductsStore from "/src/stores/products.js";

import Filters from "/src/components/Filters/Filters.jsx";
import ProductCard from "/src/components/ProductCard/ProductCard.jsx";
import SectionTitle from "/src/components/SectionTitle/SectionTitle.jsx";
import NavigationRow from "/src/components/NavigationRow/NavigationRow.jsx";

function Sales() {
  const [products, setProducts] = useState([]);

  const discounted = useProductsStore((state) => state.discounted);

  useEffect(() => {
    (async () => {
      setProducts(await discounted());
    })();
  }, []);

  return (
    <>
      <NavigationRow
        buttons={[
          { text: "Main Page", route: "/" },
          { text: "All Sales", route: "/sales" },
        ]}
      />
      <section className={styles.sales}>
        <SectionTitle content="Discounted Items" />
        <Filters
          products={products}
          setProducts={setProducts}
          features={{
            price: true,
            discounted: false,
            sorted: true,
          }}
        />
        <div className={styles.cards}>
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Sales;
