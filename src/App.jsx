import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Notes from './pages/Notes'
import { useWidth } from './context/widthContext'
import './App.css'

function App() {
  const screenWidth = useWidth();
  if(screenWidth>=675 && screenWidth<1085) {
    return <div className='screen-error'>
      Pocket Notes is not available for this screen size.
    </div>
  }
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/notes/:groupId' element={<Notes/>}/>
    </Routes>
  )
}

export default App