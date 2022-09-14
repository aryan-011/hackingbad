import React from 'react'
import Banner from '../components/Banner/Banner'
import Header from '../components/Header'
import GameDev from '../components/HomePageContent/GameDev'
import QuoteEcosystem from '../components/HomePageContent/QuoteEcosystem'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
const Homepage = () => {
  
  return (
    <>
    {/* <Header/> */}
    <Banner/>
    <GameDev/>
    <QuoteEcosystem/>
    <Footer/>
    </>
  )
}

export default Homepage