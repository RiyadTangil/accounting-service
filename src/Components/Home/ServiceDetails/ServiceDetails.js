import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext, UserOrder } from '../../../App';
import { useSpring, animated as a } from 'react-spring'
import image from '../../../images/accounts.png'
const ServiceDetails = ({ service }) => {

    const [flipped, set] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));

    }, [])








    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })



    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [order, setOrder] = useContext(UserOrder)
    const handleOrder = (service) => {
        setOrder(service);

    }

    return (

        <div className="col-md-4 col-sm-6">

            <div style={{paddingBottom:"80px"}}>
                <div onClick={() => set(state => !state)}>
                    {
                        !flipped ? <a.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} >
                            <div style={{backgroundColor:"white", borderRadius:"10px"}}  className=" text-center  shadow p-4">

                                <img style={{ height: '50px' }} src={`data:image/png;base64,${service.image.img}`} alt="" />
                                <h5 className="my-2 ">{service.name}</h5>
                                <h6 className="my-2">${service.price}</h6>

                                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>


                                <Link to = {isAdmin ? "/dashboard" :  "/book"} >  <button onClick={() => handleOrder(service)} variant="outline-primary">Buy now</button>{' '}</Link>

                            </div>
                        </a.div>
                            :
                            <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} >
                                <div className=" text-center shadow p-4">

                                    <img style={{ height: '240px' }} src={`data:image/png;base64,${service.image.img}`} alt="" />

                                </div>
                            </a.div>
                    }


                </div>
            </div>






        </div>


    );
};

export default ServiceDetails;