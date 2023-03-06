import React ,{useEffect} from 'react'
import SideCol from '../components/SideCol'
import { users } from '../data/user'
import {BiArrowBack} from 'react-icons/bi'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import {IoCalendarOutline} from  'react-icons/io5'
import Tweets from '../components/Tweets'
import {HiBadgeCheck} from 'react-icons/hi'
import { useState } from 'react'
const Profile = () => {
    useEffect(()=>{
        document.title =  'Profile / Twitter'
        document.querySelector('.inHome').classList.remove('active')
        document.querySelector('.inExplore').classList.remove('active')
        document.querySelector('.inNoti').classList.remove('active')
        document.querySelector('.inMess').classList.remove('active')
        document.querySelector('.inBook').classList.remove('active')
        document.querySelector('.inList').classList.remove('active')
        document.querySelector('.inProfile').classList.add('active')
        document.querySelector('.inMore').classList.remove('active')
      },[])
  
      const [modal,setModal] =useState(false)
      const [pic_modal,setPicModal] =useState(false)
      const [value, setValue] = useState(users[0].name)
      const [lastname, setLastName] = useState(users[0].l_name)

      const handleChange = event => {
       setValue(event.target.value)
       };
       const lastName = event=>{
        setLastName(event.target.value)
       }
  return (

    <>
     <div className={`profile-pic ${pic_modal ? 'active' : ''}`}>
     <div onClick={()=>setPicModal(false)} className='background'>
      <div className='img-section'><img onClick={()=> setPicModal} className='img' src={users[0].img}/></div>
     </div>
    </div>
    <div className={`edit-over ${modal ? 'active' : ''}`}>
    <div onClick={()=>setModal(false)} className='background'></div>
    <div className='setting-section'>
   <form>
   <input   type="text" id="fistname" name="firstname" onChange={handleChange} value={value}/> 
   <input   type="text" id="lastname" name="lastname" onChange={lastName} value={lastname}/> 
    <button onClick={(e)=>{
      setModal(false);
      e.preventDefault()
    }}>click</button> 
   </form>     
      </div>
    </div>
      <div className='user-profile'>
      
        <nav className='prof_nav'>
        <Link to='/home'><BiArrowBack/></Link>
          {value}
        </nav>
        <div className='main_section'>
          <div className='user-placeholder'>
            <img className='placeholder' src={users[0].plceholder}/>
            <div className='img-edit'><div className='user-img' onClick={()=> setPicModal(!pic_modal)}><img src={users[0].img}/></div>
            <div className='edit_btn'>
              <button onClick={()=>setModal(!modal)}>Edit profile</button>
            </div>
            </div>
            
          </div>
          <div className='user-info'>
              <div className='user-full-name'>{value} {lastname} {users[0].confirm ?  <HiBadgeCheck className='check'/> : ''}</div>
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
      <SideCol active={true}  side_happen={true}/>
    </>
  )
}

export default Profile