import React, { useState } from "react";
import '../styles/signup_user.css'
import { Link } from 'react-router-dom'

const initialData = { email: "", password: "" }

const LoginPage = () => {
  const [data, setData] = useState(initialData);
  const [email, setemail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [password, setpassword] = useState('');
  const [isValidpassword, setIsValidpassword] = useState(false);

  const submithandler = (e) => {
    e.preventDefault();
    if (isValid && isValidpassword) {
      console.log('Email submitted: ', email);
      console.log(data);
      fetch("https://service-provider-apis.onrender.com/api/v1/user/login/web", {
        method: "POST",
        headers: {
          Authentication: `Bearer ${undefined}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error Request");
          }
          console.log(response)
          return response.json();
        })
        .then((json) => console.log(json))
        .catch((error) => console.log(error));

    } else {
      console.log('Invalid email: ', email, password);
      alert("Enter Valid Authentications, current authentications are invalid.")
    }

  }


  return (
    <>

      <div className="form-container">
        <p className="title">Login</p>
        <form className="form" >
          <div className="input-group">
            <label htmlFor="username">Email</label>
            <input type="text" name="email" id="username" value={email} onChange={e => {
              setemail(e.target.value)
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              setIsValid(emailRegex.test(e.target.value));
              setData({ email: e.target.value, password: password })

            }} 
            required />

          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={password} onChange={e => {
              setpassword(e.target.value)
              const passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
              setIsValidpassword(passwordregex.test(e.target.value));
              setData({ email: email, password: e.target.value })
            }} required />


            <div className="forgot">
              <Link rel="noopener noreferrer" href="#!">
                Forgot Password ?
              </Link>
            </div>
          </div>
          <button type='button' onClick={submithandler} className="sign">Sign in</button>
        </form>
        <div className="social-message">
          <div className="line" />
          <p className="message">Login with social accounts</p>
          <div className="line" />
        </div>
        <div className="social-icons">
          <button aria-label="Log in with Facebook" className="icon">
            <Link to="https://www.facebook.com/profile.php?id=100069828099402&mibextid=ZbWKwL">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </Link>
          </button>
          <button aria-label="Log in with Google" className="icon">
            <Link to="https://twitter.com/HelpyMoto?t=FmxcdcAnmVX6GO20FkKFzA&s=09" >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
            
          </Link>
        </button>

      </div>
      <p className="signup">
        Don't have an account?
        <Link rel="noopener noreferrer" to="/Newaccount" className="">
          Sign up
        </Link>
      </p>
    </div >


    </>

  )
}

export default LoginPage