import React, { useEffect, useState } from 'react';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import MyTestimonial from '../MyTestimonial/MyTestimonial';
import './MyTestimonials.css'
const MyTestimonials = () => {

    const [testimonialData, setTestimonialData] = useState(null)

    useEffect(() => {
        fetch("https://morning-thicket-61908.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => setTestimonialData(data))
    }, [])

    return (
        <div id="review" style={{ height: "600px" }} className=" review-container bg-dark d-flex row  align-items-center justify-content-center pl-3">
           <div class="text-center ">
           <h5 className="section-title">Testimonial</h5>
            <h3 className=" text-light">Client opinions about us</h3>

           </div>
           
           
            <div class="testimonial-container">
                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={6100}>
                    {testimonialData?.map((testimonial,index) => (
                        <MyTestimonial key={index} testimonial={testimonial} />
                    ))}

                </Carousel>
            </div>
        </div>
    );
};

export default MyTestimonials;