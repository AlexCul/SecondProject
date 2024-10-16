import styles from "./Price.module.css";

function Price({ product }) {
    return (
        <>
        <span className={styles.primaryPrice}>${product.discountPrice != null ? product.discountPrice : product.price}</span>
    <span className={styles.secondaryPrice}>{product.discountPrice != null ? `\$${product.price}` : ""}</span>
        </>
    );
}

export default Price;
