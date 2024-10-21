import React, {useState} from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {

  const [state, setState] = useState("Login");

  const [formData, setFormData] = useState({
    username:"",
    email:"",
    password:""
  })

  const changeHandler = (e) => {
       setFormData({...formData, [e.target.name]:e.target.value})
  }

  const Login = async () => {
    console.log("Login function Executed", formData);

    let responseData;

    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/formData',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/')
    }else{
      alert(responseData.errors)
    }
  }

  const SignUp = async () => {
    console.log("SignUp function Executed", formData);

    let responseData;

    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/formData',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/')
    }else{
      alert(responseData.errors)
    }
  }


  return (
    <div className='loginsignup'>
      <div className="login-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? <input type="text" name='username' value={formData.username} onChange={changeHandler} placeholder='Your Name'/> : <></>}
          <input type="email" name='email' value={formData.email} onChange={changeHandler} placeholder='Email' />
          <input type="password" name='password' value={formData.password} onChange={changeHandler} placeholder='Password' />
        </div>
        <button onClick={() => {state === "Login" ? Login() : SignUp()}}>Continue</button>
        {state === "Sign Up" ? <p className='loginsignup-login'>Already have a account? <span onClick={()=>{setState("Login")}}>Login here</span></p> :
        <p className='loginsignup-login'>Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p> }
        
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=""/>
          <p>By Continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
