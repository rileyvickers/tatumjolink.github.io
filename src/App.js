import React from 'react'

import './scss/main.scss'
import { ParticlesContainer } from './components/ParticlesContainer.tsx';
import { Navigation } from './components/Navigation.tsx';
import { AboutMe } from './components/AboutMe.tsx';
import { Research } from './components/Research.tsx';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <ParticlesContainer/>
      <AboutMe />
      <Research />
    </div>
  );
}

export default App;
