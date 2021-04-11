import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import { useHistory } from "react-router-dom";

const HomePage = () => {
   const [username, setUsername] = useState();
   const history = useHistory();

   useEffect(() => {
      const cookie = document.cookie;
      // console.log(cookie);
      axios
         .post("/cookie", cookie)
         .then((res) => {
            if (res.data.message === "error") {
               console.log(res.data);
               history.push("/login");
               return;
            }
            setUsername(res.data.data.username);
         })
         .catch((err) => console.error(err));
   }, [history]);
   return (
      <>
         <Navbar value="Home Page" />
         <section className="container">
            <h1>Hello {username}</h1>
         </section>
      </>
   );
};

export default HomePage;
