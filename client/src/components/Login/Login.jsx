import {React, useState }from 'react'
import './login.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()
  
  const LoginUser = async () => {
    try {
       axios.post('http://localhost:3001/auth/login', {
        username,
        password
      }).then(
      (response)=>{
        if(response.data=='Success'){
            navigate('/')
          
        }
        else{
          alert('Information Incorrect')
        }
      }
      )
      
    } 

    catch (error) {
      console.log(error)
 
    }
}

  return (
    <>
    <Navbar isLoggedIn={isLoggedIn}/>
    <div className="form_container">
        <div className="login_form">
    <form action="">
        <h2>Login</h2>
        <label >Username</label>
        <br/>
        <input type="text" placeholder='username' value={username} onChange={(e)=>{
          setUsername(e.target.value)
        }} />
        <br/>
        <label>Password</label>
        <br/>
        <input type="password" placeholder='password' value={password}  onChange={(e)=>{
          setPassword(e.target.value)
        }} />
        <br/>
        <button type='button' onClick={LoginUser}>Login</button>
      </form>
      </div>
      </div>

    </>
  )
}

export default Login