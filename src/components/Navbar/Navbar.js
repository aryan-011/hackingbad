import React from "react";
// import logo from "./images/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar() {
  const activeLink = 'nav-link active';
  const inactiveLink = 'nav-link dropdown-toggle';
  const handleClick = event => {
    // 👇️ toggle class on click
    // event.currentTarget.classList.toggle('bg-salmon');

    // 👇️ add class on click
    event.currentTarget.classList.add('active');

    // 👇️ remove class on click
    // event.currentTarget.classList.remove('bg-salmon');
  };

  const path = window.location.pathname;
  console.log(path);
  return (
    <>
      <nav className="navbar  navbar-expand-custom">
        <div className="container-fluid navbarBox">
          <a className="navbar-logo" href="#">
            {/* <img src={logo} alt="logo" /> */}
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse  navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-fill mx-auto mb-2 mb-lg-0">
              <a className="nav-link" href='https://codevita.live/' target='_blank'>Codevita Live</a>
              <li className="nav-item dropdown">

                <a
                  className='nav-link dropdown-toggle' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Home
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="https://codevita.live/careerscodevita-live/" target='_blank'>
                      Careers@CodevitaLive
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://codevita.live/faqs/" target='_blank'>
                      FAQ's
                    </a>
                  </li>


                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                  Explore other courses
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="https://codevita.live/powershot/" target='_blank'>
                      Powershot series
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://codevita.live/bon-voyage/" target='_blank'>
                      Bon Voyage
                    </a>
                  </li>

                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Miscellaneous
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="https://codevita.live/terms-and-conditions/" target='_blank'>
                      Terms and Condition
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://codevita.live/privacy-policy/" target='_blank'>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://codevita.live/refund-policy/" target='_blank'>
                      Refund Policy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://codevita.live/pricing/" target='_blank'>
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Skill Brewery
                    </a>
                  </li>
                </ul>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
