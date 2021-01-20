import { RoutePattern } from '../../routes/Route.pattern';

export default class RedirectService {
  redirectToHome() {
    return (window.location.pathname = RoutePattern.Home);
  }
  redirectToDashboard() {
    return (window.location.pathname = RoutePattern.Dashboard);
  }
}
