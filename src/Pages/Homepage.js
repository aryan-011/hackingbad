import React from 'react'
import Banner from '../components/Banner/Banner'
import Header from '../components/Header'
import GameDev from '../components/HomePageContent/GameDev'
import QuoteEcosystem from '../components/HomePageContent/QuoteEcosystem'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Application from '../components/HomePageContent/Application'
const Homepage = () => {
  
  return (
    <>
    
    <Banner/>
    <GameDev/>
    <Application/>
    <QuoteEcosystem/>
    <Footer/>
    </>
  )
}

export default Homepage