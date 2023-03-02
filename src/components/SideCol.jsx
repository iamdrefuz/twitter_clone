import React from 'react'
import { tweets } from '../data/tweets'
import { users } from '../data/user'
import NewsCars from './news-card'
import {FiSearch} from 'react-icons/fi'
import User from './User'
const SideCol = (props) => {
  return (
    <div className='sideCol'>
       {
        props.active ? <div className='header'>
       <form>
       <button className='search' onClick={(item)=> item.preventDefault()}>
        <FiSearch/>
       </button>
            <input className='search-input' type='text' placeholder='Search Twitter'/>
        </form>
       </div> : ""
       }
        {
            props.side_happen ?
            <div className='advance-section'>
            <h2 className='title'>
                What`s happening
            </h2>
            <div className='hr'/>
            {tweets.slice(tweets.length-3, tweets.length).map((item)=>{
                return <NewsCars id={item.id} category={item.category} desc={item.desc} hash={item.hash} img={item.img}/>
            })}
            <a href='/' className='show-more'>show more</a>
        </div> : ""
        }
        <div className='who-follow'>
        <h2 className='title'>who follow</h2>
        
        <div className='hr'></div>
            {
                users.slice(users.length-3, users.length).map((item)=>{
                    return <User id={item.id} name={item.name} l_name={item.l_name} username={item.username} img ={item.img} confirm={item.confirm}/>
                })
            }
            <a href='/' className='show-more'>show more</a>
        </div>
    </div>
  )
}

export default SideCol