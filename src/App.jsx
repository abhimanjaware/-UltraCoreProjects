import React from 'react'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Services from './Components/Services'
import Footer from './Components/Footer'
import Testimonials from './Components/Testimonials'
import WhatsappButton from './WhatsappButton'


function App() {
  return (
    <div>
      <WhatsappButton/>
      <Hero/>
      <Navbar/>
      <About/>
      <Services/>
      <Testimonials/>
      <Footer/>
        
      

    </div>
  )
}

export default App
