import React from "react";
import "./Banner.css";
import Carousel from "./Carousel";

const Banner = () => {
  return (
    <>
    
      <div className="banner">
        <div className="banner-content">
          <div className="tagline">
            <h1 className="sitename">Skill Brewery</h1>
            <p className="brand-name"> CODEVITA LIVE</p>
          </div>

          <Carousel />
        </div>

    <div className="banner">
    <Navbar/>

      <div className='banner-content'>
        <div className="tagline"><h1 className='sitename'>Skill Brewery</h1>
      <p className='brand-name'> CODEVITA LIVE</p>
      </div>
      
      <Carousel/>



      </div>
      </div>
    </>
  );
};

export default Banner;
