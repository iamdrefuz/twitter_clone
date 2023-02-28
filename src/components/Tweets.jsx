import React, {useEffect} from 'react'

const Tweets = () => {
    useEffect(()=>{
        document.querySelector('.tweets').classList.add('active')
        document.querySelector('.media').classList.remove('active')
        document.querySelector('.likes').classList.remove('active')
        document.querySelector('.replies').classList.remove('active')
     },[])
  return (
    <div>Tweets

    </div>
    
  )
}

export default Tweets