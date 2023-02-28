import React , {useEffect}from 'react'
import SideCol from '../components/SideCol'

const Messages = () => {
    useEffect(()=>{
        document.title =  'Home / Messages'
        document.querySelector('.inHome').classList.remove('active')
        document.querySelector('.inExplore').classList.remove('active')
        document.querySelector('.inNoti').classList.remove('active')
        document.querySelector('.inMess').classList.add('active')
        document.querySelector('.inBook').classList.remove('active')
        document.querySelector('.inList').classList.remove('active')
        document.querySelector('.inProfile').classList.remove('active')
        document.querySelector('.inMore').classList.remove('active')
      })
  return (
    <>
    <div>Messages</div>
    <SideCol/>
  </>
  )
}

export default Messages