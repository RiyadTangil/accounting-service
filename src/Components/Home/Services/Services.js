import React, { useEffect, useState } from 'react';
import bookkeeping from "../../../images/bookkeeping.png"
import accounting from "../../../images/accounts.png"
import financing from "../../../images/calcultor.png"
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import { addToDatabaseCart } from '../../../utilities/databaseManager';

const serviceData = [
    {
        name: 'Book keeping',
        img: bookkeeping,
        price: 200
    },
    {
        name: 'accounting service',
        img: accounting,
        price: 250
    },
    {
        name: 'Tax consultant',
        img: financing,
        price: 300
    }
]


const Services = () => {
    const[ serviceCollection,setServiceCollection]=useState([])
    useEffect(() => {
        fetch("https://morning-thicket-61908.herokuapp.com/service")
            .then(res => res.json())
            .then(data => setServiceCollection(data))
    }, [])
    const addTOLocalStorage=(id)=>{
        console.log("adding to database",id);
        addToDatabaseCart(id)
    }
    return (
        <section style={{ backgroundColor: "#DAAD86"}} className="service-container">
            <div className="text-center">
                <h5 style={{ color: '#DAAD86' }}>OUR SERVICES</h5>
                <h2>Services We Provide </h2>
            </div>
            <div className="d-flex justify-content-center  align-items-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceCollection.map(service => <ServiceDetails addTOLocalStorage={addTOLocalStorage} service={service} key={service.name}></ServiceDetails>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Services;