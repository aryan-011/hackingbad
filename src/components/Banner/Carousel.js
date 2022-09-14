import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "./Carousel.css"

const carouselItem=[
    {image:"carousel-img/computer-vision.jpg",
    name:"ComputerVision"
    },
    {image:"carousel-img/data-science.jpg",
    name:"Data Science"
    },
    {image:"carousel-img/campus-ambassador.jpg",
    name:"Campus Ambassador"
    },
    {image:"carousel-img/blockchain.jpg",
    name:"BlockChain"
    },
    {image:"carousel-img/web-development.jpg",
    name:"Web Development"
    },
    {image:"carousel-img/product-management.jpg",
    name:"Product Management"
    },
    {image:"carousel-img/app-development.jpg",
    name:"App Development"
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