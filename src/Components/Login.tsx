import React, { FC, useState } from 'react'
import './componet-styles/login.css'
import EnhaComputer from '../assets/ENHA COMPUTER.png'
import laptop from '../assets/ASUS-ZeenBook-UX482EAR-EVO551-removebg-preview 1.png'
import { Link, useNavigate } from 'react-router-dom'

const Login: FC = () => {

  const [loginEmail, setLoginEmail] = useState<string>('')
  const [loginPass, setLoginPass] = useState<string>('')

  let regisEmails = localStorage.getItem('regisEmail')
  let regisPassa = localStorage.getItem('regisPass')

  let navigate = useNavigate()

  const handleLogin = () => {
    if (loginEmail === regisEmails || loginPass === regisPassa) {
      navigate('/Home/shop')
    } else {
      alert('Your email or password is invalid')
    }
  }


  return (
    <div className='Login-container'>
      <div className="login-layout">
        <img className='Login-logo' src={EnhaComputer} alt="computer" />
        <img className='login-laptop' src={laptop} alt="laptop" />
        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoginEmail(e.target.value)} type="text" className="login-email" placeholder='Email' />
        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoginPass(e.target.value)} type="text" className="login-pass" placeholder='Password' />
        <div className="login-buttons">
          <button onClick={() => handleLogin()} className="login-login"><Link style={{textDecoration: 'none', color: 'white'}} to=''>Login </Link></button>
          <Link to='/register'> <button className="login-register">Register</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Login
