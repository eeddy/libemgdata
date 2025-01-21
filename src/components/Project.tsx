import React from "react";
import threedeec from '../assets/images/3dc.png';
import es from '../assets/images/es.png';
import md from '../assets/images/md.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Datasets</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/LibEMG/3DCDataset" target="_blank" rel="noreferrer"><h2>DS1: General (3DC)</h2></a>
                <p>Short Description.</p>
                <a href="https://github.com/LibEMG/3DCDataset" target="_blank" rel="noreferrer"><img src={threedeec} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://github.com/LibEMG/CIILData" target="_blank" rel="noreferrer"><h2>DS2: Electrode Shift</h2></a>
                <p>Short Description.</p>
                <a href="https://github.com/LibEMG/CIILData" target="_blank" rel="noreferrer"><img src={es} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://github.com/LibEMG/CIILData" target="_blank" rel="noreferrer"><h2>DS3: Minimal Training Data</h2></a>
                <p>Short Description.</p>
                <a href="https://github.com/LibEMG/CIILData" target="_blank" rel="noreferrer"><img src={md} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
        </div>
    </div>
    );
}

export default Project;