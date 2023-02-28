import React, {useEffect} from 'react'

const More = () => {
    useEffect(()=>{
        document.title =  'Home / Twitter'
        document.querySelector('.inHome').classList.remove('active')
        document.querySelector('.inExplore').classList.remove('active')
        document.querySelector('.inNoti').classList.remove('active')
        document.querySelector('.inMess').classList.remove('active')
        document.querySelector('.inBook').classList.remove('active')
        document.querySelector('.inList').classList.remove('active')
        document.querySelector('.inProfile').classList.remove('active')
        document.querySelector('.inMore').classList.add('active')
      })
  return (
    <div>More</div>
  )
}

export default More