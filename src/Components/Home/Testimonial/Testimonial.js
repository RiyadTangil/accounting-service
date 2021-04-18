import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons'

const Testimonial = (props) => {
    const { description, name, designation, img } = props.testimonial;
    return (
        <div className="col-md-4 ">
            <div className="card shadow-sm">
                <div className="card-body">
                    <p className="card-text text-center">{description}</p>
                </div>
                <div className="card-footer d-flex justify-content-around  align-items-center">
                    <div  className=" d-flex  align-items-between">
                        <img className="mx-3" src={img} alt="" width="60" />
                        <div>
                            <h6 className="text-primary">{name}</h6>
                            <p className="m-0">{designation}</p>
                        </div></div>
                    <div>
                        
                     <span style={{color:"gold"}}><FontAwesomeIcon icon={faStar} /></span>
                     <span style={{color:"gold"}}><FontAwesomeIcon icon={faStar} /></span>
                     <span style={{color:"gold"}}><FontAwesomeIcon icon={faStar} /></span>
                     <span style={{color:"gold"}}><FontAwesomeIcon icon={faStar} /></span>
                     <span style={{color:"gold"}}><FontAwesomeIcon icon={faStar} /></span>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;