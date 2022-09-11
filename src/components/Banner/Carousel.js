import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "./Carousel.css"

const carouselItem=[
    {image:"carousel-img/cybersecurity.jpg",
    name:"CyberSecurity"
    },
    {image:"carousel-img/competitive.jpg",
    name:"Competitive Programming"
    },
    {image:"carousel-img/game-dev.jpg",
    name:"Game Development"
    },
    {image:"carousel-img/quantum-computing.jpg",
    name:"Quantum Computing"
    },
    {image:"carousel-img/data-science.jpg",
    name:"Data Science"
    },
   
];


const Carousel = () => {
    

    const items = carouselItem.map((track) => {
        return(<div className='carousel-content'>
        <img className="carouselImage"
            src={track.image}
            alt={track.name}
        />
        <h3>{track.name}</h3>
        </div>

        
    )});
    const responsive = {
        0: {
          items: 2,
        },
        512: {
          items: 4,
        },
      };
    



  return (

    <div className='carousel'>
    
    <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1500}
        animationDuration={1000}
        responsive={responsive}
        autoPlay
        disableButtonsControls
        disableDotsControls
        items={items}
    />
    </div>
    
  )
}

export default Carousel