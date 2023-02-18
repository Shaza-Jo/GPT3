import React from 'react';
import { Feature } from '../../components';
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='whpt3'>
          <div className="gpt3__whatgpt3-feature">
            <Feature title="What is GPT3" text="GPT3 is an AI language model developed by OpenAI that is capable of generating human-like responses to a wide variety of text-based queries. It is based on the GPT (Generative Pre-trained Transformer) architecture, which uses a large amount of pre-existing data to learn the patterns and relationships between words in natural language."/>
          </div>
          <div className="gpt3__whatgpt3-heading">
            <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
            <p>Explore The Library</p>
          </div>
          <div className="gpt3__whatgpt3-container">
          <Feature title="Healthcare" text="GPT3 can be used to assist doctors in diagnosing illnesses and conditions by analyzing a patient's symptoms and medical history. It can be used to power health chatbots "/>
          <Feature title="Education" text="GPT3 can be used to grade students' written work, freeing up time for teachers to focus on other tasks. It can be used to provide personalized learning experiences, adapting to students' individual needs and providing feedback on areas for improvement."/>
          <Feature title="Natural Languare Processing" text="GPT3 can be used to automatically generate natural language content, such as news articles or product descriptions, without requiring human intervention."/>
          </div>
    </div>
  )
}

export default WhatGPT3