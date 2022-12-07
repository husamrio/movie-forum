import React, { useState } from "react";
import "./style.css";


function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation
      }),
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
      <div>
        <label className="label2" htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label className="label2" htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Enter password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </div>
      <div>
        <label className="label2" htmlFor="password">Password Confirmation:</label>
        <input
          type="password"
          placeholder="confirm password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
      </div>
      <div>
        <button id="b4" type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
      </div>
      <div>
        {/* {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))} */}
      </div>
    </form>
  );
}

export default SignUpForm;
