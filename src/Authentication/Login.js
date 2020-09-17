import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import "./Login.css";


function Login() {
  const [{user},dispatch] = useStateValue();

  
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  let history = useHistory();
  
  const login =(e) => {
    e.preventDefault(); // this stop the refresh


    dispatch({
      type:"LOGIN",
      item:{
       email,
       password
      }
    })

    setTimeout(() => {
      
      nextpage();
    }, 500)
    
  };
  
  const nextpage = (dat) => {
    let User = JSON.parse(localStorage.getItem('User'));
    if (User === []) {
      alert('wrong credentials')
    }
    else if(User){
      history.push("/");
    }
    else{
      alert('wrong credentials')
    }
  }

  const register = (e) => {
    e.preventDefault();
    dispatch({
      type: "Register",
      item: {
        email,
        password,
      }
    })
  };


  return (
    <div className="login">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG24.png"
          alt="logo"
          className="login__logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>

        <form>
          <h5>email</h5>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
          />

          <h5>password</h5>
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="text"
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our interest-based Ads
          Notice
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Amazon Account.
        </button>
      </div>
    </div>
  );
}

export default Login;
