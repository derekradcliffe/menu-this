// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "../redux/rootReducer";

// const store = configureStore({ reducer: rootReducer });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartSlice";

export const store = configureStore({
  reducer: {
    reducer: cartReducer,
  },
});

export default store;