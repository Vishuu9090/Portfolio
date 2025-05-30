import React from 'react'
import Navbar  from "./components/Navbar"
import Journey from "./components/Journey"
import Tech from "./components/Tech"
import Skills from "./components/Skills"
import Portfolio from './components/Portfolio'
import Project from './components/Project'  
import Project3 from './components/Project3'
import Experience from './components/Experience'
import About from './components/About'
export default function App() {
  return (
    <div className=' bg-gray-700 '>
      <Navbar/>
      <Journey/>
      <Tech/>
      <Skills/>
      <Portfolio/>
      <Project/>
      <Project3/>
      <Experience/>
      <About/>
    </div>
  )
}
