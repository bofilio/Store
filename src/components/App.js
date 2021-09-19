
import React from 'react'
import Auth from './Auth'
import Signup from './AuthBox/SignUp'
import { useSelector } from 'react-redux'
import TemporaryDrawer from './NavBox/Drawer'
import NavBare from './NavBox/NavBar'
import Home from './Pages/Home'
const App = () => {

 
  return (
    <div style={{height:"100%"}}>
    <Home/>
    </div>
  )
}

export default App
