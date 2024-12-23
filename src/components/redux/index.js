import { configureStore } from "@reduxjs/toolkit";
import savedSlice from "./slices/saved-slice"

const store = configureStore({
  reducer: {
    savedSlice
  },
});

export default store;
