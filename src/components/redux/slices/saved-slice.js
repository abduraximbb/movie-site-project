import { createSlice } from "@reduxjs/toolkit";

const savedSlice = createSlice({
  name: "saved",
  initialState: {
    value: [],
  },
  reducers: {
    addSavedList(state, action) {
      console.log(state.value);
      
      const index = state.value.findIndex(({ id }) => id === action.payload.id);
      if (index < 0) {
        state.value.push(action.payload);
      } else {
        state.value = state.value.filter(({ id }) => id !== action.payload.id);
      }
    },
  },
});

export const { addSavedList } = savedSlice.actions;
export default savedSlice.reducer;
