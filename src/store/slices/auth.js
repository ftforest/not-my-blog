import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', true);
    },
    logOut: (state, action) => {
      state.isLoggedIn = false;
      localStorage.setItem('isLoggedIn', false);
    }
  }
});

export const { logIn, logOut } = authSlice.actions;
export const authReducer = authSlice.reducer;

export const selectIsLoggedIn = (state => state.auth.isLoggedIn);