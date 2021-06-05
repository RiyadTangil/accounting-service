
import React, { useState } from 'react';

import "./Ourservice.css"

const OurService = ({service,setShowService}) => {

    const [bgColour, setBgColour] = useState("#fafafa");

    const circleStyle = {
      background: `${bgColour}`,
      border:"15px solid",
      borderColor:`${service.border}`,
    
    };

    return (
    <li  onClick={()=>{setShowService(service.id)}}  class="nav-item">
        <a   class="nav-link" href={`#service-${service.id}`}>
            <div style={circleStyle}
            onMouseEnter={() => setBgColour(`${service.bg}`)}
            onMouseLeave={() => setBgColour("#fafafa")}
            class="nav-img">
                <img class="" width="40" alt="100x100" src={service.img}
                    data-holder-rendered="true"></img>
            </div>
        </a>
    </li>


    );
};

export default OurService;