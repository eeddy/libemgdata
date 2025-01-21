import React from "react";
import threedeec from '../assets/images/3dc.png';
import es from '../assets/images/es.png';
import md from '../assets/images/md.png';
import weakly from '../assets/images/weakly_supervised.png';
import continuous from '../assets/images/continuous_transitions.png';
import intensity from '../assets/images/contraction_intensity.png';
import epn from '../assets/images/epn.png';
import fors from '../assets/images/fors.png';
import fougner from '../assets/images/fougner.png';
import grab from '../assets/images/grab.png';
import hyserpr from '../assets/images/hyser_pr.png';
import kauffman from '../assets/images/kauffman.png';
import db2 from '../assets/images/db2.png';
import radmand from '../assets/images/radmand.png';
import tmr from '../assets/images/tmr.png';
import '../assets/styles/Project.scss';

function ClassificationDatasets() {
    return(
    <div className="projects-container" id="classification">
        <h1>Classification Datasets</h1>
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
            <div className="project">
                <a href="https://github.com/LibEMG/CIILData" target="_blank" rel="noreferrer"><h2>DS4: Weakly Supervised</h2></a>
                <p>Short Description.</p>
                <a href="https://github.com/LibEMG/CIILData" target="_blank" rel="noreferrer"><img src={weakly} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://github.com/LibEMG/CIILData" target="_blank" rel="noreferrer"><h2>DS5: Continuous Transitions</h2></a>
                <p>Short Description.</p>
                <a href="https://github.com/LibEMG/CIILData" target="_blank" rel="noreferrer"><img src={continuous} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://github.com/LibEMG/CIILData" target="_blank" rel="noreferrer"><h2>DS6: Contraction Intensity</h2></a>
                <p>Short Description.</p>
                <a href="https://github.com/LibEMG/CIILData" target="_blank" rel="noreferrer"><img src={intensity} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://github.com/LibEMG/CIILData" target="_blank" rel="noreferrer"><h2>DS7: General & Cross-User (EMGEPN612)</h2></a>
                <p>Short Description.</p>
                <a href="https://github.com/LibEMG/CIILData" target="_blank" rel="noreferrer"><img src={epn} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://github.com/LibEMG/CIILData" target="_blank" rel="noreferrer"><h2>DS8: Forearm Orientation (FORS-EMG)</h2></a>
                <p>Short Description.</p>
                <a href="https://github.com/LibEMG/CIILData" target="_blank" rel="noreferrer"><img src={fors} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://github.com/LibEMG/CIILData" target="_blank" rel="noreferrer"><h2>DS8: Forearm Orientation (FORS-EMG)</h2></a>
                <p>Short Description.</p>
                <a href="https://github.com/LibEMG/CIILData" target="_blank" rel="noreferrer"><img src={fors} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://github.com/LibEMG/CIILData" target="_blank" rel="noreferrer"><h2>DS9: Limb Position (Fougner)</h2></a>
                <p>Short Description.</p>
                <a href="https://github.com/LibEMG/CIILData" target="_blank" rel="noreferrer"><img src={fougner} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://github.com/LibEMG/CIILData" target="_blank" rel="noreferrer"><h2>DS10: General and Cross-Session (GRABMyo)</h2></a>
                <p>Short Description.</p>
                <a href="https://github.com/LibEMG/CIILData" target="_blank" rel="noreferrer"><img src={grab} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://github.com/LibEMG/CIILData" target="_blank" rel="noreferrer"><h2>DS11: High-Density (Hyser PR)</h2></a>
                <p>Short Description.</p>
                <a href="https://github.com/LibEMG/CIILData" target="_blank" rel="noreferrer"><img src={hyserpr} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://github.com/LibEMG/CIILData" target="_blank" rel="noreferrer"><h2>DS12: Single-User Multi-Day (KaufmannMD)</h2></a>
                <p>Short Description.</p>
                <a href="https://github.com/LibEMG/CIILData" target="_blank" rel="noreferrer"><img src={kauffman} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://github.com/LibEMG/CIILData" target="_blank" rel="noreferrer"><h2>DS13: General (NinaPro DB2)</h2></a>
                <p>Short Description.</p>
                <a href="https://github.com/LibEMG/CIILData" target="_blank" rel="noreferrer"><img src={db2} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://github.com/LibEMG/CIILData" target="_blank" rel="noreferrer"><h2>DS14: Limb Position (Radmand)</h2></a>
                <p>Short Description.</p>
                <a href="https://github.com/LibEMG/CIILData" target="_blank" rel="noreferrer"><img src={radmand} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <a href="https://github.com/LibEMG/CIILData" target="_blank" rel="noreferrer"><h2>DS15: Pre/Post TMR (TMRShirleyRyanAbilityLab)</h2></a>
                <p>Short Description.</p>
                <a href="https://github.com/LibEMG/CIILData" target="_blank" rel="noreferrer"><img src={tmr} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
        </div>
    </div>
    );
}

export default ClassificationDatasets;