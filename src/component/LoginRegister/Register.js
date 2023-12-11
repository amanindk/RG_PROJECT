import React, { useState } from "react";
import "./Login.css";
import loginphoto from "./loginphoto.png";

function Register(props) {
  const [email, SetEmail] = useState("");
  const [pass, SetPass] = useState("");
  const [name, SetName] = useState("");

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
            <h2> Register</h2>
          </div>
          <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="Full Name">Full Name</label>
            <input
              value={name}
              onChange={(e) => SetName(e.target.value)}
              type="name"
              placeholder="Aman"
              id="name"
              name="name"
            />
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
            onClick={() => props.onFormSwitch("Login")}
          >
            Already have an account? Login here.
          </button>
        </div>
      </div>
    </>
  );
}

export default Register;
