import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartSlice";

export const store = configureStore({
  reducer: {
    reducer: cartReducer,
  },
});

export default store;