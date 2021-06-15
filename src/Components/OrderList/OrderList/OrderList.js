import React, { useEffect, useState } from 'react';
import SideVarNav from '../../Dashboard/SidvarNav/SideVarNav';
import OrderListTable from '../OrderListTable/OrderListTable';

const OrderList = () => {
    const [orderList, setOrderList] = useState([])
    const [show, setShow] = useState(false)



   
    useEffect(() => {
        fetch("https://morning-thicket-61908.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => setOrderList(data))
            console.log("working");

    }, [])
    const updateOrderStatus = (status,productKey) => {
        const updatedOrders = [];
        orderList.map(order=> {
            if (order._id === productKey) {
                order.status = status;
            }
            updatedOrders.push(order)
            setOrderList(updatedOrders);
        })
       
  

        let statusUpdatingInfo = {
            id: productKey,
            status: status
        };
        fetch(`https://morning-thicket-61908.herokuapp.com/update/${productKey}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(statusUpdatingInfo)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    console.log({ result });
                }
            })
        setShow(true)
    }

    return (
        <div className="row">

            <SideVarNav></SideVarNav>
            <div className="col-md-9 ">
                <div className=" p-4 pr-5" style={{ backgroundColor: "#F4FDFB" }}>
                    <h5 className="text-brand">All Orders</h5>
                    <div>
                        {
                            <OrderListTable order={orderList} updateOrderStatus={updateOrderStatus}></OrderListTable>
                        }
                    </div>
                </div>
            </div>
        </div>



    );
};

export default OrderList;