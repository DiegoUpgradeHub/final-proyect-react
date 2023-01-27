import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function LoginForm({ authenticated, login, location }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    try {
      login({ email, password });
    } catch (e) {
      alert("Failed to login");
      setEmail("");
      setPassword("");
    }
  };

  const { from } = window.location.state || { from: { pathname: "/" } };
  if (authenticated) return <Navigate to={from} state={{ prevRoute: window.location.pathname }} />;

  return (
    <div className="loginPage">
      <h1>Inicia sesión</h1>
      <input
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
        type="text"
        placeholder="email"
      />
      <input
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        type="password"
        placeholder="password"
      />
      <button onClick={handleClick}>Entrar</button>
    </div>
  );
}

export default LoginForm;