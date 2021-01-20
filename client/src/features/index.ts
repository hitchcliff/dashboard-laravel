import { AuthSlice } from './Auth/Auth.slice';
import { UserSlice } from './Users/Users.slice';

export const rootReducer = {
  AuthResponse: AuthSlice.reducer,
  Users: UserSlice.reducer,
};
