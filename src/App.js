import React from 'react'
import './App.css'
import Header from './components/Header/header'
import { Button } from 'react-bootstrap'
import MainScreen from './components/Main/MainScreen'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Setalaram from './components/Main/set_alarm/Setalaram'


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MainScreen />} />
          <Route path='/setalaram' element={<Setalaram />} />
        </Routes>
        <Footer />
      </BrowserRouter>




    </div>
  )
}

export default App