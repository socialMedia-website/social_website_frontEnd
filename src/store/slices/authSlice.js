import { TOKEN_KEY } from "../../utils/constants";
import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const getInitialState = () => {
  const token =
    localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY);
  if (token) {
    try {
      const decodedUser = jwtDecode(token);
      if (decodedUser.exp * 1000 > Date.now()) {
        return { user: decodedUser, token: token, isAuthenticated: true };
      }
    } catch (error) {
      console.error("Error decoding token on initial load:", error);
    }
  }
  localStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(TOKEN_KEY);
  return { user: null, token: null, isAuthenticated: false };
};

const initialState = getInitialState();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { token, rememberMe } = action.payload;
      if (!token || typeof token !== "string") {
        console.error("Invalid token on login:", token);
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        localStorage.removeItem(TOKEN_KEY);
        sessionStorage.removeItem(TOKEN_KEY);
        return;
      }
      try {
        const decodedUser = jwtDecode(token);
        state.user = decodedUser;
        state.token = token;
        state.isAuthenticated = true;
        if (rememberMe) {
          localStorage.setItem(TOKEN_KEY, token);
        } else {
          sessionStorage.setItem(TOKEN_KEY, token);
        }
      } catch (error) {
        console.error("Failed to decode token on login:", error);
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        localStorage.removeItem(TOKEN_KEY);
        sessionStorage.removeItem(TOKEN_KEY);
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem(TOKEN_KEY);
      sessionStorage.removeItem(TOKEN_KEY);
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
