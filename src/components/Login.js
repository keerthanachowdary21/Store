import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Mock validation (replace with API call in real app)
    if (credentials.username === "keerthana@gmail.com" && credentials.password === "keerthana123") {
      onLogin("Store A"); // Pass store name to parent component
      navigate("/invoices"); // Redirect to invoices page after login
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <h1>Store Owner Login</h1>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="Username is keerthana@gmail.com"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password is keerthana123"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;