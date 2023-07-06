
import React from 'react'

import './App.css'
import { Home } from './pages/user/Home'
import { Route,BrowserRouter,Routes } from 'react-router-dom'

function App() {
  
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
       
    </>
  )
}

export default App
