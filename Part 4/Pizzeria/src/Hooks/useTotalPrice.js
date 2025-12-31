import { useSelector } from "react-redux";

export function useTotalPrice(isPriority) {
  const carts = useSelector((store) => store?.cart?.cart);
  const subTotal = carts.reduce((acc, curr) => acc + curr.totalPrice, 0);
  const quantity = carts.reduce((acc, curr) => acc + curr.quantity, 0);
  const priority = isPriority ? quantity * 3 : 0;
  const tax = subTotal * 0.08;
  const delivery = 0;
  const total = subTotal + tax + delivery + priority;

  return {
    subTotal,
    quantity,
    priority,
    tax,
    delivery,
    total,
  };
}
