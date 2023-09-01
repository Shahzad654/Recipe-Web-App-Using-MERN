import {React, useState} from 'react'
import './register.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const CreateUser = ()=>{
    axios.post('http://localhost:3001/auth/reg', {
      username,
      password
    }).then(()=>{
      alert('User Registered Successfully!')
      navigate("/")

    }
        
    )
}
  
  return (
    <>
    <Navbar/>
    <div className="form_container">
        <div className="login_form">
        <form action="">
        <h2>SignUp</h2>
        <label >Username</label>
        <br/>
        <input type="text" placeholder='username' value={username} onChange={(e)=>{
          setUsername(e.target.value)
        }} />
        <br/>
        <label>Password</label>
        <br/>
        <input type="password" placeholder='password' value={password} onChange={(e)=>{
          setPassword(e.target.value)
        }} />
        <br/>
        <button type='button' onClick={CreateUser}>SignUp</button>
      </form>

        </div>

        </div>

    </>
  )
}

export default Register