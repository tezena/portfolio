import React from 'react'
import HeroSecion from './components/HeroSecion'
import AboutSection from './components/AboutSection'
import ServiceDisplay from './components/ServiceDisplay'
import WorkWithDisplay from './components/WorkWithDisplay'
import ProjectDisplay from './components/ProjectDisplay'

const Home = () => {
  return (
      <div className=' min-h-full block'>
      <HeroSecion />
      <AboutSection />
      <ServiceDisplay />
      <WorkWithDisplay />
      <ProjectDisplay/>
    </div>
  )
}

export default Home
