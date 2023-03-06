import React, {useEffect, useState} from 'react'
import SideCol from '../components/SideCol'
import { FiSearch } from 'react-icons/fi'
import {AiOutlineSetting} from 'react-icons/ai'
import Explore_trends from '../components/Explore_trends'
import { trending } from '../data/trending'
import Post from '../components/Post'
import { posts } from '../data/posts'
import {BsFillMoonStarsFill, BsSun} from 'react-icons/bs'

const Explore = () => {
  useEffect(()=>{
    document.title =  'Home / Explore'
    document.querySelector('.inHome').classList.remove('active')
    document.querySelector('.inExplore').classList.add('active')
    document.querySelector('.inNoti').classList.remove('active')
    document.querySelector('.inMess').classList.remove('active')
    document.querySelector('.inBook').classList.remove('active')
    document.querySelector('.inList').classList.remove('active')
    document.querySelector('.inProfile').classList.remove('active')
    document.querySelector('.inMore').classList.remove('active')
    document.querySelector('.fHome').classList.remove('active')
    document.querySelector('.fExp').classList.add('active')
    document.querySelector('.fNoti').classList.remove('active')
    document.querySelector('.fMess').classList.remove('active')
  },[])

      const [dark,setDark] = useState(false)
      const [modal,setModal] = useState(false)
      dark ? document.body.classList.add('dark') : ''

  return (
    <>
    
      <div  className={`overview ${modal? 'active' : ''}`}>
      <div onClick={()=>setModal(false)}className='background'></div>
      <div className='setting-section'>
        <div className='dark' onClick={()=>{setDark(!dark)}}>{dark ? <BsSun className='sun'/> : <BsFillMoonStarsFill className='moon'/>} {dark ? document.body.classList.add('dark') : document.body.classList.remove('dark')}{dark? 'light' : 'dark'} mode</div>
        
      </div>
    </div>
      <div className='explore active'>
      <div className='search-cont'>
      <form>
       <button className='search-btn' onClick={(item)=> item.preventDefault()}>
        <FiSearch/>
       </button>
            <input className='search-input' type='text' placeholder='Search Twitter'/>
        </form>
        <div onClick={()=>setModal(!modal)} className='setting'><AiOutlineSetting/></div>
      </div>
      <div className='ex_main-section'>
        {
          trending.slice(0,5).map((item)=>{
            return(
            <Explore_trends id={item.id} category={item.category} title={item.title} view={item.view}/>
          )})
        }
        {
          posts.slice(0).reverse().map((item)=>{
           return <Post id = {item.id} name={item.name} l_name={item.l_name} username={item.username} confirm={item.confirm} content={item.content} media={item.media} comment={item.comment} retween={item.retween} like={item.like} view={item.view} shre={item.share} user_img={item.user_img}/>
          })
        }
      </div>
      </div>
      <SideCol active={false} side_happen={false}/>
    </>
  )
  
}

export default Explore