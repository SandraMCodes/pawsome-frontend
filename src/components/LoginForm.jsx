import { useState } from "react";
import { useNavigate } from "react-router-dom";
import z from "zod";

import postLogin from "../api/post-login.js";
import { useAuth } from "../hooks/use-auth.js";

const loginSchema = z.object({
   username: z.string().min(1, { message: "Username must not be empty" }),
   password: z
     .string()
     .min(8, { message: "Password must be at least 8 characters long" }),
 });

function LoginForm() {
    const navigate = useNavigate();
    const {auth, setAuth} = useAuth();
    const [credentials, setCredentials] = useState({
               username: "",
               password: "",
           });
        
           const handleChange = (event) => {
              const { id, value } = event.target;
              setCredentials((prevCredentials) => ({
               ...prevCredentials,
                  [id]: value,
               }));
          };
        

          const handleSubmit = (event) => {
            event.preventDefault();
            const result = loginSchema.safeParse(credentials);
            if (!result.success) {
              const error = result.error.errors?.[0];
              if (error) {
                alert(error.message);
              }
              return;
            } else {
              postLogin(result.data.username, result.data.password).then((response) => {
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
              <button type="submit" onClick={handleSubmit}>
               Login
           </button>
      </form>
    );
  }
  
  export default LoginForm;