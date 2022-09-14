import React from 'react'
import "./Banner.css"
import Carousel from './Carousel'
import Navbar from '../Navbar/Navbar'
const Banner = () => {
  return (
    <>
    <Navbar/>
      <div className="banner">
      <div className='banner-content'>
        <div className="tagline"><h1 className='sitename'>Codevita Live</h1>
      <p>At Codevita Live, we introduce future STEM leaders into the intellectual premises of computer science.</p>
      </div>
      
      <Carousel/>


      </div>
      </div>
      
    </>
  )
}

export default Banner