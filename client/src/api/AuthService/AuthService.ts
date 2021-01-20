import axios from 'axios';
import { RedirectService } from '../index';
import { AuthLogin, AuthRegister } from '../../api';
import { Logintypes, RegisterTypes } from '../../app/Auth/types';
import { register, login } from '../../features/Auth/Auth.slice';
import Store from '../../Store';

export default class AuthService {
  async Login(value: Logintypes) {
    try {
      const { data } = await axios.post(AuthLogin, value);
      Store.dispatch(login(data));

      // redirect the user to dashboard
      const { redirectToDashboard } = new RedirectService();
      redirectToDashboard();
    } catch (error) {
      console.error('Auth Login ', error);
    }
  }

  async Register(value: RegisterTypes) {
    try {
      const { data } = await axios.post(AuthRegister, value);
      Store.dispatch(register(data));

      // redirect the user to dashboard
      const { redirectToDashboard } = new RedirectService();
      redirectToDashboard();
    } catch (error) {
      console.error('Auth Register', error);
    }
  }
}
