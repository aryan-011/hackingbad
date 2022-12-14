import React from 'react'
import Login from '../Login';
import "./Application.css";
import InfoBanner from './InfoBanner';
import Experience from './features/Experience';
const Application = () => {
  return (<>
    <div className='application'>

      <img src="signform.gif" alt="Skill Brewery" className='app-form'></img>

      <div className='description-application'>
        <h2 className='heading-application'>Application Process


        </h2>
        <div className='application-para'>
          <ul>
            <li>
              Fill out the application below and follow us on Linkedin/Instagram</li>

            <li>Don't forget to fill out the verification form (in the form of a Google Form) reading all instructions in the form carefully. Failure to follow the instructions will invite a fine /have your application deleted!
            </li>
            <li><strong>Both steps are compulsory!</strong></li>

          </ul>


        </div>
        {/* <a href="/" className="animated-button1">
<span></span>
<span></span>
<span></span>
<span></span>
Apply Now
</a> */}
      </div>


    </div>
    <div className='feature-strip'>
      <h2 className='feature-text'>FEATURES</h2>

    </div>


    {/* <div className='perks'>
      <div>

        <Experience />
      </div>
      <div className='application-form'> <Login /></div>


      <div className='contact-for-query'></div>
    </div> */}






  </>
  )
}

export default Application