import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { auth } from "../firebase";
import "./Login.css";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    //const signIn = (e) => {
    //console.log("My e is ", e);
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          // const sendSubmit = () => {
          // navigate("/");
          // };
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
    //};
    //console.log(signIn());
    //signIn();
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          // const sendSubmit = () => {
          // navigate.push("/");
          // };
          navigate.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div>
        <Link to="/">
          <img
            className="login_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt=""
          />
        </Link>
      </div>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>password</h5>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login_signInButton" type="submit" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the Amazon Fake Clone Conditions of Use
          sale.please see our Private Notice,our Cookings Noties and our
          Interest-Based Ads Notice.
        </p>
        <form>
          <button className="login_registerButton" onClick={register}>
            Create Amazone Account
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
