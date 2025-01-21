import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';
import '../assets/styles/Main.scss';
import logo from '../assets/images/libemg_logo.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        {/* <div className="image-wrapper">
          <img src={logo} alt="Avatar" />
        </div> */}
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/libemg" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://scholar.google.ca/citations?user=z7_82nsAAAAJ&hl=en&oi=ao" target="_blank" rel="noreferrer"><SchoolIcon/></a>
          </div>
          <h1>LibEMG</h1>
          <p>Open-Source EMG Datasets</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/libemg" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://scholar.google.ca/citations?user=z7_82nsAAAAJ&hl=en&oi=ao" target="_blank" rel="noreferrer"><SchoolIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;