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
import DataIcon from '@mui/icons-material/Source';
import '../assets/styles/Project.scss';

function ClassificationDatasets() {
    return(
    <div className="projects-container" id="classification">
        <h1>Classification Datasets</h1>
        <div className="projects-grid">
            <div className="project">
                <h2>DS1: General (3DC) &nbsp;<a href={`${window.location.origin}/3DC`} target="_blank" rel="noopener noreferrer"><DataIcon /></a></h2>
                <p style={{flex: 1, minHeight: '125px'}}>The 3DC dataset consists of 11 hand gestures performed by 22 participants and was recorded using the 3DC armband, which captured EMG signals from 10 channels at 1000 Hz. The dataset provides a within-session benchmark.</p>
                <a href="https://www.mdpi.com/1424-8220/19/12/2811" target="_blank" rel="noreferrer"><img src={threedeec} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <h2>DS2: Continuous Transitions &nbsp;<a href={`${window.location.origin}/ContinuousTransitions`} target="_blank" rel="noopener noreferrer"><DataIcon /></a></h2>
                <p style={{flex: 1, minHeight: '125px'}}>The Continuous Transitions dataset consists of data from 43 participants, recorded using 6 Delsys electrodes at 2000 Hz. The dataset includes 7 gestures and evaluates a model's performance when there are continuous transitions between gestures.</p>
                <a href="https://pubmed.ncbi.nlm.nih.gov/37721893/" target="_blank" rel="noreferrer"><img src={continuous} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <h2>DS3: Contraction Intensity &nbsp;<a href={`${window.location.origin}/ContractionIntensity`} target="_blank" rel="noopener noreferrer"><DataIcon /></a></h2>
                <p style={{flex: 1, overflowY: 'auto', minHeight: '125px'}}>The Contraction Intensity dataset consists of data from 10 participants, recorded using 8 electrodes sampling at 1000 Hz. The dataset includes 7 gestures performed at various force levels.</p>
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3719876/" target="_blank" rel="noreferrer"><img src={intensity} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <h2>DS4: Electrode Shift &nbsp;<a href={`${window.location.origin}/ElectrodeShift`} target="_blank" rel="noopener noreferrer"><DataIcon /></a></h2>
                <p style={{flex: 1, overflowY: 'auto', minHeight: '125px'}}>The Electrode Shift dataset consists of data from 21 participants, recorded using the 8-channel Myo Armband at 200 Hz. The dataset provides a benchmark for evaluating robustness to electrode shift.</p>
                <a href="https://link.springer.com/article/10.1186/s12984-024-01355-4" target="_blank" rel="noreferrer"><img src={es} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <h2>DS5: Cross-User (EMGEPN612) &nbsp;<a href={`${window.location.origin}/EMGEPN612`} target="_blank" rel="noopener noreferrer"><DataIcon /></a></h2>
                <p style={{flex: 1, overflowY: 'auto', minHeight: '125px'}}>The EMGEPN612 dataset consists of data from 612 users, each performing 6 gestures 50 times. The dataset was recorded using the 8-channel Myo Armband at 200 Hz and can be used for evaluating big-data cross-user and user-dependent models.                </p>
                <a href="https://link-springer-com.proxy.hil.unb.ca/chapter/10.1007/978-3-030-86380-7_47" target="_blank" rel="noreferrer"><img src={epn} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <h2>DS6: FORS-EMG &nbsp;<a href={`${window.location.origin}/FORSEMG`} target="_blank" rel="noopener noreferrer"><DataIcon /></a></h2>
                <p style={{flex: 1, overflowY: 'auto', minHeight: '125px'}}>The FORS-EMG dataset consists of data from 19 subjects, each performing 12 gestures at 3 forearm orientations. The dataset was recorded using a custom EMG device at 985 Hz, evaluating the influence of forearm orientation.                </p>
                <a href="https://arxiv.org/abs/2409.07484" target="_blank" rel="noreferrer"><img src={fors} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <h2>DS7: Limb Position (Fougner) &nbsp;<a href={`${window.location.origin}/LimbPosition`} target="_blank" rel="noopener noreferrer"><DataIcon /></a></h2>
                <p style={{flex: 1, overflowY: 'auto', minHeight: '125px'}}>The Limb Position dataset consists of data from 12 participants, each performing 8 gestures in 5 limb positions. The dataset was recorded using 8 pairs of electrodes at 1000 Hz and can be used to evaluate the impact of limb position.                </p>
                <a href="https://pubmed.ncbi.nlm.nih.gov/21846608/" target="_blank" rel="noreferrer"><img src={fougner} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <h2>DS8: Cross-Session (GRABMyo) &nbsp;<a href={`${window.location.origin}/GRABMYO`} target="_blank" rel="noopener noreferrer"><DataIcon /></a></h2>
                <p style={{flex: 1, overflowY: 'auto', minHeight: '125px'}}>The GRABMyo dataset consists of data from 43 participants, each performing 17 gestures over 3 seperate sessions. The dataset was recorded using 16 electrodes sampling at 2048 Hz. This dataset can be used to evaluate cross-day resilience.                </p>
                <a href="https://www.nature.com/articles/s41597-022-01836-y" target="_blank" rel="noreferrer"><img src={grab} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <h2>DS9: High-Density (Hyser PR) &nbsp;<a href={`${window.location.origin}/Hyser`} target="_blank" rel="noopener noreferrer"><DataIcon /></a></h2>
                <p style={{flex: 1, overflowY: 'auto', minHeight: '125px'}}>The Hyser PR dataset provides high-density EMG data for classifying 34 hand gestures, recorded from 10 participants using a 128-channel HD-EMG system. <br/><br/>           </p>
                <a href="https://ieeexplore.ieee.org/document/9438637/" target="_blank" rel="noreferrer"><img src={hyserpr} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <h2>DS10: Single-User Multi-Day &nbsp;<a href={`${window.location.origin}/MultiDay`} target="_blank" rel="noopener noreferrer"><DataIcon /></a></h2>
                <p style={{flex: 1, overflowY: 'auto', minHeight: '125px'}}>The Minimal Data dataset consists of data from a single subject, recorded over 120 sessions. The dataset includes 11 motion classes, recorded using 4 channels at 2048 Hz, and aims to evaluate models' inter-session robustness.                </p>
                <a href="https://pubmed.ncbi.nlm.nih.gov/21096692/" target="_blank" rel="noreferrer"><img src={kauffman} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <h2>DS11: Minimal Training Data &nbsp;<a href={`${window.location.origin}/MinimalTrainingData`} target="_blank" rel="noopener noreferrer"><DataIcon /></a></h2>
                <p style={{flex: 1, overflowY: 'auto', minHeight: '125px'}}>The Minimal Training Data dataset consists of data from 11 participants, recorded using the 8-channel Myo Armband at 200 Hz. The dataset provides a benchmark for evaluating model performance with limited training data. </p>
                <a href="https://link.springer.com/article/10.1186/s12984-024-01355-4" target="_blank" rel="noreferrer"><img src={md} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <h2>DS12: General (NinaPro DB2) &nbsp;<a href={`${window.location.origin}/NinaProDB2`} target="_blank" rel="noopener noreferrer"><DataIcon /></a></h2>
                <p style={{flex: 1, overflowY: 'auto', minHeight: '125px'}}>The Ninapro DB2 dataset is a widely-used benchmark for myoelectric control algorithms, consisting of 50 gestures from 3 categories. The dataset was recorded from 12 channels at 2000 Hz and provides 4 training and 2 testing repetitions for each gesture.                </p>
                <a href="https://www.nature.com/articles/sdata201453" target="_blank" rel="noreferrer"><img src={db2} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <h2>DS13: Limb Position (Radmand) &nbsp;<a href={`${window.location.origin}/LimbPosition`} target="_blank" rel="noopener noreferrer"><DataIcon /></a></h2>
                <p style={{flex: 1, overflowY: 'auto', minHeight: '125px'}}>The Radmand Limb Position Dataset consists of data from 10 participants, each performing 8 gestures in 16 limb positions. The dataset was recorded using 6 Delsys Trigno electrodes at 1000 Hz, evaluating models' ability to generalize to unseen limb positions. <br/><br/>              </p>
                <a href="https://pubmed.ncbi.nlm.nih.gov/25570046/" target="_blank" rel="noreferrer"><img src={radmand} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <h2>DS14: Pre/Post TMR &nbsp;<a href={`${window.location.origin}/TMR`} target="_blank" rel="noopener noreferrer"><DataIcon /></a></h2>
                <p style={{flex: 1, overflowY: 'auto', minHeight: '125px'}}>The TMR dataset consists of data from 6 upper-limb amputee participants, before and after targeted muscle reinnervation surgery. Each participant performed 8 repetitions of 24 motion classes, including coarse wrist and fine finger movements. The dataset evaluates control benefits gained post-surgery.                </p>
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9879512/" target="_blank" rel="noreferrer"><img src={tmr} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="project">
                <h2>DS15: Weakly Supervised &nbsp;<a href={`${window.location.origin}/WeaklySupervised`} target="_blank" rel="noopener noreferrer"><DataIcon /></a></h2>
                <p style={{flex: 1, overflowY: 'auto', minHeight: '125px'}}>The Weakly-Supervised dataset consists of data from 16 participants, including both screen-guided training and online user-in-the-loop control. The dataset includes 15 repetitions of 5 classes, aiming to support model development in user-in-the-loop scenarios.    </p>
                <a href="https://ieeexplore.ieee.org/abstract/document/10802919" target="_blank" rel="noreferrer"><img src={weakly} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
        </div>
    </div>
    );
}

export default ClassificationDatasets;