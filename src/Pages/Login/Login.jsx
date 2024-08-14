import React, { useState } from 'react';
import './Login.css';
import assets from '../../assets/assets'

const Login = () => {

 const [current, setCurrent] = useState("Sign up")

  return (
    <div className='login'>
      <img src={assets.logo_big} alt='' className='logo' />

      <form className='login-form'>
        <h2>{current}</h2>
       {current === "Sign up" ? ( <input
          type="text"
          placeholder="username"
          className="form-input"
          required
        /> ) : ( null )}
        <input
          type="email"
          placeholder="Email"
          className="form-input"
          required
        />
        <input
          type="password"
          placeholder="password"
          className="form-input"
          required
        />
        <button type='submit'> 
        {current === "Sign up" ? "Create account" : "Login Now"}</button>
        <div className="login-term">
          <input type='checkbox' />
          <p>Agree to login</p>
        </div>
        <div className='login-forgot'>
         
            {current === "Sign up" ? (
              <p className='login-toggle'>
             Already have an account
             <span onClick={() => setCurrent("Login")}>Login here</span>
           </p> 
          ) : 
          ( <p className='login-toggle'>
           Create an account
           <span onClick={() => setCurrent("Sign up")}>click here</span>
         </p>)
            }
           
         
        </div>
      </form>
    </div>
  )
}

export default Login