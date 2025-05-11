import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" required /><br/><br/>
        <input type="password" placeholder="Password" required /><br/><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
