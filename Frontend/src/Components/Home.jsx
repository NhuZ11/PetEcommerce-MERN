import React from 'react'
import Hero from './Hero'
import Category from './Homepage/Category'
import Footer from './Footer'
import HeroSlider from './Homepage/HeroSlider'
import FoodProduct from './Product/FoodProduct'

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <Category />
      <FoodProduct />
      <Footer />
    </div>
  )
}

export default Home
