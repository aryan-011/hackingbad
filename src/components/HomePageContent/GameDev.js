import React from 'react'
import "./GameDev.css";
import "./button.css"
const GameDev = () => {
  return (
    <div className='gamedev'>
       
        <div className='description'>
            <h2 className='heading-gamedev'>Skill Brewery: Free Internship Program


</h2>
<p className='gamedev-para'>Work on cool hands-on projects to amplify your profile. Gain an internship certificate, work experience and mentoring after the completion of the programme.
<br/>
<br/>
Choose a domain of your interest and get started now! Please note that you can only complete one internship function at a time and will have to wait at least one month before pursuing another function.</p>
{/* <a href="/" className="animated-button1">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  Apply Now
</a> */}
        </div>
        <img src="skill-brewery.gif" alt="Skill Brewery" className='study-img'></img>
    </div>
  )
}

export default GameDev