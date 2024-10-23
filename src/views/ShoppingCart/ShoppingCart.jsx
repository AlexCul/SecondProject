import styles from "./ShoppingCart.module.css";

import { useNavigate } from "react-router-dom";

import { useState } from "react";

import { send } from "/src/services/order.js";

import useUserStore from "/src/stores/user.js";
import useShoppingCartStore from "/src/stores/shoppingCart.js";

import Button from "/src/components/Button/Button.jsx";
import OrderForm from "/src/components/OrderForm/OrderForm.jsx";
import SectionBar from "/src/components/SectionBar/SectionBar.jsx";
import Notification from "/src/components/Notification/Notification.jsx";
import ShoppingCartCard from "/src/components/ShoppingCartCard/ShoppingCartCard.jsx";

function ShoppingCart() {
  const user = useUserStore((state) => state.user);

  const products = useShoppingCartStore((state) => state.products);
  const clear = useShoppingCartStore((state) => state.clear);

  const navigate = useNavigate();

  const [notification, setNotification] = useState({
    isShown: false,
    title: "Congratulations!",
    message:
      "Your order has been successfully placed on the website.\n\nA manager will contact you shortly to confirm your order.",
  });

  return (
    <>
      <Notification
        notification={notification}
        setNotification={setNotification}
        onClose={() => clear()}
      />
      <SectionBar
        style={{ margin: "40px 40px" }}
        title="Shopping Cart"
        button={{ text: "Back to the store", route: "/products" }}
      />
      {Object.keys(products).length === 0 ? (
        <>
          <p style={{ fontSize: "20px" }}>
            Looks like you have no items in your basket currently.
          </p>
          <Button
            initialText="Continue Shopping"
            clickedText="Redirecting..."
            onClick={() => navigate("/products")}
            dependencies={{}}
            style={{ width: "313px", marginTop: "32px", marginBottom: "80px" }}
          />
        </>
      ) : (
        <>
          <section className={styles.shoppingCart}>
            <div className={styles.cards}>
              {Object.values(products).map((product) => (
                <ShoppingCartCard key={product.id} product={product} />
              ))}
            </div>
            <OrderForm
              onSubmit={async () => {
                const result = await send(user, products);

                if (result) {
                  setNotification({ ...notification, isShown: true });
                }
              }}
            />
          </section>
        </>
      )}
    </>
  );
}

export default ShoppingCart;
