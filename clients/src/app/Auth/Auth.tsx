import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="w-full flex items-center space-between bg-white">
      {isLogin ? <Login state={setIsLogin} /> : <Register state={setIsLogin} />}

      <div className="ml-auto w-4/6 h-screen">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1608141133627-a5acde057969?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="unsplash image"
        />
      </div>
    </div>
  );
}
