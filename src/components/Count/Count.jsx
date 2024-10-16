import styles from "./Count.module.css";

import { useState } from "react";

function Count({ product }) {
    const [count, setCount] = useState((product.count ? product.count : 1));

    function decrement() {
        if (count > 1) setCount(count - 1);
    }

    function increment() {
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
