import { configureStore, createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = 'darkmode';

const savedDarkMode = localStorage.getItem(STORAGE_KEY);

const initialState = {
  mode: savedDarkMode || 'light', // 
};


const darkSlice = createSlice({
  name: "dark",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      // 다크 모드 상태 변경 시 로컬 스토리지에 저장
      localStorage.setItem(STORAGE_KEY, state.mode);
    },
  },
});

export const { toggleTheme } = darkSlice.actions;

const store = configureStore({
  reducer: {
    dark: darkSlice.reducer,
  },
});

export default store;
