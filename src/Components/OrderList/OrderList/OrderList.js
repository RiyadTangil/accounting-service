import React, { useEffect, useState } from 'react';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';
import SideBar from '../../Dashboard/SideBar/SIdeBar';
import SideVarNav from '../../Dashboard/SidvarNav/SideVarNav';
import OrderListTable from '../OrderListTable/OrderListTable';

const OrderList = () => {
    const [orderList, setOrderList] = useState([])
    console.log("order list", orderList);
    useEffect(() => {
        fetch("https://morning-thicket-61908.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => setOrderList(data))

    }, [])

    return (
        <div className="row">

            <SideVarNav></SideVarNav>
            <div className="col-md-9 ">
                <div className=" p-4 pr-5" style={{ backgroundColor: "#F4FDFB" }}>
                    <h5 className="text-brand">All Orders</h5>
                    <div>
                        {
                            <OrderListTable order={orderList}></OrderListTable>
                        }
                    </div>
                </div>
            </div>
        </div>



    );
};

export default OrderList;