import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { API_ENDPOINTS } from '../Constants/api_endpoints';
import './Login.css';
import axios from 'axios';
function Login(){
    const navigate=useNavigate();
   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setCookie = (name, value, days) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
    document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
   };
   // Example: Set a username cookie that expires in 7 days
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here
    // console.log('Email:', email);
    // console.log('Password:', password);
    try{
        const response=await axios.post(API_ENDPOINTS.login,{email:email,password:password},
            {
                withCredentials: true
              }
        )
        console.log(response);
        setCookie("my_token", `${response?.data?.token}`, 1);
        navigate("/dashboard");
    }
    catch(err){
        console.log(err.message);
    }
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Login;