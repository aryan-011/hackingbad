import React from 'react'
import Banner from '../components/Banner/Banner'
import Header from '../components/Header'
import GameDev from '../components/HomePageContent/GameDev'
import QuoteEcosystem from '../components/HomePageContent/QuoteEcosystem'

const Homepage = () => {
  return (
    <>
    <Header/>
    <Banner/>
    <GameDev/>
    <QuoteEcosystem/>
    </>
  )
}

export default Homepage