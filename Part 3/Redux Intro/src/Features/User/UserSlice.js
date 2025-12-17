import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  nationalId: "",
  createdAt: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: {
      prepare(name, nationalId) {
        return {
          payload: {
            name,
            nationalId,
            createdAt: Date.now(),
          },
        };
      },
      reducer(state, action) {
        state.name = action.payload.name;
        state.nationalId = action.payload.nationalId;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName: (state, action) => {
      state.name = action.payload;
    },
    deleteUser: () => {
      return initialState;
    },
  },
});

export const { createUser, updateName, deleteUser } = userSlice.actions;
export default userSlice.reducer;

// export default function userReducer(state = initialValuesUser, action) {
//   switch (action.type) {
//     case "user/createUser":
//       return {
//         ...state,
//         name: action.payload.name,
//         nationalId: action.payload.nationalId,
//         createdAt: action.payload.createdAt,
//       };
//     case "user/updateName":
//       return {
//         ...state,
//         name: action.payload,
//       };
//     case "user/deleteUser":
//       return initialValuesUser;
//     default:
//       return state;
//   }
// }

// export function createUser(name, nationalId, createdAt = Date.now()) {
//   return { type: "user/createUser", payload: { name, nationalId, createdAt } };
// }

// export function updateName(name) {
//   return { type: "user/updateName", payload: name };
// }

// export function deleteUser() {
//   return { type: "user/deleteUser" };
// }
