import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';


const Testimonials = () => {
    const [testimonialData, setTestimonialData] = useState([])
    useEffect(() => {
        fetch("https://morning-thicket-61908.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => setTestimonialData(data))
    }, [])
    return (
        <section   className="testimonials  my-5 py-5">
            <div  className="container">
                <div className="section-header text-center">
                    <h5 style={{color:"#DAAD86"}} className="text-uppercase">Testimonial</h5>
                    <h2>What people says about us </h2>
                </div>
                <div className="card-deck mt-5">
                    <div className="d-flex justify-content-center align-items-center">
                        <div  className="row ">
                            {
                                testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;