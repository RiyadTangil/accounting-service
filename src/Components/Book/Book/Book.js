import React, { useContext, useEffect, useState } from 'react';
import { UserContext, UserOrder } from '../../../App';
import { getDatabaseCart } from '../../../utilities/databaseManager';
import SideBar from '../../Dashboard/SideBar/SIdeBar';
import Services from '../../Home/Services/Services';
import { useForm } from "react-hook-form";
import PaymentProcess from '../../PaymentProcess/PaymentProcess';

const Book = () => {
    const [order, setOrder] = useContext(UserOrder)
    const [paymentId, setPaymentId] = useState(null)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
const [showPaymentBtn,setShowPaymentBTn]=useState(false)
    const handlePayment = (id) => {
        setPaymentId(id)
        setShowPaymentBTn(true)
    }
    console.log(paymentId);


    const handleOrder = () => {

        const orderInfo = {
            ...loggedInUser,
            orderTime: new Date(),
            "serviceName": order.name,
            "price": order.price,
            "description": order.description,
            "image": order.image,
            "status": "pending",
            "paymentId": paymentId
        }
        fetch("https://morning-thicket-61908.herokuapp.com/addOrder", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/Json'
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => console.log(data))

            setShowPaymentBTn(false)
    }



    return (
        <div className="container-fluid row" >
            <SideBar></SideBar>
            <div className="col-md-10 p-4 " style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>

                {/* <form onSubmit={handleOrder} className="w-50 p-5  shadow"> */}
                <div className="shadow">
                    <form onSubmit={handleSubmit(handleOrder)} className="w-50 p-3  ">
                        <div class="row mb-3">
                            <label for="inputPassword3" name='name' class="col-sm-2 col-form-label">your name</label>
                            <div class="col-sm-10">
                                <input type="text" defaultValue={loggedInUser.name} class="form-control" id=""></input>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputEmail3" name="email" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="email" defaultValue={loggedInUser.email} class="form-control" id="inputEmail3"></input>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputPassword3" name="service" class="col-sm-2 col-form-label">your service</label>
                            <div class="col-sm-10">
                                <input type="text" defaultValue={order.name} class="form-control" id=""></input>
                            </div>
                        </div>

                        <div className="row ">

                        </div>
                        {showPaymentBtn &&
                            <div className="d-flex justify-content-between ">
                                <p>your service charge wil be <strong> ${order.price}</strong></p>
                                <button type="submit" class="btn btn-primary"> Order now</button>
                            </div>
                        }

                    </form>
                    {!showPaymentBtn &&
                    <div className="d-flex justify-content-start">
                        <div className="row w-50 p-5">
                            <PaymentProcess handlePayment={handlePayment} ></PaymentProcess>
                        </div>
                    </div>}


                </div>
            </div>
        </div>
    );
};

export default Book;