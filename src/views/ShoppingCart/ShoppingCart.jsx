import styles from "./ShoppingCart.module.css";

import { useNavigate } from "react-router-dom";

import useShoppingCartStore from "/src/stores/shoppingCart.js";

import Button from "/src/components/Button/Button.jsx";
import SectionBar from "/src/components/SectionBar/SectionBar.jsx";
import ShoppingCartCard from "/src/components/ShoppingCartCard/ShoppingCartCard.jsx";

function ShoppingCart({}) {
    const products = useShoppingCartStore(state => state.products);

    const navigate = useNavigate();

    console.log(products);

    return (
        <>
        <SectionBar style={{margin: "40px 40px"}} title="Shopping Cart" button={{ text: "Back to the store", route: "/products" }} />
        { Object.keys(products).length === 0 ? 
            <>
                <p style={{fontSize: "20px"}}>Looks like you have no items in your basket currently.</p>
                <Button initialText="Continue Shopping" clickedText="Redirecting..." onClick={() => navigate("/products")} dependencies={{}} style={{width: "313px", marginTop: "32px", marginBottom: "80px"}} />
            </> : 
            <>
                { Object.values(products).map((product) => <ShoppingCartCard key={product.id} product={product} />) }
            </>
        }
        </>
    );
}

export default ShoppingCart;
