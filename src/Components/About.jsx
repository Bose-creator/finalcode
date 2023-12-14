import React from 'react'
import { BsFillPlayCircleFill} from "react-icons/bs";

const About = () => {
  return (
    <div className='about-section-container' >
      <div className='about-background-image-container' >
        <img src="./Assets/about-background.png" alt="" />
     </div>
     <div className='about-section-image-container' >
        <img src="./Assets/about-background-image.png" alt="" />
     </div>
     <div className='about-section-text-container' >
        <p className='primary-subheading' >About</p>
        <h1>Food is An importan part of a balance diet</h1>
        <p className='primary-text' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil maxime voluptatibus ratione accusamus consequatur! Impedit. </p>
        <p className='primary-text' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita maxime voluptatibus quaerat doloremque harum incidunt, doloribus maiores!
        </p>
        <div className='about-buttons-container' >
            <button className='secondary-button' >Learn More</button>
            <button className='watch-video-button' > 
            
            <BsFillPlayCircleFill/> Watch Video</button>
        </div>
     </div>
    </div>
  )
}

export default About
