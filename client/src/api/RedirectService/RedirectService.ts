import { DASHBOARD, HOME } from './RedirectLinks';

export default class RedirectService {
  redirectToHome() {
    return (window.location.pathname = HOME);
  }
  redirectToDashboard() {
    return (window.location.pathname = DASHBOARD);
  }
}
