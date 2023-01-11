import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { useState } from 'react'
import MailList from './components/MailList'
import { Route ,Routes  } from 'react-router'
import MailPage from './components/MailPage'
import { useSelector } from 'react-redux'
import Login from './auth/Login'
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from './FireBase'
function App() {
 const mailSlice=useSelector(state=>state.mail.value)
const [user,loading] = useAuthState(auth)
  const [toggleBar,setToggleBar]=useState(false)
  return (
    <div className="App bg-gray-100 h-[100vh] overflow-hidden">
      {!user && <Login/>}

      <Header user={user} toggleBar={toggleBar} setToggleBar={setToggleBar} />
      <div className='flex'>
      <Sidebar toggleBar={toggleBar} setToggleBar={setToggleBar}/>
      <Routes>
        
        <Route path='/' element={<MailList/>}/>
        <Route path='/MailPage' element={<MailPage/>}/>
      </Routes>
      </div>
      
    </div>
  )
}

export default App
