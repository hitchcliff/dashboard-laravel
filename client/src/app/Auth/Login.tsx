import { useState } from 'react';
import useAuthService from '../Hooks/useAuthService';

interface LoginProps {
  state: (e: boolean) => void;
}

export default function Login({ state }: LoginProps) {
  const [value, setValue] = useState({
    username: '',
    password: '',
  });

  const { Login } = useAuthService();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    Login(value);
  }

  return (
    <div className="ml-auto p-12 w-1/4">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            className="form-input"
            type="username"
            placeholder="Username"
            value={value.username}
            onChange={e => setValue({ ...value, username: e.currentTarget.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-input"
            type="password"
            placeholder="Password"
            value={value.password}
            onChange={e => setValue({ ...value, password: e.currentTarget.value })}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="form-submit">
            Login
          </button>
        </div>
      </form>
      <p className="mt-6 text-gray-500">
        Don't have an account?
        <span className="ml-2 font-semibold text-green-500 cursor-pointer" onClick={() => state(false)}>
          Register
        </span>
      </p>
    </div>
  );
}
