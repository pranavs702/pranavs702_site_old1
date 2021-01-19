import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
          <video src='/videos/video-1.mp4' autoPlay loop muted />
          <h1>PRANAV KUMAR</h1>
          <p>My name is Pranav Kumar, and I am a freshman studying<br></br> Computer Science at the University of Wisconsin - Madison.
          <br></br>Welcome to my website!</p>
        </div>
      );
}

export default HeroSection
