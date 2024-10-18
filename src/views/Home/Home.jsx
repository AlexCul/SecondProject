import useProductsStore from "/src/stores/products.js";
import useCategoriesStore from "/src/stores/categories.js";

import { useState, useEffect } from "react";

import Button from "/src/components/Button/Button.jsx";
import SectionBar from "/src/components/SectionBar/SectionBar.jsx";
import ProductCard from "/src/components/ProductCard/ProductCard.jsx";
import CategoryCard from "/src/components/CategoryCard/CategoryCard.jsx";

import styles from "./Home.module.css";

import Animals from "/src/assets/images/animals.png";

function Home() {
  const categories = useCategoriesStore((state) => state.categories);
  const fetchCategories = useCategoriesStore((state) => state.fetch);

  const fetchProducts = useProductsStore((state) => state.fetch);
  const discounted = useProductsStore((state) => state.discounted);

  let [discountedProducts, setDiscountedProducts] = useState([]);

  useEffect(() => {
        (async () => {
            await fetchCategories();
            
            await fetchProducts();
            
            const products = await discounted();
            products.sort((first, second) => 0.5 - Math.random());

            const fourProducts = products.slice(0, 4);
            setDiscountedProducts(fourProducts);
        })();
  }, []);

  return (
    <>
      <section className={`${styles.head} notCentered`}>
        <h1>Amazing Discounts on Pets Products!</h1>
        <Button initialText="Check out" clickedText="Redirecting..." onClick={() => {}} dependencies={{}} style={{width: "218px", marginTop: "40px"}} />
      </section>
      <section className={styles.categories}>
        <SectionBar title="Categories" button={{ text: "All categories", route: "/categories" }} />
        <div className={styles.cards}>
          { categories.slice(0, 4).map((category) => <CategoryCard category={category} key={category.id} />) }
        </div>
      </section>
      <section className={styles.discount}>
        <h2>5% off on the first order</h2>
        <div className={styles.bottom}>
            <img src={Animals} alt="animals" />
            <div className={styles.form}>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Phone number" />
                <input type="text" placeholder="Email" />
            </div>
        </div>
      </section>
      <section className={styles.sale}>
        <SectionBar title="Sale" button={{ text: "All sales", route: "/sales" }} />
        <div className={styles.discountCards}>
            { discountedProducts.map((product) => <ProductCard product={product} key={product.id} />) }
        </div>
      </section>
    </>
  );
}

export default Home;
