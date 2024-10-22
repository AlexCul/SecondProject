import useUserStore from "/src/stores/user.js";
import useProductsStore from "/src/stores/products.js";
import useCategoriesStore from "/src/stores/categories.js";

import { sendWithDiscount } from "/src/services/order.js";

import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import { useState, useEffect } from "react";

import Button from "/src/components/Button/Button.jsx";
import SectionBar from "/src/components/SectionBar/SectionBar.jsx";
import ProductCard from "/src/components/ProductCard/ProductCard.jsx";
import Notification from "/src/components/Notification/Notification.jsx";
import CategoryCard from "/src/components/CategoryCard/CategoryCard.jsx";

import styles from "./Home.module.css";

import Animals from "/src/assets/images/animals.png";

function Home() {
  const user = useUserStore((state) => state.user);

  const setPhoneNumber = useUserStore((state) => state.setPhoneNumber);
  const setUsername = useUserStore((state) => state.setUsername);
  const setEmail = useUserStore((state) => state.setEmail);

  const categories = useCategoriesStore((state) => state.categories);

  const discounted = useProductsStore((state) => state.discounted);

  const [isDiscountButtonActivated, setDiscountButtonActivated] = useState(true);
  const [notification, setNotification] = useState({
    isShown: false,
    title: "Congratulations!",
    message: "Your order with the discount has been successfully placed on the website.",
  });

  const navigate = useNavigate();

  let [discountedProducts, setDiscountedProducts] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
        username: user.username,
        phoneNumber: user.phoneNumber,
        email: user.email,
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

  useEffect(() => {
        (async () => {
            const products = await discounted();
            products.sort((first, second) => 0.5 - Math.random());

            const fourProducts = products.slice(0, 4);
            setDiscountedProducts(fourProducts);
        })();
  }, []);

  return (
    <>
      <Notification notification={notification} setNotification={setNotification} />
      <section className={`${styles.head} notCentered`}>
        <h1>Amazing Discounts on Pets Products!</h1>
        <Button initialText="Check out" clickedText="Redirecting..." onClick={() => navigate("/sales")} dependencies={{}} style={{width: "218px", marginTop: "40px"}} />
      </section>
      <section className={styles.categories}>
        <SectionBar title="Categories" button={{ text: "All categories", route: "/categories" }} />
        <div className={styles.cards}>
          { categories.slice(0, 4).map((category) => <CategoryCard category={category} key={category.id} />) }
        </div>
      </section>
      <section className={styles.discount}>
        <h2>5% off on the first order</h2>
        <div className={styles.bottom}>
            <img src={Animals} alt="animals" />
            <form className={styles.form} onSubmit={handleSubmit(async () => {
                let result = await sendWithDiscount(user);

                if (result) setNotification({ ...notification, isShown: true });
            })}>
                <p>{errors.username?.message}</p>
      <input {...register("username", {
                    required: "Please enter a name",
                }) }type="text" placeholder="Name" onChange={onChange} />
                <p>{errors.phoneNumber?.message}</p>
                <input {...register("phoneNumber", {
                    pattern: {
                        value: /\(\d{3}\) \d{3}-\d{4}/,
                        message: "Please enter a phone number like this: (123) 456-7890",
                    },
                    required: "Please enter a phone number",
                })} type="text" placeholder="Phone number" onChange={onChange} />
                <p>{errors.email?.message}</p>
                <input {...register("email", {
                    pattern: {
                        value: /\w@\w.\w/,
                        message: "Please enter a valid email like this: example.email@gmail.com",
                    },
                    required: "Please enter an email",
                })} type="text" placeholder="Email" onChange={onChange} />
                <input type="submit" value="Get a discount" />
            </form>
        </div>
      </section>
      <section className={styles.sale}>
        <SectionBar title="Sale" button={{ text: "All sales", route: "/sales" }} />
        <div className={styles.discountCards}>
            { discountedProducts.map((product) => <ProductCard product={product} key={product.id} />) }
        </div>
      </section>
    </>
  );
}

export default Home;
