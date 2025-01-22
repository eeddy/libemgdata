import React from "react";
import emg2pose from '../assets/images/emg2pose.png';
import hyser from '../assets/images/hyser.png';
import db8 from '../assets/images/db8.png';
import uc from '../assets/images/uc.png';
import DataIcon from '@mui/icons-material/Source';
import '../assets/styles/Project.scss';

function RegressionDatasets() {
    return(
    <div className="projects-container" id="regression">
        <h1>Regression Datasets</h1>
        <div className="projects-grid">
            <div className="project">
                <h2>DS16: Cross-User (EMG2POSE) &nbsp;<a href={`${window.location.origin}/EMG2POSE`} target="_blank" rel="noopener noreferrer"><DataIcon /></a></h2>
                <p style={{flex: 1, overflowY: 'auto', minHeight: '125px'}}>The EMG2POSE dataset consists of data from 193 participants, each performing 29 distinct hand gestures and movements. The dataset includes 32 channels of EMG data and 40 joint angle labels, enabling the evaluation of within-subject and cross-subject pose estimation.                </p>
                <a href="https://arxiv.org/abs/2412.02725" target="_blank" rel="noreferrer"><img src={emg2pose} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <h2>DS17-19: Hyser &nbsp;<a href={`${window.location.origin}/Hyser`} target="_blank" rel="noopener noreferrer"><DataIcon /></a></h2>
                <p style={{flex: 1, overflowY: 'auto', minHeight: '125px'}}>The Hyser datasets consists of data from 20 participants, collected across two sessions, using a 256-channel high-density EMG system. The dataset includes three sub-datasets (1DOF, NDOF, Random) for evaluating regression models.<br/><br/>                </p>
                <a href="https://ieeexplore.ieee.org/document/9438637/" target="_blank" rel="noreferrer"><img src={hyser} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <h2>DS20: CyberGlove (Ninapro DB8)&nbsp;<a href={`${window.location.origin}/NinaProDB8`} target="_blank" rel="noopener noreferrer"><DataIcon /></a></h2>
                <p style={{flex: 1, overflowY: 'auto', minHeight: '125px'}}>The Ninapro DB8 dataset consists of data from 12 participants (10 able-bodied, 2 with limb difference), recorded using Delsys Trigno sensors and an 18-DoF dataglove. Participants performed 9 motions, with 10 repetitions for training and validation, and 2 repetitions for testing, facilitating exploration into continuous finger estimation using position labels.                </p>
                <a href="https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2019.00891/full" target="_blank" rel="noreferrer"><img src={db8} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <h2>DS21: User Compliance &nbsp;<a href={`${window.location.origin}/UserCompliance`} target="_blank" rel="noopener noreferrer"><DataIcon /></a></h2>
                <p style={{flex: 1, overflowY: 'auto', minHeight: '125px'}}>The User Compliance dataset consists of data from 6 participants, collecting 64-channel HD-EMG data from the forearm while performing 2 DoFs. The dataset explores user compliance with mimic training prompts, providing data for three emulated behaviors: baseline, anticipation, and all-or-nothing. <br/><br/>                </p>
                <a href="https://conferences.lib.unb.ca/index.php/mec/article/view/2507" target="_blank" rel="noreferrer"><img src={uc} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
        </div>
    </div>
    );
}

export default RegressionDatasets;