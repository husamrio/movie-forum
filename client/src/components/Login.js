import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import "./style.css";
import image from "../witcher.jpg";

function Login({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="cont">
      <img id="img" src={image} alt="background" />
      <h1 id="header">Movie Forum</h1>
      <h3 id="h3">Hi, Welcome Back!</h3>
      {showLogin ? (
        <>
          <LoginForm setUser={setUser} />
          <p className="p">
            Don't have an account? &nbsp;
            <button id="b1" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm setUser={setUser} setShowLogin={setShowLogin} />
          <p className="p">
            Already have an account? &nbsp;
            <button id="b2" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </div>
  );
}

export default Login;
