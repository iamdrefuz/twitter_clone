import React ,{useEffect} from 'react'
import SideCol from '../components/SideCol'
import { users } from '../data/user'
import {BiArrowBack} from 'react-icons/bi'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import {IoCalendarOutline} from  'react-icons/io5'
import Tweets from '../components/Tweets'
import {HiBadgeCheck} from 'react-icons/hi'
const Profile = () => {
    useEffect(()=>{
        document.title =  'Home / Profile'
        document.querySelector('.inHome').classList.remove('active')
        document.querySelector('.inExplore').classList.remove('active')
        document.querySelector('.inNoti').classList.remove('active')
        document.querySelector('.inMess').classList.remove('active')
        document.querySelector('.inBook').classList.remove('active')
        document.querySelector('.inList').classList.remove('active')
        document.querySelector('.inProfile').classList.add('active')
        document.querySelector('.inMore').classList.remove('active')
      })
  return (
    <>
      <div className='user-profile'>
      
        <nav className='prof_nav'>
        <Link to='/home'><BiArrowBack/></Link>
          {users[0].name}
        </nav>
        <div className='main_section'>
          <div className='user-placeholder'>
            <img className='placeholder' src={users[0].plceholder}/>
            <div className='img-edit'><div className='user-img'><img src={users[0].img}/></div>
            <div className='edit_btn'>
              <button >Edit profile</button>
            </div>
            </div>
            
          </div>
          <div className='user-info'>
              <div className='user-full-name'>{users[0].name} {users[0].l_name} {users[0].confirm ?  <HiBadgeCheck className='check'/> : ''}</div>
              <Link to={`/`} className='username'>@{users[0].username}</Link>
              <div className='bio'>{users[0].bio}</div>
              <div className='joined'><IoCalendarOutline/> Joined { users[0].joined}</div>
              <div className='actives'>
                <Link className='follow-link'> <span>{users[0].following}</span> following</Link>
                <Link className='follow-link'><span>{users[0].followers}</span> followers</Link>
              </div>
            </div>

        </div>
        <div className='actions'>
          <div className='actions_btns'>
            <Link to='/' className='actions_btn tweets'>Tweets</Link>
            <Link to='replies' className='actions_btn replies'>Tweets & replies</Link>
            <Link to='media' className='actions_btn media'>Media</Link>
            <Link to='likes' className='actions_btn likes'>Likes</Link>
          </div>           
          <div className='activ-content'>
          <Outlet/>
          </div>
        </div>              
             </div>
<div>

</div>
      {/* !!!!! right side bar */}
      <SideCol/>
    </>
  )
}

export default Profile