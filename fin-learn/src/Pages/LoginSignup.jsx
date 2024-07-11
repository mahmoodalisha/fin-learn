import React, { useState } from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {

  const [state,setState] = useState("Login");
  //state variable to save input field data
  const [formData,setFormData] = useState({
    username: "",
    password: "",
    email: "",
    number: ""
  })

  const changeHandler = (e)=> {
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  
  //this is API for Login and Signup
  const login = async () => {
    console.log("Login Function Executed",formData);
  }
  const signup = async () => {
    console.log("Signup Function Executed",formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
    

  }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          
          {state === "Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your name'/>:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Your email address'/>
          <input name='number' value={formData.number} onChange={changeHandler} type="number" placeholder='Your phone number'/>
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password'/>
        </div>
        <button onClick={()=>{state==='Login'?login():signup()}}>Continue</button>
        {state === "Sign Up"?<p className="loginsignup-login">Already Have an account?   <span onClick={()=>{setState("Login")}}>Login here</span></p>:
        <p className="loginsignup-login">Create Account   <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
        
        
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, i agree to the terms and conditions</p>
        </div>
      </div>
      </div>
  )
}

export default LoginSignup
