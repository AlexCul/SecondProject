import styles from "./OrderForm.module.css";

import { useForm } from "react-hook-form";

import useUserStore from "/src/stores/user.js";
import useShoppingCartStore from "/src/stores/shoppingCart.js";

function OrderForm({ onSubmit }) {
  const user = useUserStore((state) => state.user);

  const setUsername = useUserStore((state) => state.setUsername);
  const setPhoneNumber = useUserStore((state) => state.setPhoneNumber);
  const setEmail = useUserStore((state) => state.setEmail);

  const totalCount = useShoppingCartStore((state) => state.totalCount);
  const totalPrice = useShoppingCartStore((state) => state.totalPrice);

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      username: user.username,
      email: user.email,
      phoneNumber: user.phoneNumber,
    },
  });
  const onChange = (event) => {
    switch (event.target.name) {
      case "username":
        setUsername(event.target.value);
        break;
      case "phoneNumber":
        setPhoneNumber(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
    }
  };

  return (
    <div className={styles.orderForm}>
      <h3>Order details</h3>
      <p>{totalCount()} items</p>
      <div className={styles.price}>
        <span>Total</span>
        <span className={styles.price}>${totalPrice().toFixed(2)}</span>
      </div>
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <input
          {...register("username")}
          type="text"
          placeholder="Name"
          onChange={onChange}
        />
        <input
          {...register("phoneNumber")}
          type="text"
          placeholder="Phone number"
          onChange={onChange}
        />
        <input
          {...register("email")}
          type="text"
          placeholder="Email"
          onChange={onChange}
        />
        <input type="submit" value="Order" />
      </form>
    </div>
  );
}

export default OrderForm;
