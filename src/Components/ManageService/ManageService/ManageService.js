import React, { useEffect, useState } from 'react';
import SideBar from '../../Dashboard/SideBar/SIdeBar';
import MangesServiceDetails from '../ManageServiceDetails/MangesServiceDetails';

const ManageService = () => {

    const [serviceList, setServiceList] = useState([])
    const containerStyle = {
        backgroundColor: "#F4FDFB",
        border: '1px solid red'
    }

    useEffect(() => {
        fetch("http://localhost:5000/service")
            .then(res => res.json())
            .then(data => setServiceList(data))
    }, [])



    return (
        <div className="container-fluid row" >
        <SideBar></SideBar>
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">All Service</h5>
            {
                <MangesServiceDetails service={serviceList}></MangesServiceDetails>
            }
        </div>
    </div>
    );
};

export default ManageService;