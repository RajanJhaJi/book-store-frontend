import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    isAuthenticated: false,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    clearToken: (state, action) => {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export const authData = (state) => state.auth;
export default authSlice.reducer;
