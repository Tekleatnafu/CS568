//import logo from './logo.svg';
//import "./App.css";
import Header from "./Components/Headers/Header";
//import Home from "./Components/Homes/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Components/Checkouts/Checkout";
import Login from "./Components/LoginPage/Login";
import Home1 from "./Components/Homes/Home1";
import { useStateValue } from "./Components/StateProvider/StateProvider";
import React, { useEffect } from "react";
//import firebase from "firebase/compat/app";
import {} from "firebase/analytics";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { auth } from "./Components/firebase";
import Payment from "./Components/Payment";
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Login" element={<Login />} />
        </Routes>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home1 />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Payment" element={<Payment />} />
          </Routes>
        </>
      </div>
    </Router>
  );
}

export default App;
