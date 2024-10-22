import styles from "./ShoppingCartCard.module.css";

import useShoppingCartStore from "/src/stores/shoppingCart.js";

import CloseIcon from "/src/assets/images/icons/close.svg";

import Count from "/src/components/Count/Count.jsx";
import Price from "/src/components/Price/Price.jsx";

function ShoppingCartCard({ product }) {
    const remove = useShoppingCartStore((state) => state.remove);

    const increment = useShoppingCartStore((state) => state.incrementCount);
    const decrement = useShoppingCartStore((state) => state.decrementCount);

    const customFunctions = {
        increment: () => increment(product.id),
        decrement: () => decrement(product.id),
        getCount: () => product.count,
    };

    return (
        <div className={styles.shoppingCartCard}>
            <img src={`http://localhost:3333/${product.image}`} alt="productImage" />
            <div className={styles.content}>
                <div className={styles.top}>
                <span>{product.title}</span>
                <button onClick={() => remove(product.id)} className={styles.remove}>
                    <img src={CloseIcon} alt="close" />
                </button>
                </div>
                <div className={styles.bottom}>
                    <Count product={product} customFunctions={customFunctions} />
                    <Price product={product} isDiscountShown={false} />
                </div>
            </div>
        </div>
    );
}

export default ShoppingCartCard;
