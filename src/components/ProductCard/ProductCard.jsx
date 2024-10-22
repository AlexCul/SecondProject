import styles from "./ProductCard.module.css";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import useShoppingCartStore from "/src/stores/shoppingCart.js";

import Button from "/src/components/Button/Button.jsx";

function ProductCard({ product }) {
    const [isCardHovered, setCardHovered] = useState(false);

    const navigate = useNavigate();

    const push = useShoppingCartStore((state) => state.push);

    const handleCardClick = () => navigate(`/products/${product.id}`);

    return (
        <div className={styles.productCard} onMouseEnter={() => setCardHovered(true)} onMouseLeave={() => setCardHovered(false)} onClick={handleCardClick}>
                <div className={styles.top}>
                <span className={styles.discount} style={{
                    display: `${product.discountPrice != null ? "block" : "none"}`,
                }}>-{Math.floor(100 - (product.discountPrice * 100 / product.price))}%</span>
                <div onClick={(event) => event.stopPropagation()}>
                <Button initialText="Add to cart" clickedText="Added" onClick={(dependencies) => {
                        const push = dependencies.push;
                        const product = dependencies.product;

                        push(product);
                        console.log("pushe mf");
                }} dependencies={{
                    push: push,
                    product: product,
                }} style={{
                    opacity: `${isCardHovered ? 1 : 0}`,
                    position: "absolute",
                    top: "210px",
                    left: "16px",
                    width: "284px",
                }} />
                </div>
                <img src={`http://localhost:3333/${product.image}`} width="316" height="284" />
                </div>
                <div className={styles.bottom}>
                <p>{product.title}</p>
                <span className={styles.primaryPrice}>${product.discountPrice != null ? product.discountPrice : product.price}</span>
                <span className={styles.secondaryPrice}>{product.discountPrice != null ? `\$${product.price}` : ""}</span>
        </div>
        </div>
    );
}

export default ProductCard;
