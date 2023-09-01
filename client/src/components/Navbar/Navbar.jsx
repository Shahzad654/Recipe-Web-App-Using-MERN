import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

const Navbar = ({ isLoggedIn }) => {
  return (
    <>
    <div className="navbar_container">
        <h1>Recipe Finder</h1>
        <div className="nav_menu">
            
                <Link to='/' className='nav_link'>Home</Link>
                <Link to='/createrecipe' className='nav_link'>Create Recipe</Link>
                {isLoggedIn ? (<button>Logout</button>) : (<Link to='/login' className='nav_link'>Login</Link>) }
                {/* <Link to='/login' className='nav_link'>Login</Link> */}
                <Link to='/signup' className='nav_link'>SingUp</Link>

                        
                
            

        </div>

    </div>
    </>
  )
}

export default Navbar