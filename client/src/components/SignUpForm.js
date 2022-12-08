import React, { useState } from "react";
import "./style.css";


function SignUpForm({ setShowLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);


  console.log(errors)
  
  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
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
      if (r.ok) {
        setShowLogin(true)
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 id="h2">Enroll for free!</h2>
      <div>
        <label className="label2" htmlFor="username">
          Enter username:
        </label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          autoComplete="off"
          value={username}
          onChange={(e) => {
            setErrors([]);
            setUsername(e.target.value);
          }}
        />
        {errors.includes("Username can't be blank") ? (
          <p className="error-message">Username required</p>
        ) : null}
        {errors.includes("Username has already been taken") ? (
          <p className="error-message">Username taken</p>
        ) : null}
      </div>
      <div>
        <label className="label2" htmlFor="password">
          Enter Password:
        </label>
        <input
          type="password"
          placeholder="password"
          id="password"
          value={password}
          onChange={(e) => {
            setErrors([]);
            setPassword(e.target.value);
          }}
          autoComplete="current-password"
        />
        {errors.includes("Password can't be blank") ? (
          <p className="error-message">Password required</p>
        ) : null}
      </div>
      <div>
        <label className="label2" htmlFor="password">
          Confirm password:
        </label>
        <input
          type="password"
          placeholder="confirm password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => {
            setErrors([]);
            setPasswordConfirmation(e.target.value);
          }}
          autoComplete="current-password"
        />
        {errors.includes("Password confirmation doesn't match Password") ? (
          <p className="error-message">Doesn't match</p>
        ) : null}
      </div>
      <div>
        <button id="b4" type="submit">
          Sign Up
        </button>
      </div>
      <div></div>
    </form>
  );
}

export default SignUpForm;
