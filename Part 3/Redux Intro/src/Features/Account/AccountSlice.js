import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loanAmount: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare: (loanAmount, purpose) => {
        return {
          payload: { loanAmount, purpose },
        };
      },
      reducer(state, action) {
        state.loanAmount = action.payload.loanAmount;
        state.loanPurpose = action.payload.purpose;
        state.balance += action.payload.loanAmount;
      },
    },
    loanBack(state) {
      state.balance -= state.loanAmount;
      state.loanAmount = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});


export function deposit(amount, currency) {
  if (currency == "USD") return { type: "account/deposit", payload: amount };

  return async function (dispatch) {
    dispatch({ type: "account/convertingCurrency" });
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();

    dispatch({
      type: "account/deposit",
      payload: data?.rates?.USD,
    });
  };
}

export const { withdraw, requestLoan, loanBack } = accountSlice.actions;

export default accountSlice.reducer;

// export default function accountReducer(state = initialValuesAccount, action) {
//   switch (action.type) {
//     case "account/deposit":
//       return { ...state, balance: state.balance + action.payload , isLoading : false };
//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };
//     case "account/requestLoan":
//       return {
//         ...state,
//         loanPurpose: action.payload.purpose,
//         loanAmount: action.payload.loanAmount,
//       };
//     case "account/loanBack":
//       return {
//         ...state,
//         loanAmount: 0,
//         loanPurpose: "",
//       };
//     case "account/deposit/pending":
//       return {
//         ...state,
//         isLoading: true,
//       };
//     default:
//       return state;
//   }
// }

// export function deposit(amount, currency) {
//   if (currency == "USD") return { type: "account/deposit", payload: amount };

//   return async function (dispatch) {
//     dispatch({ type: "account/deposit/pending" });
//     const res = await fetch(
//       `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//     );
//     const data = await res.json();

//     dispatch({
//       type: "account/deposit",
//       payload: data?.rates?.USD,
//     });
//   };
// }

// export function withdraw(amount) {
//   return { type: "account/withdraw", payload: amount };
// }

// export function requestLoan(amount, purpose) {
//   return {
//     type: "account/requestLoan",
//     payload: { loanAmount: amount, purpose },
//   };
// }

// export function loanBack() {
//   return { type: "account/loanBack" };
// }
