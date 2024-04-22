import React, { useState } from 'react'
import './Forms.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault()

    if (email.trim() === "") return toast.error("Please Enter  Email Address");
    if (password.trim() === "") return toast.error("Please Enter a Password");
    e.target.value = '';
    console.log({ mail: email, Pass: password });
  }
  // handle Show password
  const handleShowpass = () => {
    setShow(!show);
  }
  return (
    <div className='container-signin'>
      <ToastContainer theme='colored' />
      <div className="signin-wrapper-container">
        <h2>Login to  your account</h2>
        <form className='form-signin'>
          <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder='Email' required />
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type={show ? "text" : "password"}
            placeholder='Password' />
          <button onClick={handleSubmit} type="submit" className='login-btn'> Login</button>
          {
            password.trim() !== "" && (
              show ? <i onClick={handleShowpass} className="bi bi-eye-slash-fill hide-passed-icon"></i> :
                <i onClick={handleShowpass} className="bi bi-eye-fill show-passed-icon"></i>
            )
          }
        </form>
        <div className='signin-footer-form'>
          Don't have an account? {" "}
          <Link to={`/register`} >Sign Up</Link>
        </div>
      </div>
    </div>
  )
}
