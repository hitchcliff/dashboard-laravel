import { AuthService } from '../../api/index';

export default function useAuthService() {
  return new AuthService();
}
