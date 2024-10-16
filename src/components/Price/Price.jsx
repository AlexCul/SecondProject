import styles from "./Price.module.css";

function Price({ product, isDiscountShown = true }) {
    return (
        <div className={styles.price}>
        <span className={styles.primaryPrice}>${product.discountPrice != null ? product.discountPrice : product.price}</span>
        <span className={styles.secondaryPrice}>{product.discountPrice != null ? `\$${product.price}` : ""}</span>
        <span className={styles.discount} style={{
                    display: `${(product.discountPrice != null && isDiscountShown) ? "block" : "none"}`,
                }}>-{Math.floor(100 - (product.discountPrice * 100 / product.price))}%</span>
        </div>
    );
}

export default Price;
