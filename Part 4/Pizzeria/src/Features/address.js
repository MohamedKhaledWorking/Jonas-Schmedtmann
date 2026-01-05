import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { getAddress } from "../Services/apiGeocoding.js";

const initialState = {
  isLoading: false,
  error: null,
  position: null,
  address: null,
};

export const fetchAddress = createAsyncThunk(
  "address/fetchAddress",
  async (_, { rejectWithValue }) => {
    const geoPosition = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (pos) => resolve(pos),
        (err) => reject(err),
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    }).catch((error) => {
      let msg = "Failed to get your location.";

      if (error.code === 1) msg = "You denied location permission.";
      else if (error.code === 2) msg = "Location unavailable.";
      else if (error.code === 3) msg = "Location request timed out.";

      toast.error(msg);
      return Promise.reject(msg);
    });

    toast.success("Location detected ✅");

    const { address } = await getAddress({
      latitude: geoPosition.coords.latitude,
      longitude: geoPosition.coords.longitude,
    });

    const position = {
      lat: geoPosition.coords.latitude,
      lng: geoPosition.coords.longitude,
    };

    return { address, position };
  }
);

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    reset(state, action) {
      state.isLoading = false;
      state.error = null;
      state.position = null;
      state.address = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.address = action.payload.address;
        state.position = action.payload.position;
        state.isLoading = false;
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export default addressSlice.reducer;
export const { reset } = addressSlice.actions;
