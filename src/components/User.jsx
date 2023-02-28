import React from 'react'
import {HiBadgeCheck} from 'react-icons/hi'
const User = (props) => {
  return (
   <>
     <div className='user'>
            <div className='user-img'><img src={props.img}/></div>
            <div className='user-info'>
                <div className='userFullName'>{props.name} {props.l_name} {props.confirm ? <HiBadgeCheck className='check'/> : '' }</div>
                <a href='/' className='username'>@{props.username}</a>
            </div>
            <a className='follow' href='/'>Follow</a>
            
            </div>
            <div className='hr'/>
   </>
            
  )
}

export default User