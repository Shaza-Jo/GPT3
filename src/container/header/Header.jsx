import React from 'react';
import "./header.css";
import people from "../../assets/people.png"
import ai from "../../assets/ai.png"

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
        GPT3: The Future of Machine Learning and Language Processing.
        </h1>
        <p>
        Explore the potential of GPT3, an advanced language model that is revolutionizing industries such as customer service, healthcare, and education. Discover how this AI technology is evolving, including improved accuracy, integration with virtual and augmented reality, and increased personalization.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" name="" placeholder='Your email address'/>
          <button type='button'>Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>2000+ people requested access a vist in last 24hrs,</p>
        </div>
      </div>
        <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header