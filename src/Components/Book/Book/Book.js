import React, { useContext, useEffect, useState } from 'react';
import { UserContext, UserOrder } from '../../../App';
import { useForm } from "react-hook-form";
import PaymentProcess from '../../PaymentProcess/PaymentProcess';
import { Link } from 'react-router-dom';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';
import SideVarNav from '../../Dashboard/SidvarNav/SideVarNav';

const Book = () => {
    const [order, setOrder] = useContext(UserOrder)
    const [paymentId, setPaymentId] = useState(null)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [showPaymentBtn, setShowPaymentBTn] = useState(false)
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

        <div className="row">
            <SideVarNav></SideVarNav>
            <div className="col-md-9 mt-5 ">

            <div style={{ backgroundColor: "#F4FDFB" }} className="shadow pt-5 px-5">
                <div className=" d-flex   justify-content-center  flex-column">

              

                        <form   onSubmit={handleSubmit(handleOrder)} className="w-75 p-3  ">
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
                                    <Link to={"/home"}>    <button type="submit" data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn btn-primary"> Order now</button></Link>
                                </div>
                            }

                        </form>
                    </div>
                    {!showPaymentBtn &&
                        <div className="d-flex justify-content-start align-items-center">
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