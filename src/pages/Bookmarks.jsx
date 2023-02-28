import React , {useEffect} from 'react'
import SideCol from '../components/SideCol'

const Bookmarks = () => {
    useEffect(()=>{
        document.title =  'Home / Bookmarks'
        document.querySelector('.inHome').classList.remove('active')
        document.querySelector('.inExplore').classList.remove('active')
        document.querySelector('.inNoti').classList.remove('active')
        document.querySelector('.inMess').classList.remove('active')
        document.querySelector('.inBook').classList.add('active')
        document.querySelector('.inList').classList.remove('active')
        document.querySelector('.inProfile').classList.remove('active')
        document.querySelector('.inMore').classList.remove('active')
      })
  return (
   <>
   <div>Bookmarks</div>
    <SideCol/>
   </>
    
  )
}

export default Bookmarks