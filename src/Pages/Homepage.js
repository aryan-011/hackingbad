import React from 'react'
import Banner from '../components/Banner/Banner'
import GameDev from '../components/HomePageContent/GameDev'
import "../components/header.css";
import Application from '../components/HomePageContent/Application'
import Footer from '../components/Footer/Footer'
const Homepage = () => {
  
  return (
    <>
    
    <Banner/>
    <GameDev/>
    <Application/>
    
    {/* <QuoteEcosystem/> */}
    <Footer/>
    </>
  )
}

export default Homepage