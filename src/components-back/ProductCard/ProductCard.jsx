import styles from "./ProductCard.module.css";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import Button from "/src/components/Button/Button.jsx";

function ProductCard({ product }) {
    const [isCardHovered, setCardHovered] = useState(false);

    const navigate = useNavigate();

    return (
        <div className={styles.productCard} onMouseEnter={() => setCardHovered(true)} onMouseLeave={() => setCardHovered(false)} onClick={() => console.log('clicked product')}>
                <div className={styles.top}>
                <span className={styles.discount} style={{
                    display: `${product.discountPrice != null ? "block" : "none"}`,
                }}>-{Math.floor(100 - (product.discountPrice * 100 / product.price))}%</span>
                <Button initialText="Add to cart" clickedText="Added" onClick={() => {}} dependencies={{}} style={{
                    opacity: `${isCardHovered ? 1 : 0}`,
                    position: "absolute",
                    top: "210px",
                    left: "16px",
                    width: "284px",
                }} />
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
