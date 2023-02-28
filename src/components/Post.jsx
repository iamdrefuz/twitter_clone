import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaRegComment} from 'react-icons/fa'
import {AiOutlineRetweet ,AiOutlineHeart} from 'react-icons/ai'
import {HiBadgeCheck} from 'react-icons/hi'
import {IoIosStats} from "react-icons/io"
import {RxShare2} from 'react-icons/rx'
 export let user_id = 0
 const Post = (props) => {
 
  return (
    <div className='main-post'>
          <div className='author-img'>
           <Link  to={`/${props.username}`}> <img src={props.user_img}/></Link>
          </div>
          <div className='post-content'>
            <Link to={`/${props.username}`} className='author-fullName'>
           {props.name} {props.l_name} {props.confirm ?  <HiBadgeCheck className='check'/> : ''}
            <Link  to={`/${props.username}`} >@{props.username}</Link>
            </Link>
            <div className='post-title'>{props.content}</div>
            <div className='post-media'><a href='/'><img src={props.media}/></a></div>
            <div className='actions'>
                <Link to='/' className='comment'><FaRegComment/>{props.comment}</Link>
                <Link to='/' className='retween'><AiOutlineRetweet/>{props.retween}</Link>
                <Link to='/' className='like'><AiOutlineHeart/>{props.like}</Link>
                <Link to='/' className='view'><IoIosStats/>{props.view}</Link>
                <Link to='/' className='share'><RxShare2/>{props.share}</Link>
            </div>
          </div>
        </div>
  )
}

export default Post