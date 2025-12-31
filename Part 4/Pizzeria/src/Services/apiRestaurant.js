import axios from "axios";
const API_URL = "http://localhost:3001";

export async function getPizzas() {
  try {
    const { data } = await axios.get(`${API_URL}/pizzas`);
    return data;
  } catch (error) {
    console.log(`something went wrong on fetching menu: ${error}`);
  }
}

export async function getHomePizzas() {
  try {
    const { data } = await axios.get(`${API_URL}/home`);
    return data;
  } catch (error) {
    console.log(`something went wrong on fetching menu: ${error}`);
  }
}

export async function getPizza(id) {
  try {
    const { data } = await axios.get(`${API_URL}/pizzas/${id}`);
    return data;
  } catch (error) {
    console.log(`something went wrong on fetching menu: ${error}`);
  }
}

export async function getOrder(id) {
  try {
    const { data } = await axios.get(`${API_URL}/orders/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(`something went wrong on fetching menu: ${error}`);
  }
}

export async function createOrder(newOrder) {
  try {
    console.log("asdf");
    const res = await axios.post(`${API_URL}/orders`, newOrder);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(`something went wrong on fetching menu: ${error}`);
  }
}

export async function sendPromoCodes(promoCodes) {
  try {
    const res = await axios.post(`${API_URL}/promoCodes`, promoCodes);
    return res.data;
  } catch (error) {
    console.log(`something went wrong on fetching menu: ${error}`);
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error("Failed updating your order");
  }
}
