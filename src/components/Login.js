import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import "./Login.css"
// import QuoteEcosystem from "../components/HomePageContent/QuoteEcosystem"
const Login = () => {
  
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [institution,setInstitution]=useState('');
  const [qualifications,setQualifications]=useState('');
  const [linkedin,setLinkedin]=useState('');
  const [domain,setDomain]=useState('');
  const [know,setKnow]=useState('');
  // const [additional,setAdditional]=useState('');
  // const [mesage,setMessage]= useState('');

  const handleName = (event) => {
    const name_t=event.target.value;
    console.log(name_t)
    setName(name_t)
  }

  const handleEmail = (event) => {
    const email_t=event.target.value;
    console.log(email_t)
    setEmail(email_t)
  }

  const handleInstitution = (event) => {
    const institution_t=event.target.value;
    console.log(institution_t)
    setInstitution(institution_t)
  }

  const handleQualifications = (event) => {
    const qualifications_t=event.target.value;
    console.log(qualifications_t)
    setQualifications(qualifications_t)
  }

  const handleLinkedin = (event) => {
    const linkedin_t=event.target.value;
    console.log(linkedin_t)
    setLinkedin(linkedin_t)
  }
  const handleknow = (event) => {
    const know_t=event.target.value;
    console.log(know_t)
    setKnow(know_t)
  }

  const handledomain = (event) => {
    const domain_t=event.target.value;
    console.log(domain_t)
    setDomain(domain_t)
  }

  // const handleAdditional = (event) => {
  //   const additional_t=event.target.value;
  //   console.log(additional_t)
  //   setAdditional(additional_t)
  // }

  const handlesubmit = async (e) => {
    e.preventDefault();
    const userdata = {
      name: name,
      email: email,
      Name_Of_your_institution: institution,
      Your_qualifications:qualifications,
      Linkedin_URL:linkedin,
      How_did_you_get_to_know_about_us:know,
      // Additional_File:additional,
      // Which_track_did_you_want_to_pursue:domain
    };
    await axios
      .post(
        "http://127.0.0.1:8000/api/application/",
        userdata
      )
      .then((result) => {
        
        console.log(result.data);
        console.log(result.data.msg);
      }).catch(e=>{
        console.log("this is error",e)
      })
    }

  return (
    <div className="login-box">
      <h2 className='form-heading'>Taking in applications for the September cohort!</h2>
      <div className="pic-integrate">

        <form className='form-align' onSubmit={(e)=>handlesubmit(e)}>
          <div className="user-box">
            <input type="text" name=""  onChange={(e) => handleName(e)} required></input>
            <label>Name</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required="" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" title="enter @ followed by domain name" onChange={(e) => handleEmail(e)}></input>
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required="" onChange={(e) => handleInstitution(e)}></input>
            <label>Name of the Institution</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required="" onChange={(e) => handleQualifications(e)}></input>
            <label>
              Your Qualifications(Degree+Semester)</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required="" onChange={(e) => handleLinkedin(e)}></input>
            <label>
              Link To Your Linkedin</label>
          </div>
          <div className="user-box">
            <input type="text" name="option" required="" onChange={(e) => handleknow(e)}></input>
            <label>How did you get to know about us?</label>
          </div>
          <div className="user-box">
            <input type="text" name="option" required="" ></input>
            <label>Additional File</label>
          </div>
          <div className="user-box">

            <p className='track-choice'>Which track would you like to pursue?</p>
          </div>
          <div className="radio" >
            <input type="radio" name="option" required=""  checked={domain ==='Web Development'} onChange={ handledomain}></input>
            <label>Web Development</label>
          </div>
          <div className="radio">
            <input type="radio" name="option" required="" checked={domain ==='Web Development'} onChange={ handledomain}></input>
            <label>Data Science</label>
          </div>
          <div className="radio">
            <input type="radio" name="option" required="" checked={domain ==='Computer Vision'} onChange={ handledomain}></input>
            <label>Computer Vision</label>
          </div>
          <div className="radio">
            <input type="radio" name="option" required="" checked={domain ==='>Campus Ambassador'} onChange={ handledomain}></input>
            <label>Campus Ambassador</label>
          </div>
          <div className="radio">
            <input type="radio" name="option" required="" checked={domain ==='BlockChain'} onChange={ handledomain}></input>
            <label>BlockChain</label>
          </div>
          <div className="radio">
            <input type="radio" name="option" required="" checked={domain ==='Product Management'} onChange={ handledomain}></input>
            <label>Product Management</label>
          </div>
          <div className="radio">
            <input type="radio" name="option" required="" checked={domain ==='Web Development'}  onChange={ handledomain}></input>
            <label>App Development</label>
          </div>


          <div className="track-choice">

            <p>Fill out the verification form here: <a style={{ color: "#03e9f4", textDecoration: "underline" }} href='https://forms.gle/wnev8qA28mwzZSiw5'>https://forms.gle/wnev8qA28mwzZSiw5</a></p><br />

          </div>
          <div className="user-box">
            <p className='track-choice'>Take a screenshot of your response and upload it on Google Drive. Under the viewer sharing tab, select anyone with the link. Insert the drive link here. Your application would be deleted otherwise.</p>
            <input type="text" name="" required></input>

          </div>


          <button type='submit' className='hi'  >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit Application
          </button>
        </form>


      </div>
    </div>
  )
}

export default Login