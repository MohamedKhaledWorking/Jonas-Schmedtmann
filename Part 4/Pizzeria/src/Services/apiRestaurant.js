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

export async function getOrder(id) {
  try {
    const { data } = await axios.get(`${API_URL}/order/${id}`);
    return data;
  } catch (error) {
    console.log(`something went wrong on fetching menu: ${error}`);
  }
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Failed creating your order");
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
