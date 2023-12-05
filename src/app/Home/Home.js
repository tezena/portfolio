import React from 'react'
import HeroSecion from './components/HeroSecion'
import AboutSection from './components/AboutSection'

const Home = () => {
  return (
      <div className='h-full'>
      <HeroSecion />
      <AboutSection />
      <div className='h-[400px] bg-black'>

      </div>
      
    </div>
  )
}

export default Home
