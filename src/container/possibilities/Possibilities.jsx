import React from 'react';
import "./possibilities.css";
import possibilityImage from "../../assets/possibility.png"

const Possibilities = () => {
  return (
    <div className='gpt3__possibilities section__padding' id='possibilities'>
      <div className='gpt3__possibilities-image'>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibilities-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>The future of GPT3 is bright. As it continues to evolve and improve, we can expect to see increased adoption in various industries, improved accuracy and reliability, integration with other technologies, increased personalization, and continued discussions around ethical considerations. It will be exciting to see how this innovative AI technology develops and impacts our world in the years to come.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibilities