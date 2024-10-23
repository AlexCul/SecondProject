import { createRoot } from "react-dom/client";

import { useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import useProductsStore from "/src/stores/products.js";
import useCategoriesStore from "/src/stores/categories.js";

import "./App.css";

import Home from "/src/views/Home/Home.jsx";
import Sales from "/src/views/Sales/Sales.jsx";
import Product from "/src/views/Product/Product.jsx";
import Products from "/src/views/Products/Products.jsx";
import Category from "/src/views/Category/Category.jsx";
import Categories from "/src/views/Categories/Categories.jsx";
import ShoppingCart from "/src/views/ShoppingCart/ShoppingCart.jsx";
import PageNotFound from "/src/views/PageNotFound/PageNotFound.jsx";

import Header from "/src/components/Header/Header.jsx";
import Footer from "/src/components/Footer/Footer.jsx";

export default function App() {
  const fetchProducts = useProductsStore((state) => state.fetch);
  const fetchCategories = useCategoriesStore((state) => state.fetch);

  useEffect(() => {
    (async () => {
      await fetchProducts();
      await fetchCategories();
    })();
  }, []);

  return (
    <>
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/sales" element={<Sales />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/products/:productId" element={<Product />}></Route>
            <Route path="/categories" element={<Categories />}></Route>
            <Route
              path="/categories/:categoryId"
              element={<Category />}
            ></Route>
            <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
