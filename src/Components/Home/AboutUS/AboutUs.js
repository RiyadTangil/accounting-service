import React from 'react';
import Fade from 'react-reveal/Fade';
import { fadeOutEnabled } from 'react-reveal/globals';
// import aboutUs from '../../../images/Brainstorming .gif'
import aboutUs from '../../../images/about-us.jpg'


const AboutUs = () => {
    return (
        <div    class="  row align-items-center justify-content-center bg-light ">

            <h5 class='section-title text-center mt-5'>About our service</h5>
            <h3 class="text-center text-muted">How we can satisfy  you</h3>
            <div className="col-md-6   text-center">

            <Fade right  distance="80px">
                <img  className="img-fluid " src={aboutUs} alt="" />
                </Fade>
            </div>
            <Fade left  distance="40px">
            <div className="col-md-4  px-4 p-md-5 mt-md-0  about-description  ">
      
                    <p style={{fontSize:"18px" ,fontFamily:"poppins"}} class="text-muted  py-4 pr-md-5">There are many 
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis et impedit in? Vel eligendi culpa praesentium pariatur explicabo reiciendis sint. variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,</p>

                    
            </div>
            </Fade>
        </div>
    );
};

export default AboutUs;