import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import { auth } from "./Components/firebase";
import { useStateValue } from "./Components/StateProvider";
import Payment from "./Components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


function App() {
  const [{ }, dispatch] = useStateValue();

  const promise = loadStripe('pk_test_51N79oyJ7fs1xKbHsyBXfGyIm7uItW63UJH3oywCPIrrIs6H0OvSB9apA6VKprxHIx1Ngkr9BxXJhOf2Yo2klqt7R0088aRrfSj')

  useEffect(() => {
    //Will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('The user is ==> ==>:', authUser);
      if (authUser) {
        //The user just logged in / the user was logged out...
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else {
        //The user logged out...
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/login" element={[<Login />]} />
          <Route path="/checkout" element={[<Checkout />]} />
          <Route path="/payment" element={[<Elements stripe={promise}><Payment /></Elements>]} />
          <Route path="/" element={[<Home />]} />
        </Routes>
      </div>
    </Router>
  );
}
export default App