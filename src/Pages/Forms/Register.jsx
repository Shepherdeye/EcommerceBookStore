import React, { useState } from 'react'
import './Forms.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, SetUsername] = useState('');

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();


    if (username.trim() === "") return toast.error("Please Enter a username");
    if (email.trim() === "") return toast.error("Please Enter  Email Address");
    if (password.trim() === "") return toast.error("Please Enter a Password");


    console.log({ mail: email, Pass: password, user: username });
  }


  return (
    <div className='container-signin'>
      <ToastContainer theme='colored' />
      <div className="signin-wrapper-container">
        <h2>Create your account</h2>
        <form className='form-signin'>
          <input value={username} onChange={e => SetUsername(e.target.value)} type="text" placeholder='Email' required />
          <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder='Email' />
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder='Password' />
          <button onClick={handleSubmit} type="submit" className='login-btn'> SignUp</button>

        </form>
        <div className='signin-footer-form'>
          Already have an account? {" "}
          <Link to={`/signin`} >Sign in</Link>
        </div>
      </div>
    </div>
  )
}
