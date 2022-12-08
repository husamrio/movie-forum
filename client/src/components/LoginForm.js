import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function LoginForm({ setUser }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        navigate("/");
      } else {
        r.json().then((err) => setErrors(err.error));
        console.log(errors);
      }
    });
  }
  const mimi = errors.includes("Invalid username or password") ? (
    <p className="error-message">Invalid username or password</p>
  ) : (
    <p>
      <br />
    </p>
  );

  return (
    <form onSubmit={handleSubmit}>
      <h2 id="h2">Hi, Welcome Back!</h2>
      <div>
        <label className="label" htmlFor="username">
          Enter username:
        </label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          placeholder="username"
          value={username}
          onChange={(e) => {
            setErrors([]);
            setUsername(e.target.value);
          }}
        />
      </div>
      <div>
        <label className="label" htmlFor="password">
          Enter password:
        </label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setErrors([]);
            setPassword(e.target.value);
          }}
        />
      </div>
      {mimi}
      <button id="b3" variant="fill" color="primary" type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
