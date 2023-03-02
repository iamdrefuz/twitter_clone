import React, {useEffect} from 'react'
import SideCol from '../components/SideCol'

const Notification = () => {
    useEffect(()=>{
        document.title =  'Home / Notifications'
        document.querySelector('.inHome').classList.remove('active')
        document.querySelector('.inExplore').classList.remove('active')
        document.querySelector('.inNoti').classList.add('active')
        document.querySelector('.inMess').classList.remove('active')
        document.querySelector('.inBook').classList.remove('active')
        document.querySelector('.inList').classList.remove('active')
        document.querySelector('.inProfile').classList.remove('active')
        document.querySelector('.inMore').classList.remove('active')
        document.querySelector('.fHome').classList.remove('active')
        document.querySelector('.fExp').classList.remove('active')
        document.querySelector('.fNoti').classList.add('active')
        document.querySelector('.fMess').classList.remove('active')
      })
  return (
    <>
      <div>Notification</div>
      <SideCol active={true}  side_happen={false}/>
    </>
  )
}

export default Notification