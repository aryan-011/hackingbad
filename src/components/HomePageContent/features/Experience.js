import React from "react";
import rightArrow from "./images/rightArrow.png";
import questionMark from "./images/questionMark.png";
import feedbackIcon from "./images/feedbackIcon.png";
import shareIcon from "./images/shareIcon.png";
import searchIcon from "./images/image1.png";
import healthcareIcon from "./images/image2.png";
import healthguardIcon from "./images/image3.png";
import syringeIcon from "./images/image4.png";
import styles from "./Experience.module.css";
import { Link } from "react-router-dom";

function Experience() {
  return (
    <div className={`${styles.experience_section}`}>
      <div className={`${styles.part2} ${styles.container}`}>
        <div className={`${styles.left}`}>
          <div className={`${styles.col1}`}>
            <div className={`${styles.box} ${styles.box1}`}>
              <img src={searchIcon} alt="img" />
              <h3>Commitment</h3>

              <p>
                5-6 hours a week/1 month
              </p>
              {/* <li>
                  Devotion to the Internship
                </li> */}


            </div>
            <div className={`${styles.box} ${styles.box2}`}>
              <img src={healthguardIcon} alt="img" />
              <h3>

                Perks
              </h3>
              <ul>
                <li>
                  Capstone Project Intensive
                </li>
                <li>
                  LinkedIn profile building
                </li>
                <li>
                  24/7 Support
                </li>
                <li>Internship Completion Certificate</li>
              </ul>
            </div>
          </div>
          <div className={`${styles.col2}`}>
            <div className={`${styles.box} ${styles.box1}`}>
              <img src={healthcareIcon} alt="img" />
              <h3>Iedal for</h3>
              <p>Students pursuing any technical/managerial field at a graduate/undergraduate level</p>
            </div>
            <div className={`${styles.box} ${styles.box2}`}>
              <img src={syringeIcon} alt="img" />
              <h3>Pricing</h3>
              <p>We'd be lying if we say the Internship will cost you money because its free.</p>
            </div>
          </div>
        </div>
        <div className={`${styles.right}`}>
          <div className={`${styles.col3}`}>
            <h2>What we do ?</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam<br /><br />
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br /><br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
