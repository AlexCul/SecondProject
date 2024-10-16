import styles from "./Count.module.css";

import { useState } from "react";

function Count({ product }) {
    if (!product.count) product.count = 1;

    const [count, setCount] = useState(product.count);

    function decrement() {
        if (count > 1) {
            product.count--;
            setCount(count - 1);
        }
    }

    function increment() {
        product.count++;
        setCount(count + 1);
    }

    return (
    <div className={styles.count}>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
    </div>
    );
}

export default Count;
