import { configureStore, createSlice } from "@reduxjs/toolkit";

// 로컬 스토리지 키(key)
const STORAGE_KEY = 'darkMode';

// 이전에 저장된 다크 모드 상태 확인
const savedDarkMode = localStorage.getItem(STORAGE_KEY);

// 초기 상태 정의
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
