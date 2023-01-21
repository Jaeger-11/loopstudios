import { useState } from 'react'
import './App.css'
import Creations from './components/Creations'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {

  return (
    <div>
      <Header/>
      <Hero/>
      <Creations/>
      <Footer/>
      {/* <h3 className='text-3xl'>Jaeger-11 Boilerplate</h3> */}
    </div>
  )
}

export default App
