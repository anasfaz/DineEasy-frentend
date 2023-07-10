
import React from 'react'


import { Home } from './pages/user/Home'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
// import { Login } from './pages/user/Login'
import LoginPhone from './pages/user/LoginPhone'

function App() {
  
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
         {/* <Route path='/login' element={<Login/>}/> */}
          <Route path='/login' element={<LoginPhone />} />
          
      </Routes>
      </BrowserRouter>
       
    </>
  )
}

export default App
