import React, {useEffect} from 'react'
import SideCol from '../components/SideCol'

const Lists = () => {
    useEffect(()=>{
        document.title =  'Home / Lists'
        document.querySelector('.inHome').classList.remove('active')
        document.querySelector('.inExplore').classList.remove('active')
        document.querySelector('.inNoti').classList.remove('active')
        document.querySelector('.inMess').classList.remove('active')
        document.querySelector('.inBook').classList.remove('active')
        document.querySelector('.inList').classList.add('active')
        document.querySelector('.inProfile').classList.remove('active')
        document.querySelector('.inMore').classList.remove('active')
      })
  return (
    <>
      <div>Notification</div>
      <SideCol/>
    </>
  )
}

export default Lists