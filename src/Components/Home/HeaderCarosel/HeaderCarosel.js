import React, { useEffect } from 'react';
import calculator from "../../../images/calcultro.jpg"
import computor from "../../../images/copmuter.jpg"
import invoice from "../../../images/accounting-hero.jpg"
import meeting from "../../../images/meeting.jpg"
import writing from "../../../images/writing.jpg"
import './carousel.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faArrowRight, faCoffee } from '@fortawesome/free-solid-svg-icons'

const HeaderCarosel = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    return (
        <div className=" hero-container container ">
            <div className="row ">
                    <div className="col-md-4 order-2 order-md-1  d-flex  align-items-center justify-content-center">
                        <div class="text-dark ">
                            <h3 class='section-title'>Professional accountant</h3>
                            <h6 class='py-3 text-muted' >Start your dream Of an Accountant today. Conquer the world..</h6>
                            <div style={{ backgroundColor: "rgb(0, 156, 134)", BorderRadius: "60px", fontSize: "20px " }} className="btn btn-primary text-center lg-w-5 md-w-50">Take a service  <FontAwesomeIcon icon={faArrowCircleRight} /></div>
                        </div>
                    </div>
                    <div data-aos={"zoom-in-down"} className="order-1 order-md-2  col-md-8 hero-img-section">
                        <img  src={invoice} class=" w-100  img-fluid img-animation" alt="..."></img>
               
                </div>

            </div>
        </div>
    );
};

export default HeaderCarosel;