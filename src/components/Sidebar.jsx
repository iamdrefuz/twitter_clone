import React from 'react'
import {FaTwitter} from 'react-icons/fa'
import {RiHome7Fill ,RiNotification2Line} from 'react-icons/ri'
import {FiMail}from 'react-icons/fi'
import {BiHash} from 'react-icons/bi'
import {BsBookmark} from 'react-icons/bs'
import {HiOutlineUser} from 'react-icons/hi'
import {CgMoreO} from 'react-icons/cg'
import {AiOutlineUnorderedList} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {BsPen} from 'react-icons/bs'
import { users } from '../data/user'
const Sidebar = () => {
  return (
  <div className='sidebar'>
 <div className='nav-container'>
 <a className='sidebar-logo' href='/' ><FaTwitter/></a>
    <nav className='navbar'>
       <Link className='navbar-link inHome' to='/home'><RiHome7Fill/><span>Home</span></Link>
       <Link className='navbar-link inExplore' to='/explore'><BiHash/><span>Explore</span></Link>
       <Link className='navbar-link inNoti' to='/notifications'><RiNotification2Line/> <span>Notifications</span></Link>
       <Link className='navbar-link inMess' to='messages'><FiMail/><span>Messages</span></Link>
       <Link className='navbar-link inBook' to='bookmarks' ><BsBookmark/><span> Bookmarks</span></Link>
       <Link className='navbar-link inList' to='lists'> <AiOutlineUnorderedList/><span>Lists</span></Link>
       <Link className='navbar-link inProfile' to={`/`}> <HiOutlineUser/><span>Profile</span></Link>
       <Link className='navbar-link inMore' to='more'><CgMoreO/><span>More</span></Link>
       <Link className='navbar-link tweet' href='/tweet'><BsPen className='pen-side'/><span>Tweet</span></Link>
    </nav>
 </div>
    </div>
  )
}

export default Sidebar