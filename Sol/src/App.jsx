import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import { PropertyPage } from './PropertyPage/PropertyPage'
import { MainPage } from './MainPage/MainPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/property/*' element={<PropertyPage/>}/>
    </Routes>
  )
}

export default App
