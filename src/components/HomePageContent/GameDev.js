import React from 'react'
import "./GameDev.css";
import "./button.css"
const GameDev = () => {
  return (
    <div className='gamedev'>
        <img className='gamedevimg' src="gamedevimg.gif" alt="GameDevelopment" height="300px" width="550re"></img>
        <div className='description'>
            <h2 className='heading-gamedev'>Introduction To Hypercasual Game Development(HYP101)
</h2>
<p className='gamedev-para'><span className='bold-para'>[Featured Course] </span>Learn the intricacies of hypercasual game development from scratch and go on to create several app, web,game development projects of your own through Codevita Live’s comprehensive HYP-101 Course.<span className='bold-para'> 8 weeks. 50 projects. Loads of fun.</span></p>

<a href="/" className="animated-button1">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  Apply Now
</a>
        </div>
    </div>
  )
}

export default GameDev