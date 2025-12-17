import { useSelector } from "react-redux";

function Customer() {
  const fullName = useSelector((store) => store.user.name);
  return <h2>👋 Welcome, {fullName}</h2>;
}

export default Customer;
