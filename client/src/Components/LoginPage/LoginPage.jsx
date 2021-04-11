import React, { useState } from "react";
import "./loginPage.css";
import axios from "axios";
import NavBar from "../Navbar";
import { useHistory } from "react-router-dom";

const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const history = useHistory();

   const handleSubmit = (e) => {
      e.preventDefault();
      const data = {
         email,
         password,
      };
      axios
         .post("/login", data, { withCredentials: true })
         .then((res) => {
            if (res.data.message === "ok") {
               history.push("/");
            } else {
               alert(res.data.data);
            }
         })
         .catch((err) => console.error(err));
   };

   return (
      <>
         <NavBar value="Login Page" />
         <section>
            <form onSubmit={handleSubmit}>
               <h3>Login</h3>
               <input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
               <button>Login</button>
            </form>
         </section>
      </>
   );
};

export default Login;
