import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

import postLogin from "../api/post-login.js";
import { useAuth } from "../hooks/use-auth.js";

function SignupForm() {
   const navigate = useNavigate();
   const {auth, setAuth} = useAuth();
   const [credentials, setCredentials] = useState({
            username: "",
            password: "",
            confirmPassword: "",
           });
         };
   const signUpSchema = z.object({
         username: z.string().min(3, { message: "Username must be at least 3 characters long." }),
         password: z.string().min(8, { message: "Password must be at least 8 characters long." })
         confirmPassword: z.string().min(8 {message: "Confirm Password, Passwords must match"})

           const handleChange = (event) => {
              const { id, value } = event.target;
              setCredentials((prevCredentials) => ({
               ...prevCredentials,
                  [id]: value,
               }));
            }});
        

             const handleSubmit = (event) => {
                   event.preventDefault();
                   if (credentials.username && credentials.password) {
                       postLogin(
                           credentials.username,
                          credentials.password
                       ).then((response) => {
                        window.localStorage.setItem("token", response.token);
                         setAuth({
                              token: response.token,
                               });
                        navigate("/");
                      });
                   }
               };
    return (
      <form>
        <div>
          <label htmlFor="username">Username:</label>
                        <input
                  type="text"
                   id="username"
                  placeholder="Enter username"
                  onChange={handleChange}
               />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
                <input
                   type="password"
                   id="password"
                  placeholder="Password"
                  onChange={handleChange}
               />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                   type="confirmPassword"
                   id="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={handleChange}
               />
        </div>
              <button type="submit" onClick={handleSubmit}>
               Login
           </button>
      </form>
    );
  }
  
  export default LoginForm;