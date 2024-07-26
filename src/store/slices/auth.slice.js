import { createSlice } from '@reduxjs/toolkit';

const authInitialState = {
  auth: {
    data: null,
    isLoading: false,
    errors: '',
    loginSuccess: false,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    getAuthAction: (state) => {
      state.auth.isLoading = true;
      state.auth.errors = '';
      state.auth.loginSuccess = false;
    },
    setAuthErrorActions: (state, error) => {
      state.auth.isLoading = false;
      state.auth.errors = error;
      state.auth.loginSuccess = false;
    },
    setAuthSuccessAction: (state, { payload }) => {
      state.auth.isLoading = false;
      state.auth.errors = '';
      state.auth.data = payload;
      state.auth.loginSuccess = true;
    },
  }
});

export const {
  getAuthAction,
  setAuthErrorActions,
  setAuthSuccessAction,
} = authSlice.actions;

export default authSlice.reducer;