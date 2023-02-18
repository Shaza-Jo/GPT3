import React from 'react';
import { Feature } from '../../components';
import "./features.css";


const featuresData = [
  {
    title:"Increased adoption in various industries",
    text:"As technology continues to advance, more and more industries are looking for ways to incorporate AI into their operations. GPT3 has the potential to revolutionize industries like customer service, healthcare, and education. "
  },
  {
    title:"Integration with other technologies",
    text:"With advancements in machine learning and AI, we can expect to see GPT3 integrated with other technologies, such as virtual reality and augmented reality. This could lead to a more immersive and interactive experience for users"
  },
  {
    title:"Increased personalization",
    text:"GPT3 has already made significant strides in the area of personalization, but we can expect this to become even more sophisticated in the future. With its ability to process and understand natural language."
  },
  {
    title:"Ethical considerations",
    text:"As AI becomes more integrated into our daily lives, ethical considerations become increasingly important. We can expect to see continued discussions around topics such as data privacy, algorithmic bias, and transparency."
  },
]

const Features = () => {
  return (
   <div className='gpt3__features section__padding' id='features'>
        <div className="gpt3__features-heading">
              <h1 className="gradient__text">
              The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
              </h1>
              <p className="gradient__text">Request Early Access to Get Started</p>
        </div>
        <div className="gpt3__features-container">
            {featuresData.map((item, index)=>(
              <Feature title={item.title} text={item.text} key={item.title + index}/>
            ))}
        </div>
   </div>
  )
}

export default Features