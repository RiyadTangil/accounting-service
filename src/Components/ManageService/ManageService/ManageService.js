import React, { useEffect, useState } from 'react';
import SideVarNav from '../../Dashboard/SidvarNav/SideVarNav';

import MangesServiceDetails from '../ManageServiceDetails/MangesServiceDetails';

const ManageService = () => {

    const [serviceList, setServiceList] = useState([])
    const containerStyle = {
        backgroundColor: "#F4FDFB",
        border: '1px solid red'
    }

    useEffect(() => {
        fetch("https://accountingservice.vercel.app/service")
            .then(res => res.json())
            .then(data => setServiceList(data))
    }, [])



    return (
        <div className="row">
        <SideVarNav></SideVarNav>
        <div className="col-md-9 mt-5 ">  <h5 className="text-brand">All Service</h5>
            {
                <MangesServiceDetails service={serviceList}></MangesServiceDetails>
            }
        </div>
    </div>
    );
};

export default ManageService;