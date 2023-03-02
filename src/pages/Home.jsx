import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import {FiImage } from 'react-icons/fi'
import {AiOutlineGif ,AiOutlineUnorderedList} from 'react-icons/ai'
import {CiFaceSmile} from 'react-icons/ci'
import {BsCalendarDate} from 'react-icons/bs'
import {CiLocationOn} from 'react-icons/ci'
import Post from '../components/Post'
import { posts } from '../data/posts'
import {Link} from 'react-router-dom'
import SideCol from '../components/SideCol'
import { users } from '../data/user'
export let username = 'drefuz'

const Home = () => {
  useEffect(()=>{
    document.title =  'Home / Twitter'
    document.querySelector('.inHome').classList.add('active')
    document.querySelector('.inExplore').classList.remove('active')
    document.querySelector('.inNoti').classList.remove('active')
    document.querySelector('.inMess').classList.remove('active')
    document.querySelector('.inBook').classList.remove('active')
    document.querySelector('.inList').classList.remove('active')
    document.querySelector('.inProfile').classList.remove('active')
    document.querySelector('.inMore').classList.remove('active')
    document.querySelector('.fHome').classList.add('active')
    document.querySelector('.fExp').classList.remove('active')
    document.querySelector('.fNoti').classList.remove('active')
    document.querySelector('.fMess').classList.remove('active')
  })
  return (
  <>
     <div className='home'>
      <Navbar/>
     <section id='header'>
     <header className='home-header'>
          <Link to='/' className='header-img'><img src='https://api.lorem.space/image/face?1'/></Link>
          <div className='header-main'>
            <input className='header-input' placeholder='What`s happening ?'/>
            <div className='header-actions'>
              <div className='group'>
              <button className='action-btn'> <FiImage/></button>
              <button className='action-btn'> <AiOutlineGif/></button>
              <button className='action-btn'> <AiOutlineUnorderedList/></button>
              <button className='action-btn'> <CiFaceSmile/></button>
              <button className='action-btn'> <BsCalendarDate/></button>
              <button className='action-btn'> <CiLocationOn/></button>
              </div>
              <button className='send-btn'>Tweet</button>
            </div>
          </div>
          
      </header>
     </section>
      <div className='hr'></div>
      <main className='main-action'>
      {posts.slice(0).reverse().map((item)=>{
        return <Post id = {item.id} name={item.name} l_name={item.l_name} username={item.username} confirm={item.confirm} content={item.content} media={item.media} comment={item.comment} retween={item.retween} like={item.like} view={item.view} shre={item.share} user_img={item.user_img}/>
      })}
      </main>
   </div>
   <SideCol active={true}  side_happen={true}/>
  </>
  )
}

export default Home