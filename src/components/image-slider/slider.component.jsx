
import React, { useState, useEffect } from "react";
import './sliderImage.styles.css'

import ImageMark from '../../image/mark.JPG'; 
import ImageDesemond from '../../image/desmond.JPG'; 
import ImageGeneral from '../../image/general.png'; 
import ImageAkonto from '../../image/akonto.png'; 
import ImageGideon from '../../image/gideon.png'


const Slider = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const images = [ImageMark, ImageDesemond, ImageGeneral, ImageAkonto,ImageGideon];
    const image = images[imageIndex];
  
    const slideForward = () => {
      const newIndex = imageIndex + 1 >= images.length ? 0 : imageIndex + 1;
      setImageIndex(newIndex);
    };
  
    const slideBackward = () => {
      const newIndex = imageIndex - 1 < 0 ? images.length - 1 : imageIndex - 1;
      setImageIndex(newIndex);
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        slideForward();
      }, 3000);
      return () => clearInterval(interval);
    });
  
    return (
      <div className="slider-image-container">
        <button onClick={slideBackward} className='left-arrow '>{"<"}</button>
          <img src={image} alt={image} className= "image slide active"/>
  
        <button onClick={slideForward} className="right-arrow ">{">"}</button>
      </div>
    );
  };
  
  export default Slider;