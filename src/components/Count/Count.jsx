import styles from "./Count.module.css";

import { useState } from "react";

function Count({ product, customFunctions = undefined }) {
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

  function getCount() {
    return count;
  }

  if (customFunctions) {
    return (
      <div className={styles.count}>
        <button onClick={customFunctions.decrement}>-</button>
        <span>{customFunctions.getCount()}</span>
        <button onClick={customFunctions.increment}>+</button>
      </div>
    );
  }

  return (
    <div className={styles.count}>
      <button onClick={decrement}>-</button>
      <span>{getCount()}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Count;
