import React from 'react'
import { Switch, Route } from "react-router-dom";
import RegisterPage from "./Components/RegisterPage/Register.jsx";
import LoginPage from "./Components/LoginPage/LoginPage";
import HomePage from "./Components/HomePage/HomePage";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

const App = () => {

  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </>
  )
}

export default App
