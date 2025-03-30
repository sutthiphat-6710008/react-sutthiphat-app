import React from 'react'
import { CssBaseline } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home' 
import AboutUI from './views/AboutUI'
import ContacUI from './views/ContacUI'
import LoginUI from './views/LoginUI'
function App() {
  return (
    <div>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
        <Route path='/'element={<Home/>}/>
          <Route path='/Login' element={<LoginUI />}/>
          <Route path='/Contac' element={<ContacUI />}/>
          <Route path='/About' element={<AboutUI />}/>

        
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App