import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">I'm <span className='name'>Kimani</span>
       <br />
       I am a front-end developer
       <p className="introParagraph">
        I am passionate about user-centered web developnment, and understand its potential within dynamic digital spaces.
       </p>
        </span>
      </div>
      <img src="" alt="" />
    </section>
  );
}

export default Hero