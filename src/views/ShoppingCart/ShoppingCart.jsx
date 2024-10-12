import styles from "./ShoppingCart.module.css";

import { useNavigate } from "react-router-dom";

import useShoppingCartStore from "/src/stores/shoppingCart.js";

import Button from "/src/components/Button/Button.jsx";
import SectionBar from "/src/components/SectionBar/SectionBar.jsx";

function ShoppingCart({}) {
    const products = useShoppingCartStore(state => state.products);

    const navigate = useNavigate();

    return (
        <>
        <SectionBar style={{margin: "40px 40px"}} title="Shopping Cart" button={{ text: "Back to the store", route: "/products" }} />
        { products.length === 0 ? 
            <>
                <p style={{fontSize: "20px"}}>Looks like you have no items in your basket currently.</p>
                <Button initialText="Continue Shopping" clickedText="Redirecting..." onClick={() => navigate("/products")} dependencies={{}} style={{width: "313px", marginTop: "32px", marginBottom: "80px"}} />
            </> : 
            <>
                <h1>Products</h1>
            </>
        }
        </>
    );
}

export default ShoppingCart;
