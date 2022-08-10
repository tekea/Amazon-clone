import './App.css'
import Header from './Header'
import { BrowserRouter, Routes, Route,Router } from "react-router-dom";
import Checkout from './Checkout';
import Home from './Home'
import React, { useEffect } from "react";
import Login from './Login';
import { auth } from "./firebase";
import { useStateValue } from "./Stateprovider";
import Payment from "./Payment"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js" 
import Orders from "./Orders"
const promise = loadStripe("pk_test_51LKa8EKYVRMXo1QnplcDTY0jS3lxoMqvK9zLVaXz9NzUPNtjyyOmzbSKIPqp5QoOm6Ez9AZJSO9o1nGz9T5u0KTR00oiWjxXO9")
function App() {
   const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Orders />
        <Routes>
          {/* <Route path="/orders" element={<Orders />} /> */}
          <Route path="/login" element={<Login />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />{" "}
              </Elements>
            }
          ></Route>
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App