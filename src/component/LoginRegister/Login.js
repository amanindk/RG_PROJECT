import React, { useState } from "react";
import "./Login.css";
import loginphoto from "./loginphoto.png";

function Login(props) {
  const [email, SetEmail] = useState("");
  const [pass, SetPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <>
      <div className="img_login">
        <div className="loginimg">
          <img
            src={loginphoto}
            style={{ width: "400px", height: "auto" }}
            alt=""
          />
        </div>
        <div className="auth-form-container">
          <div className="login_name">
            <h2> Login</h2>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
              type="email"
              placeholder="deep@rgshine"
              id="email"
              name="email"
            ></input>
            <label htmlFor="password">password</label>
            <input
              value={pass}
              onChange={(e) => SetPass(e.target.value)}
              type="password"
              placeholder=""
              id="password"
              name="password"
            ></input>
            <button>Login</button>
          </form>
          <button
            className="link-btn"
            onClick={() => props.onFormSwitch("register")}
          >
            Don't have an account? Register here.
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
