import { useEffect, useMemo } from 'react';
import UserService from '../../api/UserService/UserService';

export default function useUserService() {
  useEffect(() => {
    let cleanupFns: (() => void)[] = [];
    const { getUsers } = new UserService();

    cleanupFns = [getUsers];

    return function cleanup() {
      cleanupFns.forEach(fn => fn());
    };
  }, []);

  return useMemo(() => new UserService(), []);
}
