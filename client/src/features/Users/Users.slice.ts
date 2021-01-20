import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export interface RoleTypes {
  created_at: Date;
  id: number;
  name: string;
  updated_at: Date;
}

export interface UsersTypes {
  created_at: Date;
  email: string;
  email_verified_at: Date;
  id: number;
  is_active: number;
  name: string;
  role: RoleTypes;
  username: string;
}

export const userAdapter = createEntityAdapter<UsersTypes>({
  selectId: item => item.id,
  sortComparer: (a, b) => a.is_active - b.is_active,
});

export const UserSlice = createSlice({
  name: 'users',
  initialState: userAdapter.getInitialState(),
  reducers: {
    addUsers: (state, action) => {
      userAdapter.addMany(state, action.payload);
    },
  },
});

export const { addUsers } = UserSlice.actions;
