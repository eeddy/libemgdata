import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';
import DescriptionIcon from '@mui/icons-material/Description';
// Import a more specific icon for documentation
import ArticleIcon from '@mui/icons-material/Article'; // Or BookIcon, or LaunchIcon
import '../assets/styles/Main.scss';
import logo from '../assets/images/libemg_logo.png';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/libemg" target="_blank" rel="noreferrer">
              <GitHubIcon/>
              <span>Code</span>
            </a>
            <a href="https://ieeexplore.ieee.org/document/10214558" target="_blank" rel="noreferrer">
              <DescriptionIcon/>
              <span>Paper</span>
            </a>
            <a href="https://libemg.github.io/libemg/" target="_blank" rel="noreferrer" className="doc-link">
              <ArticleIcon/> 
              <span>Docs</span>
            </a>
          </div>
          <h1>LibEMG</h1>
          <p>Open-Source EMG Datasets</p>

          <div className="mobile_social_icons">
          <a href="https://github.com/libemg" target="_blank" rel="noreferrer">
              <GitHubIcon/>
              <span>Code</span>
            </a>
            <a href="https://ieeexplore.ieee.org/document/10214558" target="_blank" rel="noreferrer">
              <DescriptionIcon/>
              <span>Paper</span>
            </a>
            <a href="https://libemg.github.io/libemg/" target="_blank" rel="noreferrer" className="doc-link">
              <ArticleIcon/> 
              <span>Docs</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;