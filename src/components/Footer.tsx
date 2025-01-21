import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/libemg" target="_blank" rel="noreferrer"><GitHubIcon/></a>
      </div>
      <p>LibEMG Datasets</p>
    </footer>
  );
}

export default Footer;