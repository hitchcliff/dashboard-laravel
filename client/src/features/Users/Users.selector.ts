import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../Store';
import { userAdapter } from './Users.slice';

export const userSelector = userAdapter.getSelectors((state: RootState) => state.Users);

export const selectAllUserSelector = createSelector(userSelector.selectAll, user => user);
