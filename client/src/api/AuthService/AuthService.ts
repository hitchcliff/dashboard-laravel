import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { AuthLogin, AuthRegister } from '../../api';
import { Logintypes, RegisterTypes } from '../../app/Auth/types';
import { register, login } from '../../features/Auth/Auth.slice';
import Store from '../../Store';

export default class AuthService {
  private dispatch: Dispatch = Store.dispatch;
  constructor() {}

  async Login(value: Logintypes) {
    try {
      const { data } = await axios.post(AuthLogin, value);
      console.log(data);
      Store.dispatch(login(data));
    } catch (error) {
      console.error('Auth Login ', error);
    }
  }

  async Register(value: RegisterTypes) {
    try {
      const { data } = await axios.post(AuthRegister, value);
      console.log(data);
      Store.dispatch(register(data));
    } catch (error) {
      console.error('Auth Register', error);
    }
  }
}
