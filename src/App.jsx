import { useState } from 'react'

import './App.css'
import Header from './layouts/Header'
import Main from './components/Main'
import HeroSection from './components/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <HeroSection/>
    <Main/>
    </>
  )
}

export default App
