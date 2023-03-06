import React, { createContext, useContext, useState } from 'react'
import Home, { username } from './pages/Home'
import Explore from './pages/Explore'
import Sidebar from './components/Sidebar'
import SideCol from './components/SideCol'
import {Routes, Route, Outlet} from 'react-router-dom'
import './../styles/index.min.css'
import Bookmarks from './pages/Bookmarks'
import Lists from './pages/Lists'
import Messages from './pages/Messages'
import Profile from './pages/Profile'
import Notification from './pages/Notification'
import More from './pages/More'
import { users } from './data/user'
import { user_id } from './components/Post'
import Tweets from './components/Tweets'
import Replies from './components/Replies'
import Media from './components/Media'
import Likes from './components/Likes'
import Footer from './components/Footer'
const App = () => {
  const ThemeContext = createContext(false)

  const theme = useContext(ThemeContext)
  return (
    <>
   <ThemeContext.Provider value={theme}>
   <div className='container main-content'>
  
  <Sidebar/>
  <Routes>

     <Route  path='/home' element={<Home />}/>
     <Route path='/explore' element={<Explore />}/>
     <Route path='/bookmarks' element={<Bookmarks />}/>
     <Route path='/lists' element={<Lists/>} />
     <Route path='/messages' element={<Messages />}/>
     <Route path='/notifications' element={<Notification />}/>
     <Route path='/' element={<Profile />}>
     <Route index path={`/`} element={<Tweets/>}></Route>
     <Route path={`/replies`} element={<Replies/>}></Route>
     <Route path={`/media`} element={<Media/>}></Route>
     <Route path={`/likes`} element={<Likes/>}></Route>
     </Route>
     
     <Route path='/more' element={<More/>}/>
  </Routes>

</div>
<Footer/>
   </ThemeContext.Provider>
    </>
  )
}

export default App