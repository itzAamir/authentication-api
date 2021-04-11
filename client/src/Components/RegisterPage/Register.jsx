import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import Navbar from "../Navbar";
import { useHistory } from "react-router-dom";

const Register = () => {
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const history = useHistory();

   const handleSubmit = (e) => {
      e.preventDefault();
      const data = {
         username,
         email,
         password,
      };
      axios
         .post("/register", data)
         .then((res) => {
            if (res.data.message === "ok") {
               history.push("/login");
            } else {
               alert(res.data.data);
            }
         })
         .catch((err) => console.error(err));
   };

   return (
      <>
         <Navbar value="Registration Page" />
         <section>
            <form onSubmit={handleSubmit}>
               <h3>Registration</h3>
               <input
                  type="text"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
               />
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
               <button>Register</button>
            </form>
         </section>
      </>
   );
};

export default Register;
