import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';

import {
  Main,
  ClassificationDatasets,
  RegressionDatasets,
  Navigation,
  Footer,
  Example,
  Leaderboard,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

const Redirect = () => {
    const params = useParams();
  
    useEffect(() => {
      const redirectMap: { [key: string]: string } = {
        '3DC': 'https://github.com/LibEMG/3DCDataset',
        'ElectrodeShift': 'https://github.com/LibEMG/CIILData',
        'MinimalTrainingData': 'https://github.com/LibEMG/CIILData',
        'WeaklySupervised': "https://unbcloud-my.sharepoint.com/:u:/g/personal/ecampbe2_unb_ca/EaABHYybhfJNslTVcvwPPwgB9WwqlTLCStui30maqY53kw?e=nik9Np5",
        "ContinuousTransitions": "https://unbcloud-my.sharepoint.com/:f:/g/personal/ecampbe2_unb_ca/EjgjhM9ZHJxOglKoAf062ngBf4wFj2Mn2bORKY1-aMYGRw?e=WkZNwI",
        "ContractionIntensity": "https://github.com/LibEMG/ContractionIntensity",
        "EMGEPN612": "https://unbcloud-my.sharepoint.com/:u:/g/personal/ecampbe2_unb_ca/EWf3sEvRxg9HuAmGoBG2vYkBLyFv6UrPYGwAISPDW9dBXw?e=vjCA14",
        "FORSEMG": "https://www.kaggle.com/datasets/ummerummanchaity/fors-emg-a-novel-semg-dataset",
        "LimbPosition": "https://github.com/LibEMG/LimbPosition",
        "GRABMYO": "https://physionet.org/content/grabmyo/1.0.2/",
        "Hyser": "https://www.physionet.org/content/hd-semg/2.0.0/",
        "MultiDay": "https://github.com/LibEMG/MultiDay",
        "NinaProDB2": "https://Ninapro.hevs.ch/instructions/DB2.html",
        "TMR": "https://github.com/LibEMG/TMR_ShirleyRyanAbilityLab",
        "EMG2POSE": "https://fb-ctrl-oss.s3.amazonaws.com/emg2pose/emg2pose_dataset.tar",
        "NinaProDB8": "https://Ninapro.hevs.ch/instructions/DB8.html",
        "UserCompliance": "https://github.com/LibEMG/UserComplianceDataset",
      };
  
      if (params.redirect) {
        window.location.href = redirectMap[params.redirect];
      }
    }, [params]);
  
    return null;
  };

function App() {
  const [mode, setMode] = useState<string>('dark');

  const handleModeChange = () => {
    if (mode === 'dark') {
      setMode('light');
    } else {
      setMode('dark');
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
            <FadeIn transitionDuration={700}>
              <Main />
              <ClassificationDatasets />
              <RegressionDatasets />
              <Example language="python" />
              <br />
              <Leaderboard mode={mode} />
            </FadeIn>
            <Footer />
          </div>
        } />
        <Route path="/:redirect" element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;