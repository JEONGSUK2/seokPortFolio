
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Dark Mode Slice
const darkSlice = createSlice({
  name: "dark",
  initialState: {
    mode: "light",
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

// Export action creator
export const { toggleTheme } = darkSlice.actions;

// Configure Redux store
const store = configureStore({
  reducer: {
    dark: darkSlice.reducer,
  },
});

export default store;