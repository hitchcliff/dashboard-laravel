import { useState } from 'react';
import useAuthService from '../Hooks/useAuthService';

interface RegisterProps {
  state: (e: boolean) => void;
}

export default function Register({ state }: RegisterProps) {
  const [value, setValue] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const { Register } = useAuthService();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    Register(value);
  }

  return (
    <div className="ml-auto p-12 w-1/4">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full name</label>
          <input
            className="form-input"
            type="text"
            placeholder="Enter name"
            required
            value={value.name}
            onChange={e => setValue({ ...value, name: e.currentTarget.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            className="form-input"
            type="text"
            placeholder="Username"
            required
            value={value.username}
            onChange={e => setValue({ ...value, username: e.currentTarget.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-input"
            type="email"
            placeholder="Email"
            required
            value={value.email}
            onChange={e => setValue({ ...value, email: e.currentTarget.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-input"
            type="password"
            placeholder="Password"
            required
            value={value.password}
            onChange={e => setValue({ ...value, password: e.currentTarget.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password_confirmation">Confirm Password</label>
          <input
            className="form-input"
            type="password"
            placeholder="Confirm Password"
            required
            value={value.password_confirmation}
            onChange={e =>
              setValue({
                ...value,
                password_confirmation: e.currentTarget.value,
              })
            }
          />
        </div>
        <div className="form-group mt-8">
          <button className="form-submit" type="submit">
            Register
          </button>
        </div>
      </form>
      <p className="mt-6 text-gray-500">
        Already have an account?
        <span className="ml-2 font-semibold text-green-500 cursor-pointer" onClick={() => state(true)}>
          Sign in
        </span>
      </p>
    </div>
  );
}
