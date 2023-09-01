import { React } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Create from './components/CreateRecipe/Create'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'


function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/createrecipe' element={<Create/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Register/>}/>
        
    </Routes>
      
    </>
  )
}

export default App
