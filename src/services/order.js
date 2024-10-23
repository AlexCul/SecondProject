import axios from "axios";

export async function send(user, products) {
  const response = await axios.post("http://localhost:3333/order/send", {
    name: user.username,
    phone: user.phoneNumber,
    email: user.email,
    products: Object.values(products),
  });

  return response.status >= 200 && response.status < 300;
}

export async function sendWithDiscount(user) {
  const response = await axios.post("http://localhost:3333/order/send", {
    name: user.username,
    phone: user.phoneNumber,
    email: user.email,
    products: [],
  });

  return response.status >= 200 && response.status < 300;
}
