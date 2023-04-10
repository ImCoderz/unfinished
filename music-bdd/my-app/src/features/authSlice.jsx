import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogging:false
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn(state){
      state.isLogging=true
    },
    logOut(state){
      state.isLogging=false
    }
  },
});
export const authActions=authSlice.actions;
export default authSlice;
