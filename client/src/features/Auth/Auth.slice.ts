import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialStateProps {
  data?: any;
  message: string;
  status?: number;
}

const initialState: InitialStateProps = {
  status: 200,
  data: null,
  message: '',
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, { payload }: PayloadAction<InitialStateProps>) => {
      state.status = payload.status;
      state.message = payload.message;
      state.data = payload.data;
    },
    login: (state, { payload }: PayloadAction<InitialStateProps>) => {
      state.status = payload.status;
      state.message = payload.message;
      state.data = payload.data;
    },
  },
});

export const { register, login } = AuthSlice.actions;
