import React, {useEffect} from 'react'
import SideCol from '../components/SideCol'

const Explore = () => {
  useEffect(()=>{
    document.title =  'Home / Explore'
    document.querySelector('.inHome').classList.remove('active')
    document.querySelector('.inExplore').classList.add('active')
    document.querySelector('.inNoti').classList.remove('active')
    document.querySelector('.inMess').classList.remove('active')
    document.querySelector('.inBook').classList.remove('active')
    document.querySelector('.inList').classList.remove('active')
    document.querySelector('.inProfile').classList.remove('active')
    document.querySelector('.inMore').classList.remove('active')
    document.querySelector('.fHome').classList.remove('active')
        document.querySelector('.fExp').classList.add('active')
        document.querySelector('.fNoti').classList.remove('active')
        document.querySelector('.fMess').classList.remove('active')
  })
  return (
    <>
      <div>
        explore
      </div>
      <SideCol/>
    </>
  )
}

export default Explore