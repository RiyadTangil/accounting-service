import React, { useEffect, useState } from 'react';
import SideBar from '../../Dashboard/SideBar/SIdeBar';
import OrderListTable from '../OrderListTable/OrderListTable';

const OrderList = () => {
    const [orderList, setOrderList] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/orders")
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [])

    return (
        <div className="container-fluid row" >
        <SideBar></SideBar>
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">All Orders</h5>
            {
                <OrderListTable order={orderList}></OrderListTable>
            }
        </div>
    </div>
    );
};

export default OrderList;