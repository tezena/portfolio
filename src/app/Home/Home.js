import React from 'react'
import HeroSecion from './components/HeroSecion'
import AboutSection from './components/AboutSection'
import ProjectDisplay from './components/ProjectDisplay'

const Home = () => {
  return (
      <div className='h-full'>
      <HeroSecion />
      <AboutSection />
      <ProjectDisplay/>
    </div>
  )
}

export default Home
