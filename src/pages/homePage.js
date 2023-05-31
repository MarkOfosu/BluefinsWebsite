import React from "react";
import '../styles/homePage.module.css'
import backgroundImage from '../image/image2.jpg'; 

import Slider from "../components/image-slider/slider.component";

const HomePage = () => {
    return (
      
        
        <div className="home-container"  style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr ',
            gridColumnGap: '5px',
            margin:  '20px 10px',
            cursor: 'pointer',
            textAlign: 'left',
        }}>
            <div className="slider">
                <Slider />
            </div>

                <div className="announcement">
                    <h3>Announcements</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                <div className="contact">
                    <h3>Contact Us</h3>
                    <p>
                        Lorem .......
                    </p>
                </div>
            </div>
       
    )

}
    

export default HomePage;