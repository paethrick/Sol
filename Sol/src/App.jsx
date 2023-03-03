import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import { FlatPage } from './FlatPage/FlatPage'
import { MainPage } from './MainPage/MainPage'

function App() {
  const [flat, setFlat] = useState([{
    'id':1,
    'owner':{
      'userId':1,
      'name':'Philip Philipson',
      'description':"I'm Philip"
    },
    'apartment':{
      'name':'My apartment',
      'adress':'Frist Street 1',
      'price':10000,
      'description':'Nice place',
    }
  }])

  return (
    <Routes>
      <Route path='flat' element={<FlatPage flat={flat[0]}/>}/>
      <Route path='/' element={<MainPage flat={flat[0]}/>}/>
    </Routes>
  )
}

export default App
