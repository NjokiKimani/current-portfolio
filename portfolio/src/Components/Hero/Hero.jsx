import React from 'react'
import './Hero.css'
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion'

function Hero() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">
          I'm <span className="name">Kimani</span>
          <br />
          <span className="jobTitle">a </span>
         <TypeAnimation sequence = {[
            'front-end developer',  
             'financial analyst',  
              'management consultant',  
         ]} speed={50} wrapper='span' repeat={Infinity}
         
         />
         
          <p className="introParagraph">
            I am passionate about user-centered web development, and understand
            its potential within dynamic digital spaces.
          </p>
        </span>
      </div>
      <img src="" alt="" />
    </section>
  );
}

export default Hero