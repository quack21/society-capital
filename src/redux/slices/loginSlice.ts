import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type LoginSliceState = {
  username: string,
  logged: boolean
}

const initialState: LoginSliceState = {
  username: '',
  logged: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    logUser(state, action: PayloadAction<boolean>) {
      state.logged = action.payload;
    },
  },
});

export const reduxUserName = (state: RootState) => state.loginReducer.username
export const reduxLogged = (state: RootState) => state.loginReducer.logged

export const { setUsername, logUser } = loginSlice.actions;

export default loginSlice.reducer;
