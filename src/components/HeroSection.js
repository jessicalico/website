import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="calicovideo.mp4" autoPlay loop muted />
        <h1>welcome to my page</h1>
        <p>i'm jessica!</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'>
            about me
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
            introduction video <i className='fa-solid fa-play' />
            </Button>
        </div>
    </div>
  )
}

export default HeroSection