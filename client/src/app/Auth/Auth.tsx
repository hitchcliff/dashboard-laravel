import { useState } from 'react';
import Login from './Login';
import Register from './Register';
import AuthImage from '../../assets/auth-image.jpg';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="w-full flex items-center space-between bg-white">
      {isLogin ? <Login state={setIsLogin} /> : <Register state={setIsLogin} />}

      <div className="ml-auto w-4/6 h-screen">
        <img className="w-full h-full object-cover" src={AuthImage} alt="unsplash" />
      </div>
    </div>
  );
}
