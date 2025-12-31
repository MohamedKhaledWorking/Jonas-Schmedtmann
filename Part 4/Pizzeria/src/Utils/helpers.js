export function formatTime(dateString) {
  const date = new Date(dateString);

  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export function buildOrderObject(id, row) {
  return {
    id,
    arriveAt: new Date() + (row.isPriority === "true" ? 25 : 45) * 60000,
    user: {
      name: row.name,
      email: row.email,
      phone: row.phone,
    },
    address: {
      street: row.street,
      city: row.city,
      postalCode: row.postalCode,
      Apartment: row.Apartment,
    },
    paymentMethod: row.paymentMethod ? "Cash on Delivery" : "credit Card",
    isPriority: row.isPriority === "true",
    orderStatusCode: 0,
    items: JSON.parse(row.items),
  };
}

export function validateInputs(row) {
  const error = {};

  row.name === "" || row.name.length < 2 || typeof row.name !== "string"
    ? (error.name = "Name is required and should be at least 2 characters long")
    : null;
  row.email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(row.email)
    ? (error.email = "A valid email is required")
    : null;
  row.phone === "" || !/^\d{11}$/.test(row.phone)
    ? (error.phone = "A valid phone number is required")
    : null;
  row.street === "" || typeof row.street !== "string"
    ? (error.street = "Street is required")
    : null;
  row.city === "" || typeof row.city !== "string"
    ? (error.city = "City is required")
    : null;
  row.paymentMethod === "" || typeof row.paymentMethod !== "string"
    ? (error.paymentMethod = "Payment method is required")
    : null;

  return error;
}
