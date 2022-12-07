import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import "./style.css";
import image from "../wp11149552-movie-posters-2022-wallpapers.jpg";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="cont">
      <div className="cont1">
        <img id="img" src={image} alt="background" />
      </div>
      <div className="cont2">
        <div className="cont3">
          <h1 id="header">Movie Forum</h1>
          {/* <h3 id="h3">Hi, Welcome Back!</h3> */}
          {showLogin ? (
            <>
              <LoginForm onLogin={onLogin} />
              <p className="p">
                Don't have an account? &nbsp;
                <button id="b1" onClick={() => setShowLogin(false)}>
                  Sign Up
                </button>
              </p>
            </>
          ) : (
            <>
              <SignUpForm onLogin={onLogin} />
              <p className="p">
                Already have an account? &nbsp;
                <button id="b2" onClick={() => setShowLogin(true)}>
                  Log In
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// const h1 = styled.h1`
//   font-family: "Permanent Marker", cursive;
//   font-size: 3rem;
//   color: deeppink;
//   margin: 8px 0 16px;
// `;

// const div = styled.section`
//   max-width: 500px;
//   margin: 40px auto;
//   padding: 16px;
// `;

// const Divider = styled.hr`
//   border: none;
//   border-bottom: 1px solid #ccc;
//   margin: 16px 0;
// `;

export default Login;
