import React from 'react'
import Hero from './Hero'
import Category from './Homepage/Category'
import Footer from './Footer'
import HeroSlider from './Homepage/HeroSlider'

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <Category />
      <Footer />
    </div>
  )
}

export default Home
