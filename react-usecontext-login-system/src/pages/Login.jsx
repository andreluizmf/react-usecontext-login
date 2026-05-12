import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import '../styles/login.css';

import loginBg from '../assets/telainicial.jpg';
import avatar from '../assets/avatar.jpg';

function Login() {
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${loginBg})`,
      }}
    >
      <form onSubmit={handleSubmit} className="login-form">

        <img src={avatar} alt="Avatar" className="login-avatar"/>

        <h2>Login</h2>

        <input type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;