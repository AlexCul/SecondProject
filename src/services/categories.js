import axios from "axios";

export async function get() {
    const response = await axios.get("http://localhost:3333/categories/all");

    const data = await response.data;
    return data;
}

export async function getById(id) {
    const response = await axios.get(`http://localhost:3333/categories/${id}`);

    const data = await response.data;
    return data;
}
