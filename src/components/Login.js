import React from 'react'
import "./Login.css"
import QuoteEcosystem from "../components/HomePageContent/QuoteEcosystem"
const Login = () => {
  return (
    <div className="login-box">
  <h2 className='form-heading'>Taking in applications for the September cohort!</h2>
  <div className="pic-integrate">
  <form className='form-align'>
    <div className="user-box">
      <input type="text" name="" required=""></input>
      <label>Name</label>
    </div>
    <div className="user-box">
      <input type="text" name="" required=""></input>
      <label>Email</label>
    </div>
    <div className="user-box">
      <input type="text" name="" required=""></input>
      <label>Name of the Institution</label>
    </div>
    <div className="user-box">
      <input type="text" name="" required=""></input>
      <label>
Your Qualifications(Degree+Semester)</label>
    </div>
    <div className="user-box">
      <input type="text" name="" required=""></input>
      <label>
Link To Your Linkedin</label>
    </div>
    <div className="user-box">
      <input type="text" name="option" required=""></input>
      <label>How did you get to know about us?</label>
    </div>
    <div className="user-box">
      <input type="text" name="option" required=""></input>
      <label>Additional File</label>
    </div>
    <div className="user-box">
      
      <p className='track-choice'>Which track would you like to pursue?</p>
    </div>
    <div className="radio">
      <input type="radio" name="option" required=""></input>
      <label>Web Development</label>
    </div>
    <div className="radio">
      <input type="radio" name="option" required=""></input>
      <label>Data Science</label>
    </div>
    <div className="radio">
      <input type="radio" name="option" required=""></input>
      <label>Computer Vision</label>
    </div>
    <div className="radio">
      <input type="radio" name="option" required=""></input>
      <label>Campus Ambassador</label>
    </div>
    <div className="radio">
      <input type="radio" name="option" required=""></input>
      <label>BlockChain</label>
    </div>
    <div className="radio">
      <input type="radio" name="option" required=""></input>
      <label>Product Management</label>
    </div>
    <div className="radio">
      <input type="radio" name="option" required=""></input>
      <label>App Development</label>
    </div>


    <div className="track-choice">
      
      <p>Fill out the verification form here: <a style={{color:"#03e9f4",textDecoration:"underline"}} href='https://forms.gle/wnev8qA28mwzZSiw5'>https://forms.gle/wnev8qA28mwzZSiw5</a></p><br/>
      
      </div>
      <div className="user-box">
      <p className='track-choice'>Take a screenshot of your response and upload it on Google Drive. Under the viewer sharing tab, select anyone with the link. Insert the drive link here. Your application would be deleted otherwise.</p>
      <input type="text" name="" required=""></input>
      
    </div>


    <a className='hi' href="/">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit Application
    </a>
  </form>
  
  
  </div>
</div>
  )
}

export default Login