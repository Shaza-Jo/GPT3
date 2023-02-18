import React from 'react';
import "./footer.css";
import gptLogo from "../../assets/logo.svg"

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt__footer-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logos">
          <img src={gptLogo} alt="logo" />
          <p>ShazaJo © 2023 GPT-3. All rights reserved.</p>
        </div>
        <div className='gpt3__footer-links_div'>
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
            <h4>Get in touch</h4>
            <p>13 XYZ PQRST St. DL</p>
            <p>123-456-7689</p>
            <p>info@gpt3.com</p>
        </div>
      </div>
    </div>
  )
}

export default Footer