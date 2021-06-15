import React, { useEffect, useState } from 'react';
import search from '../../../images/search.png'
import bookkeeping from "../../../images/bookkeeping.png"
import accounting from "../../../images/accounts.png"
import financing from "../../../images/calcultor.png"
import man1 from "../../../images/business-1.jpg"
import man2 from "../../../images/business-2.jpg"
import man3 from "../../../images/business.jpg"
import man4 from "../../../images/business-4.jpg"
import "./OurService.css"
import ServiceList from '../ServiceList/ServiceList';
import OurService from '../OurService/OurService';
import Fade from 'react-reveal/Fade';
import AOS from "aos";
import "aos/dist/aos.css";



const Ourservices = () => {


    const serviceData = [
        {
            name: 'Book keeping',
            img: bookkeeping,
            price: 200,
            id: 0,
            bg: "#009c86",
            border: "#96d1c8",
            images: man1

        },
        {
            name: 'accounting service',
            img: accounting,
            price: 250,
            id: 1,
            bg: "#407294",
            border: "#c5d4de",
            images: man2

        },
        {
            name: 'Tax consultant',
            img: financing,
            price: 300,
            id: 2,
            bg: "#065535",
            border: "#b4ccc2",
            images: man3

        },
        {
            name: 'Tax consultant',
            img: financing,
            price: 300,
            id: 3,
            bg: "#f7347a",
            border: "#d2d2d2",
            images: man4

        }
    ]

    const [showService, setShowService] = useState([0]);
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, [showService.id]);



    return (
        <section id="service" >
            <div  style={{backgroundColor:"#fdf3ed",paddingBottom:"100px"}} className="row  justify-content-center  d-flex flex-sm-column flex-md-row
        service-container">
            <h5 className="text-center pt-5 section-title">
                service plane
            </h5>
            <h1 className="pb-5 text-center">
                Our popular services
            </h1>

                <div  id={`service-${showService}`}  className="col-md-2   ">
                    <div >

                        <ul class="nav  d-flex  justify-content-center  ">
                            {
                                serviceData.map(services => <OurService service={services} key={services.id} setShowService={setShowService}></OurService>)
                            }

                        </ul>
                    </div>
                </div>
                <div data-aos={"zoom-in-down"} style={{ backgroundColor: "#fdf3ed" }}  className="col-md-10  p-0 ">
                   
                        <div   class="card mb-3">
                            <div class="row d-flex  g-0">
                                <div  class="col-md-8 service-plane">
                                    <img width="700px" height="550px" src={serviceData[showService].images} alt="..."></img>
                                </div>
                                <div   class="col-md-4">
                                    <div class="card-body">
                                    <h1 style={{ color: `${serviceData[showService].bg}` }} class="card-title "> $ {serviceData[showService].price}</h1>

                                        <h4 class="card-title text-muted ">{serviceData[showService].name}</h4>
                                        <p class="card-text  text-muted px-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nobis autem nam amet maxime aperiam consequuntur molestiae dicta qui eveniet voluptatum, reprehenderit exercitationem repudiandae voluptas tenetur? Reprehenderit tempora nulla perferendis labore aliquid. Modi deleniti consequatur quod laboriosam debitis vitae, amet id voluptatum! Assumenda, vel corrupti. Pariatur commodi amet eius repellendus.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                </div>
            </div>

        </section>



    )
};

export default Ourservices;