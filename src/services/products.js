import axios from "axios";

export async function get() {
    const products = await axios.get("http://localhost:3333/products/all");

    const data = await products.data;
    return data;
}

export async function getById(id) {
    const product = await axios.get(`http://localhost:3333/products/${id}`);

    const data = await product.data;
    return data;
}

