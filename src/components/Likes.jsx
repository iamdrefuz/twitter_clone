import React , {useEffect} from 'react'

const Likes = () => {
    useEffect(()=>{
        document.querySelector('.tweets').classList.remove('active')
        document.querySelector('.media').classList.remove('active')
        document.querySelector('.likes').classList.add('active')
        document.querySelector('.replies').classList.remove('active')
     },[])
  return (
    <div>Likes</div>
  )
}

export default Likes