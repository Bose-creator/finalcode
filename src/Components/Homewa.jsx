import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Homewa = () => {
  return (
    <div className='home-container'>
      <div className='home-banner-container' >
        <div className='home-bannerImage-container' >
            <img src="./Assets/home-bannerbackground.png" alt="" />
        </div>
        <div className='home-text-section' >
            <h1 className='primary-heading' >
              Your Favourite Food Delivered Hot & Fresh
            </h1>
            <p className='primary-text' >Healthy switcher chefs do all the prep work, like peeding, chopping
              & marinating, so you can cook a fresh food.
            </p>
            <button className='secondary-button' >
              order Now <FaArrowRight />
            </button>
            <div className='home-image-container' >
              <img src="./Assets/home-banner-image.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Homewa
