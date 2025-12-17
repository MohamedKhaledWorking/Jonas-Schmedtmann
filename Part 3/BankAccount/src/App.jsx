import { useEffect, useReducer } from "react";
import "./App.css";

const initialState = {
  isOpened: false,
  balance: 0,
  loanAmount: 0,
  loanPurpose: "",
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "account/open":
      return { ...state, isOpened: true };
    case "account/close":
      if (state.balance > 0 || state.loanAmount > 0) return state;
      return { ...state, isOpened: false };
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loanAmount > 0) return state;
      return {
        ...state,
        loanAmount: action.payload.loanAmount,
        loanPurpose: action.payload.purpose,
      };
    case "account/payLoan":
      return {
        ...state,
        loanAmount: 0,
        loanPurpose: "",
      };
  }
}

function App() {
  const [{ balance, loanAmount, loanPurpose, isOpened }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <>
      <div className="flex  items-center flex-col h-screen py-20 ">
        <h1 className="text-8xl mb-24">🏦 The React-Redux Bank ⚛️</h1>
        <p className="text-3xl my-4">
          Balance : <span className="font-bold">{balance}</span>
        </p>
        <p className="text-3xl my-4">
          Loan : <span className="font-bold">{loanAmount}</span>{" "}
          {loanPurpose ? <span>({loanPurpose})</span> : ""}
        </p>
        <div className="w-60 ">
          <button
            className="btn btn-outline btn-info w-full my-4 capitalize"
            disabled={isOpened}
            onClick={() => dispatch({ type: "account/open" })}
          >
            open account
          </button>
          <button
            className="btn btn-outline btn-accent w-full my-4 capitalize"
            disabled={!isOpened}
            onClick={() => dispatch({ type: "account/deposit", payload: 50 })}
          >
            Deposit
          </button>
          <button
            className="btn btn-outline btn-secondary w-full my-4 capitalize"
            disabled={!isOpened}
            onClick={() => dispatch({ type: "account/withdraw", payload: 50 })}
          >
            withdraw
          </button>
          <button
            className="btn btn-outline btn-success w-full my-4 capitalize"
            disabled={!isOpened}
            onClick={() =>
              dispatch({
                type: "account/requestLoan",
                payload: { loanAmount: 5000, purpose: "wedding" },
              })
            }
          >
            Request a loan
          </button>
          <button
            className="btn btn-outline btn-primary w-full my-4 capitalize"
            disabled={!isOpened}
            onClick={() => dispatch({ type: "account/payLoan" })}
          >
            pay loan
          </button>
          <button
            className="btn btn-outline btn-error w-full my-4 capitalize"
            disabled={!isOpened}
            onClick={() => dispatch({ type: "account/close" })}
          >
            close account
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
