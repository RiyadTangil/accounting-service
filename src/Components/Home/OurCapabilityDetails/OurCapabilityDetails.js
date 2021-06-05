import React from 'react';
import './OurCapabilityDetails.css'


const OurCapabilityDetails = ({service}) => {
    return (
        <div className="col-md-3 col-sm-6">
            <div className="text-center capacity shadow p-4">

                <img style={{ height: '100px' }} src={service.img} alt="" />
                <p style={{marginTop:"20px"}}>{service.title}</p>

            </div>
        </div>
    );
};

export default OurCapabilityDetails;