import React, {useEffect} from 'react'
import { mytweets } from '../data/mytweet'
import Post from './Post'

const Tweets = () => {
    useEffect(()=>{
        document.querySelector('.tweets').classList.add('active')
        document.querySelector('.media').classList.remove('active')
        document.querySelector('.likes').classList.remove('active')
        document.querySelector('.replies').classList.remove('active')
     },[])
  return (
    <div className='tweets'>{
      mytweets.slice(0).reverse().map((item)=>{
        return <Post id = {item.id} name={item.name} l_name={item.l_name} username={item.username} confirm={item.confirm} content={item.content} media={item.media} comment={item.comment} retween={item.retween} like={item.like} view={item.view} shre={item.share} user_img={item.user_img}/>
      })
    }</div>
    
  )
}

export default Tweets