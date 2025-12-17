import "./App.css";
import AccountOperations from "./Features/Account/AccountOperations.jsx";
import BalanceDisplay from "./Features/Account/BalanceDisplay.jsx";
import Customer from "./Features/User/Customer.jsx";
import CreateCustomer from "./Features/User/CreateCustomer.jsx";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((store) => store.user);
  const isUserLoggedIn = user.name !== "";
  return (
    <>
      <div>
        <h1>🏦 The React-Redux Bank ⚛️</h1>
        {isUserLoggedIn ? (
          <>
            <Customer />
            <AccountOperations />
            <BalanceDisplay />
          </>
        ) : (
          <CreateCustomer />
        )}
      </div>
    </>
  );
}

export default App;
