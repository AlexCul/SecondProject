import styles from "./Product.module.css";

import Count from "/src/components/Count/Count.jsx";
import Price from "/src/components/Price/Price.jsx";
import Button from "/src/components/Button/Button.jsx";
import Loader from "/src/components/Loader/Loader.jsx";
import NavigationRow from "/src/components/NavigationRow/NavigationRow.jsx";

import { useParams } from "react-router-dom";

import useProductsStore from "/src/stores/products.js";
import useCategoriesStore from "/src/stores/categories.js";
import useShoppingCartStore from "/src/stores/shoppingCart.js";

import { useState, useEffect } from "react";

function Product() {
  const productById = useProductsStore((state) => state.byId);

  const categoryById = useCategoriesStore((state) => state.byId);

  const push = useShoppingCartStore((state) => state.push);

  const [isLoading, setLoading] = useState(true);
  const [isTextShortened, setTextShortened] = useState(true);

  const maxShortenedLength = 700;

  const { productId } = useParams();

  useEffect(() => {
    (async () => {
      await new Promise((r) => setTimeout(r, 2000));
      setLoading(false);
    })();
  }, []);

  if (isLoading) return <Loader />;

  const product = productById(productId);
  const category = categoryById(product.categoryId);

  function appendEllipsis(text) {
    if (text.length < maxShortenedLength) return text;
    return text.slice(0, maxShortenedLength).trim() + "...";
  }

  return (
    <>
      <NavigationRow
        buttons={[
          { text: "Main Page", route: "/" },
          { text: "Categories", route: "/categories" },
          { text: category.title, route: `/categories/${category.id}` },
          { text: product.title, route: `/products/${product.id}` },
        ]}
      />
      <section className={styles.product}>
        <img src={`http://localhost:3333/${product.image}`} />
        <div>
          <h3>{product.title}</h3>
          <Price
            product={product}
            fontSizes={{
              primaryPrice: "64px",
              secondaryPrice: "40px",
              discount: "20px",
            }}
          />
          <div className={styles.countAndButton}>
            <Count product={product} />
            <Button
              initialText="Add to cart"
              clickedText="Added"
              onClick={(dependencies) => push(dependencies.product)}
              dependencies={{ product: product }}
              style={{
                width: "316px",
              }}
            />
          </div>
          <div className={styles.description}>
            <h4>Description</h4>
            <p>
              {isTextShortened
                ? appendEllipsis(product.description)
                : product.description}
            </p>
            <a
              onClick={() => setTextShortened(!isTextShortened)}
              style={{
                display: `${product.description.length <= maxShortenedLength ? "none" : "block"}`,
              }}
            >
              {isTextShortened ? "Read more" : "Read less"}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
