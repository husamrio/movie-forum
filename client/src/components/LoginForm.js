import React, { useState } from "react";
import "./style.css";
import { useNavigate } from 'react-router-dom'

function LoginForm({ setUser }) {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => console.log(err.error));
      }
    });
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="label">
          Username:
        </label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label className="label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button id="b3"variant="fill" color="primary" type="submit">
          Login
        </button>
      </div>
      <div>
        {/* {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))} */}
      </div>
    </form>
  );
}

export default LoginForm;
