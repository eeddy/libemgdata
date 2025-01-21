import React from "react";
import emg2pose from '../assets/images/emg2pose.png';
import hyser from '../assets/images/hyser.png';
import db8 from '../assets/images/db8.png';
import uc from '../assets/images/uc.png';
import '../assets/styles/Project.scss';

function RegressionDatasets() {
    return(
    <div className="projects-container" id="regression">
        <h1>Regression Datasets</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/LibEMG/3DCDataset" target="_blank" rel="noreferrer"><h2>DS16: Joint Angle/Cross-User (EMG2POSE)</h2></a>
                <p>Short Description.</p>
                <a href="https://github.com/LibEMG/3DCDataset" target="_blank" rel="noreferrer"><img src={emg2pose} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://github.com/LibEMG/3DCDataset" target="_blank" rel="noreferrer"><h2>DS17-19: Hyser (1DoF, NDoF, and Random)</h2></a>
                <p>Short Description.</p>
                <a href="https://github.com/LibEMG/3DCDataset" target="_blank" rel="noreferrer"><img src={hyser} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://github.com/LibEMG/3DCDataset" target="_blank" rel="noreferrer"><h2>DS20: CyberGlove (Ninapro DB8)</h2></a>
                <p>Short Description.</p>
                <a href="https://github.com/LibEMG/3DCDataset" target="_blank" rel="noreferrer"><img src={db8} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://github.com/LibEMG/3DCDataset" target="_blank" rel="noreferrer"><h2>DS21: User Compliance</h2></a>
                <p>Short Description.</p>
                <a href="https://github.com/LibEMG/3DCDataset" target="_blank" rel="noreferrer"><img src={uc} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
        </div>
    </div>
    );
}

export default RegressionDatasets;