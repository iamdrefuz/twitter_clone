import React, { useEffect } from 'react'

const Replies = () => {
    useEffect(()=>{
       document.querySelector('.tweets').classList.remove('active')
       document.querySelector('.media').classList.remove('active')
       document.querySelector('.likes').classList.remove('active')
       document.querySelector('.replies').classList.add('active')
    },[])
  return (
    <div>Replies</div>
  )
}

export default Replies