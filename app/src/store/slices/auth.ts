import {PayloadAction, createSlice} from '@reduxjs/toolkit';

type AuthState = {
  user: unknown | undefined;
};

const initialState: AuthState = {
  user: undefined,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, {payload}: PayloadAction<unknown>) {
      state.user = payload;
    },
  },
});

const {reducer, actions} = slice;

export default reducer;

export const {setUser} = actions;
