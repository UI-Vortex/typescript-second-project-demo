import React, { FC, useState } from 'react'
import './componet-styles/register.css'
import ReLaptop from '../assets/ASUS-ZeenBook-UX482EAR-EVO551-removebg-preview 1.png'
import arrowBack from '../assets/Arrow back ios.png'
import EnhaRegis from '../assets/ENHA COMPUTER.png'
import { Link, useNavigate } from 'react-router-dom'
const Register = () => {

  const [regisEmail, setRegisEmail] = useState<string>('')
  const [regisPass, setRegisPass] = useState<string>('')

  let navigate = useNavigate()

  const handleRegister = () => {
    if (regisEmail === '' || regisPass === '') {
      alert('fill the form')
    } else {
      localStorage.setItem('regisEmail', regisEmail)
      localStorage.setItem('regisPass', regisPass)
      alert('Registration Successful ✅')

      navigate('/Home/shop')
    }
  }

  return (
    <div className='register-container'>
      <Link to='/'>
        <img className='regis-arrowback' src={arrowBack} alt="" />
      </Link>
      <div className="register-layout">
        <img src={EnhaRegis} alt="title" />
        <img className='re-Laptop' src={ReLaptop} alt="laptop" />
        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegisEmail(e.target.value)} className='regis-email' type="email" placeholder='Email' />
        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegisPass(e.target.value)} className='regis-pass' type="text" placeholder='Password' />
        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRegisPass(e.target.value)} className='regis-pass' type="text" placeholder='Password' />
        <div className="regis-button">
          <button onClick={() => handleRegister()} className="btn-regis">Register</button>
        </div>
      </div>
    </div>
  )
}

export default Register
