import React from 'react'
import {Link} from 'react-router-dom'
import {HiOutlineSearch} from 'react-icons/hi'
import {RiHome7Fill ,RiNotification2Line} from 'react-icons/ri'
import {FiMail} from 'react-icons/fi'
import {BsPen} from 'react-icons/bs'
const Footer = () => {
  return (
    <>
    <div className='pencil'>
        <BsPen/>
    </div>
        <div className='footer'>
        <Link to='/home' className='footer-link fHome '><RiHome7Fill/></Link>
        <Link to='explore' className='footer-link fExp'><HiOutlineSearch/></Link>
        <Link to='notifications' className='footer-link fNoti'><RiNotification2Line/></Link>
        <Link to='messages' className='footer-link fMess'><FiMail/></Link>
    </div>
    </>
  )
}

export default Footer