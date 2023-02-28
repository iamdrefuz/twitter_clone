import React, {useEffect} from 'react'

const Media = () => {
    useEffect(()=>{
        document.querySelector('.tweets').classList.remove('active')
        document.querySelector('.media').classList.add('active')
        document.querySelector('.likes').classList.remove('active')
        document.querySelector('.replies').classList.remove('active')
     },[])
  return (
    <div>Media</div>
  )
}

export default Media