import React from 'react'
import { Link } from 'react-router-dom'
import { users } from '../data/user'
import {FaTwitter} from 'react-icons/fa'
const Navbar = () => {
  return (
    <>
        <nav className='main-navbar'>
         <div className='nav-cont'>
           <div className='header-text'>Home</div>
           <Link to='/' className='user-img'><img src={users[0].img}/></Link>
           <Link to='/home' className='logo'><FaTwitter/></Link>
         </div>
          <div className='navbar-menu'>
              <Link className='navbar-link active' to='/home'>For You</Link>
              <Link className='navbar-link' to='/home'>Following</Link>
          </div>
        </nav>
        <div className='hr'></div>
    </>
  )
}

export default Navbar