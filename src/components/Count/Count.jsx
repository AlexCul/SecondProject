import styles from "./Count.module.css";



function Count({ product }) {
    if (!product.count) product.count = 1;

    return (
    <div className={styles.count}>
        <button>-</button>
        <span>{product.count}</span>
        <button>+</button>
    </div>
    );
}

export default Count;
