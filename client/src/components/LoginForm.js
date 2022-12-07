import React, { useState } from "react";
import "./style.css";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
        <h2 id="h2">Hi, Welcome Back!</h2>
        <label className="label" htmlFor="username">Enter username:</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="label" htmlFor="password">Enter password:</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button id="b3"variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </button>
      <div>
        {/* {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))} */}
      </div>
    </form>
  );
}

export default LoginForm;
