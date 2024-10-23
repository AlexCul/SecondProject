import styles from "./Price.module.css";

function Price({
  product,
  isDiscountShown = true,
  fontSizes = {
    primaryPrice: "40px",
    secondaryPrice: "20px",
    discount: "20px",
  },
}) {
  return (
    <div className={styles.price}>
      <span
        className={styles.primaryPrice}
        style={{ fontSize: fontSizes.primaryPrice }}
      >
        ${product.discountPrice != null ? product.discountPrice : product.price}
      </span>
      <span
        className={styles.secondaryPrice}
        style={{ fontSize: fontSizes.secondaryPrice }}
      >
        {product.discountPrice != null ? `\$${product.price}` : ""}
      </span>
      <span
        className={styles.discount}
        style={{
          display: `${product.discountPrice != null && isDiscountShown ? "block" : "none"}`,
          fontSize: fontSizes.discount,
        }}
      >
        -{Math.floor(100 - (product.discountPrice * 100) / product.price)}%
      </span>
    </div>
  );
}

export default Price;
