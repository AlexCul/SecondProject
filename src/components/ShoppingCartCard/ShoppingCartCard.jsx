import styles from "./ShoppingCartCard.module.css";

import useShoppingCartStore from "/src/stores/shoppingCart.js";

import CloseIcon from "/src/assets/images/icons/close.svg";

function ShoppingCartCard({ product }) {
    const remove = useShoppingCartStore((state) => state.remove);
    return (
        <div className={styles.shoppingCartCard}>
            <img src={`http://localhost:3333/${product.image}`} alt="productImage" />
            <div className={styles.content}>
                <span>{product.title}</span>
                <button onClick={() => remove(product.id)} className={styles.remove}>
                    <img src={CloseIcon} alt="close" />
                </button>
            </div>
        </div>
    );
}

export default ShoppingCartCard;
